/*
 * cookie.io — the small game that lives beside the homepage.
 *
 * This file is the whole simulation and nothing else: no canvas, no DOM, no
 * React. That is deliberate. The game has to be reproducible (a seeded
 * generator, so a failing case can be replayed) and verifiable without a
 * browser, so everything that decides an outcome — growth, eating, contact,
 * death, respawn — happens here, and `cookie-io.test.ts` drives it directly.
 *
 * The rules, in the order they matter:
 *
 *   1. Crumbs are food. Eating one makes the cookie bigger. Standing still
 *      also makes it bigger, slowly: surviving is itself the reward.
 *   2. Touching another cookie kills. The one exception is a cookie you
 *      clearly outweigh (EAT_RATIO), which you absorb instead.
 *   3. The baking sheet has an edge. It stops you; it does not kill you.
 *
 * Every number below is a tuning constant, collected at the top on purpose so
 * the feel of the game can be changed without reading the rest of the file.
 */

const TAU = Math.PI * 2;

/* ---------- tuning ---------- */

export const ARENA = 6000;
export const PLAYER_START_RADIUS = 15;
export const MAX_RADIUS = 110;
export const BASE_SPEED = 128;
export const MIN_SPEED = 84;
export const SPEED_FALLOFF = 0.22;
export const TURN_RATE = 3.4;
export const BOOST_MULTIPLIER = 1.65;
export const BOOST_DRAIN = 2.4;
export const GROWTH_PER_SECOND = 0.3;
export const CRUMB_GROWTH = 0.3;
export const CHIP_GROWTH = 1;
export const CRUMB_EAT_RADIUS = 3.4;
export const CHIP_EAT_RADIUS = 5.4;
export const EAT_RATIO = 1.25;
/**
 * How much two circles must overlap before it counts as touching. At 1 the
 * outlines are enough; below 1 the two cookies have to visibly interpenetrate.
 * The margin runs in the visitor's favour on purpose — a death that a player
 * cannot see coming reads as a cheat, and the outlines on screen are the only
 * evidence they have. Set to 1 for literal contact.
 */
export const CONTACT_GRACE = 0.68;
export const SCORE_CRUMB = 1;
export const SCORE_CHIP = 4;
export const SCORE_ABSORB = 20;
export const TARGET_CRUMBS = 420;
export const CHIP_CHANCE = 0.18;
export const SPAWN_MIN_DISTANCE = 130;
export const SPAWN_MAX_DISTANCE = 520;
export const BOT_COUNT = 5;
export const BOT_GROWTH_PER_SECOND = 0.12;
export const BOT_BASE_SPEED = 112;
export const BOT_MIN_SPEED = 70;
export const BOT_TURN_RATE = 2.6;
export const BOT_SPAWN_MIN_DISTANCE = 1100;
export const BOT_SPAWN_MAX_DISTANCE = 2000;
export const BOT_HUNT_DISTANCE = 300;
export const BOT_HUNT_RATIO = 1.6;
export const MAX_PARTICLES = 180;
export const NAME_COUNT = 9;

/* ---------- types ---------- */

export type Vec = { x: number; y: number };
export type CrumbKind = "crumb" | "chip";
export type GameStatus = "ready" | "playing" | "over";

export type Crumb = { id: number; kind: CrumbKind; x: number; y: number; spin: number };

export type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  radius: number;
  color: string;
};

export type Cookie = {
  id: number;
  /** Index into the localized name list; -1 for the player. */
  nameIndex: number;
  x: number;
  y: number;
  radius: number;
  heading: number;
  targetX: number;
  targetY: number;
  retarget: number;
};

export type World = {
  arena: number;
  seed: number;
  status: GameStatus;
  player: Cookie;
  bots: Cookie[];
  crumbs: Crumb[];
  particles: Particle[];
  time: number;
  score: number;
  eaten: number;
  absorbed: number;
  cause: "cookie" | null;
  killerId: number | null;
  boosting: boolean;
  /** Monotonic step counter, so a test can prove the clock only ran while playing. */
  steps: number;
  random: () => number;
  nextId: number;
};

export type Input = { turnToward: Vec | null; boost: boolean };

export type LeaderEntry = { id: number; nameIndex: number; radius: number; player: boolean };

/* ---------- helpers ---------- */

export function clampNumber(value: number, min: number, max: number): number {
  return value < min ? min : value > max ? max : value;
}

/** Shortest-path turn, capped at `maxDelta` radians. */
export function turnToward(from: number, to: number, maxDelta: number): number {
  const delta = ((to - from + Math.PI) % TAU + TAU) % TAU - Math.PI;
  if (Math.abs(delta) <= maxDelta) return to;
  return from + Math.sign(delta) * maxDelta;
}

/** Bigger cookies are heavier and therefore slower, so growing has a cost. */
export function cookieSpeed(radius: number, base = BASE_SPEED, min = MIN_SPEED): number {
  return clampNumber(base * (PLAYER_START_RADIUS / radius) ** SPEED_FALLOFF, min, base);
}

export function distance(a: Vec, b: Vec): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function squaredDistance(a: Vec, b: Vec): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

/** Seeded generator: the same seed always produces the same game. */
function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function formatTime(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(whole / 60);
  return `${minutes}:${String(whole % 60).padStart(2, "0")}`;
}

/* ---------- steering ---------- */

/**
 * Held key codes as direction. Codes, not letters: the keyboard layout cannot
 * break steering, so a visitor typing on a Cyrillic or AZERTY keyboard gets the
 * same four directions under the same four keys.
 */
export const STEERING_CODES: Record<string, Vec> = {
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  KeyA: { x: -1, y: 0 },
  KeyD: { x: 1, y: 0 },
  KeyW: { x: 0, y: -1 },
  KeyS: { x: 0, y: 1 },
};

/** The stage only swallows keys it actually uses, so nothing else is hijacked. */
export function isHandledKey(code: string): boolean {
  return code in STEERING_CODES || code === "Space" || code === "KeyP" || code === "Escape";
}

/** A pointer nearer than this to the middle means "keep going", not "turn". */
export const POINTER_DEAD_ZONE = 14;

/**
 * Where the cookie is being told to go, or null to hold its current heading.
 * Keys outrank the pointer, because a mouse resting off-centre must not fight a
 * held arrow key, and the pointer is only read against the middle of the stage —
 * the camera is always centred on the player, so a direction is all that matters.
 */
export function steeringFor(held: Iterable<string>, pointer: Vec | null, view: { width: number; height: number }): Vec | null {
  let x = 0;
  let y = 0;
  for (const code of held) {
    const vector = STEERING_CODES[code];
    if (vector) {
      x += vector.x;
      y += vector.y;
    }
  }
  if (x !== 0 || y !== 0) return { x, y };
  if (!pointer) return null;
  const dx = pointer.x - view.width / 2;
  const dy = pointer.y - view.height / 2;
  if (Math.hypot(dx, dy) < POINTER_DEAD_ZONE) return null;
  return { x: dx, y: dy };
}

/* ---------- construction ---------- */

function makeCookie(id: number, nameIndex: number, x: number, y: number, radius: number, heading: number): Cookie {
  return { id, nameIndex, x, y, radius, heading, targetX: x, targetY: y, retarget: 0 };
}

/** A point `min`..`max` away from (cx, cy) that is still on the baking sheet. */
function scatterPoint(world: World, cx: number, cy: number, min: number, max: number, margin: number): Vec {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const angle = world.random() * TAU;
    const reach = min + world.random() * Math.max(0, max - min);
    const x = cx + Math.cos(angle) * reach;
    const y = cy + Math.sin(angle) * reach;
    if (x >= margin && x <= world.arena - margin && y >= margin && y <= world.arena - margin) return { x, y };
  }
  return {
    x: margin + world.random() * Math.max(1, world.arena - margin * 2),
    y: margin + world.random() * Math.max(1, world.arena - margin * 2),
  };
}

function makeCrumb(world: World): Crumb {
  const kind: CrumbKind = world.random() < CHIP_CHANCE ? "chip" : "crumb";
  const point = scatterPoint(world, world.player.x, world.player.y, SPAWN_MIN_DISTANCE, SPAWN_MAX_DISTANCE, 20);
  return { id: (world.nextId += 1), kind, x: point.x, y: point.y, spin: world.random() * TAU };
}

function makeBot(world: World, first: boolean): Cookie {
  const point = scatterPoint(world, world.player.x, world.player.y, BOT_SPAWN_MIN_DISTANCE, BOT_SPAWN_MAX_DISTANCE, 70);
  /* The opening board carries one clearly larger cookie, so the first lesson is
     avoidance rather than a slow drift toward danger — but not so large that a
     first-time visitor is caught and killed before they have read the rules. */
  const big = first && world.bots.length === 0;
  const radius = big ? 26 + world.random() * 8 : 12 + world.random() * 14;
  return makeCookie((world.nextId += 1), world.bots.length % NAME_COUNT, point.x, point.y, radius, world.random() * TAU);
}

export function createWorld(seed = 1): World {
  const world: World = {
    arena: ARENA,
    seed,
    status: "ready",
    player: makeCookie(0, -1, 0, 0, PLAYER_START_RADIUS, 0),
    bots: [],
    crumbs: [],
    particles: [],
    time: 0,
    score: 0,
    eaten: 0,
    absorbed: 0,
    cause: null,
    killerId: null,
    boosting: false,
    steps: 0,
    random: mulberry32(seed),
    nextId: 0,
  };
  const origin = scatterPoint(world, ARENA / 2, ARENA / 2, 0, 260, 60);
  world.player.x = origin.x;
  world.player.y = origin.y;
  world.player.heading = world.random() * TAU;
  refillBots(world);
  refillCrumbs(world);
  return world;
}

export function startWorld(world: World): World {
  world.status = "playing";
  return world;
}

/** Death starts a new game rather than continuing the old one. */
export function restartWorld(world: World): World {
  return startWorld(createWorld(world.seed + 1));
}

/* ---------- spawning ---------- */

function refillCrumbs(world: World): void {
  while (world.crumbs.length < TARGET_CRUMBS) world.crumbs.push(makeCrumb(world));
}

function refillBots(world: World): void {
  while (world.bots.length < BOT_COUNT) world.bots.push(makeBot(world, true));
}

/** A death leaves food behind, which is what makes the board worth playing in. */
function dropFeast(world: World, x: number, y: number, radius: number): void {
  const pieces = Math.round(clampNumber(4 + radius / 8, 4, 10));
  for (let index = 0; index < pieces; index += 1) {
    const angle = (index / pieces) * TAU + world.random() * 0.4;
    const reach = radius * (0.6 + world.random() * 0.7);
    world.crumbs.push({
      id: (world.nextId += 1),
      kind: "chip",
      x: clampNumber(x + Math.cos(angle) * reach, 14, world.arena - 14),
      y: clampNumber(y + Math.sin(angle) * reach, 14, world.arena - 14),
      spin: world.random() * TAU,
    });
  }
  addParticles(world, x, y, 14, "burst");
}

function addParticles(world: World, x: number, y: number, count: number, kind: CrumbKind | "burst"): void {
  const palette =
    kind === "chip"
      ? ["#6b3421", "#8a4a2a", "#ffd968"]
      : kind === "crumb"
        ? ["#e0a94d", "#ffd968", "#fff5b0"]
        : ["#ffd968", "#fff5b0", "#c31563", "#f0c56a"];
  for (let index = 0; index < count; index += 1) {
    const angle = world.random() * TAU;
    const speed = 40 + world.random() * 130;
    world.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      age: 0,
      life: 0.35 + world.random() * 0.4,
      radius: 1.6 + world.random() * 2.2,
      color: palette[Math.floor(world.random() * palette.length)],
    });
  }
  if (world.particles.length > MAX_PARTICLES) {
    world.particles.splice(0, world.particles.length - MAX_PARTICLES);
  }
}

/* ---------- movement and eating ---------- */

function moveCookie(world: World, cookie: Cookie, speed: number, dt: number): void {
  const nextX = cookie.x + Math.cos(cookie.heading) * speed * dt;
  const nextY = cookie.y + Math.sin(cookie.heading) * speed * dt;
  /* The sheet edge is a wall, not a death: it clamps, it does not punish. */
  cookie.x = clampNumber(nextX, cookie.radius, world.arena - cookie.radius);
  cookie.y = clampNumber(nextY, cookie.radius, world.arena - cookie.radius);
}

function eatCrumbs(world: World, cookie: Cookie, isPlayer: boolean): void {
  for (let index = world.crumbs.length - 1; index >= 0; index -= 1) {
    const crumb = world.crumbs[index];
    const reach = cookie.radius + (crumb.kind === "chip" ? CHIP_EAT_RADIUS : CRUMB_EAT_RADIUS);
    if (squaredDistance(cookie, crumb) > reach * reach) continue;
    world.crumbs.splice(index, 1);
    cookie.radius = Math.min(MAX_RADIUS, cookie.radius + (crumb.kind === "chip" ? CHIP_GROWTH : CRUMB_GROWTH));
    addParticles(world, crumb.x, crumb.y, crumb.kind === "chip" ? 4 : 3, crumb.kind);
    if (isPlayer) {
      world.eaten += 1;
      world.score += crumb.kind === "chip" ? SCORE_CHIP : SCORE_CRUMB;
    }
  }
}

function nearestCrumb(world: World, cookie: Cookie, within: number): Crumb | null {
  let best: Crumb | null = null;
  let bestDistance = within * within;
  for (const crumb of world.crumbs) {
    const candidate = squaredDistance(cookie, crumb);
    if (candidate < bestDistance) {
      bestDistance = candidate;
      best = crumb;
    }
  }
  return best;
}

/** Bots only hunt at close range with a decisive size advantage; otherwise they graze. */
function thinkBot(world: World, bot: Cookie, dt: number): void {
  const player = world.player;
  const gap = distance(bot, player);
  let desired: Vec | null = null;

  if (world.status === "playing" && gap < 360) {
    if (player.radius >= bot.radius * EAT_RATIO) desired = { x: bot.x - player.x, y: bot.y - player.y };
  } else if (world.status === "playing" && bot.radius >= player.radius * BOT_HUNT_RATIO && gap < BOT_HUNT_DISTANCE) {
    desired = { x: player.x - bot.x, y: player.y - bot.y };
  }

  if (!desired) {
    const crumb = nearestCrumb(world, bot, 620);
    if (crumb) desired = { x: crumb.x - bot.x, y: crumb.y - bot.y };
  }

  bot.retarget -= dt;
  if (!desired) {
    if (bot.retarget <= 0) {
      bot.retarget = 1.6 + world.random() * 2.2;
      const angle = world.random() * TAU;
      const reach = 200 + world.random() * 320;
      bot.targetX = clampNumber(bot.x + Math.cos(angle) * reach, 40, world.arena - 40);
      bot.targetY = clampNumber(bot.y + Math.sin(angle) * reach, 40, world.arena - 40);
    }
    desired = { x: bot.targetX - bot.x, y: bot.targetY - bot.y };
  }

  /* Nudge away from the edge, so a bot cannot grind along the wall forever. */
  const margin = 90;
  if (bot.x < margin) desired.x += (margin - bot.x) / margin;
  if (bot.x > world.arena - margin) desired.x -= (bot.x - (world.arena - margin)) / margin;
  if (bot.y < margin) desired.y += (margin - bot.y) / margin;
  if (bot.y > world.arena - margin) desired.y -= (bot.y - (world.arena - margin)) / margin;

  bot.radius = Math.min(MAX_RADIUS, bot.radius + BOT_GROWTH_PER_SECOND * dt);
  bot.heading = turnToward(bot.heading, Math.atan2(desired.y, desired.x), BOT_TURN_RATE * dt);
}

function separate(a: Cookie, b: Cookie): void {
  const axis = { x: b.x - a.x, y: b.y - a.y };
  const length = Math.hypot(axis.x, axis.y) || 1;
  const overlap = (a.radius + b.radius - length) / 2 + 0.5;
  const nx = (axis.x / length) * overlap;
  const ny = (axis.y / length) * overlap;
  a.x -= nx;
  a.y -= ny;
  b.x += nx;
  b.y += ny;
}

function absorb(world: World, eater: Cookie, prey: Cookie): void {
  eater.radius = Math.min(MAX_RADIUS, eater.radius + prey.radius * 0.22);
  dropFeast(world, prey.x, prey.y, prey.radius);
}

function killPlayer(world: World, killer: Cookie): void {
  world.status = "over";
  world.cause = "cookie";
  world.killerId = killer.id;
  world.boosting = false;
  dropFeast(world, world.player.x, world.player.y, world.player.radius);
}

function resolveBotContacts(world: World): void {
  const dead = new Set<number>();
  const bots = world.bots;
  for (let i = 0; i < bots.length; i += 1) {
    if (dead.has(bots[i].id)) continue;
    for (let j = i + 1; j < bots.length; j += 1) {
      const a = bots[i];
      const b = bots[j];
      if (dead.has(b.id)) continue;
      const contact = a.radius + b.radius;
      if (squaredDistance(a, b) > contact * contact) continue;
      if (a.radius >= b.radius * EAT_RATIO) {
        dead.add(b.id);
        absorb(world, a, b);
      } else if (b.radius >= a.radius * EAT_RATIO) {
        dead.add(a.id);
        absorb(world, b, a);
      } else {
        separate(a, b);
      }
    }
  }
  if (dead.size) world.bots = bots.filter((bot) => !dead.has(bot.id));
}

function resolvePlayerContacts(world: World): void {
  const player = world.player;
  const dead = new Set<number>();
  let killer: Cookie | null = null;
  for (const bot of world.bots) {
    const contact = (bot.radius + player.radius) * CONTACT_GRACE;
    if (squaredDistance(bot, player) > contact * contact) continue;
    if (player.radius >= bot.radius * EAT_RATIO) {
      dead.add(bot.id);
      absorb(world, player, bot);
      world.absorbed += 1;
      world.score += SCORE_ABSORB + Math.round(bot.radius);
    } else {
      killer = bot;
      break;
    }
  }
  if (dead.size) world.bots = world.bots.filter((bot) => !dead.has(bot.id));
  if (killer) killPlayer(world, killer);
}

function updateParticles(world: World, dt: number): void {
  for (let index = world.particles.length - 1; index >= 0; index -= 1) {
    const particle = world.particles[index];
    particle.age += dt;
    if (particle.age >= particle.life) {
      world.particles.splice(index, 1);
      continue;
    }
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vx *= 0.94;
    particle.vy *= 0.94;
  }
}

/* ---------- stepping ---------- */

export function stepWorld(world: World, dt: number, input: Input): void {
  if (world.status !== "playing") return;
  /* A tab that was asleep must not teleport anything: clamp the frame. */
  const step = clampNumber(dt, 0, 0.05);
  world.steps += 1;
  world.time += step;

  const player = world.player;
  world.boosting = input.boost;
  if (world.boosting) player.radius = Math.max(PLAYER_START_RADIUS, player.radius - BOOST_DRAIN * step);
  player.radius = Math.min(MAX_RADIUS, player.radius + GROWTH_PER_SECOND * step);
  if (input.turnToward && (input.turnToward.x !== 0 || input.turnToward.y !== 0)) {
    player.heading = turnToward(player.heading, Math.atan2(input.turnToward.y, input.turnToward.x), TURN_RATE * step);
  }
  moveCookie(world, player, cookieSpeed(player.radius) * (world.boosting ? BOOST_MULTIPLIER : 1), step);
  eatCrumbs(world, player, true);

  for (const bot of world.bots) {
    thinkBot(world, bot, step);
    moveCookie(world, bot, cookieSpeed(bot.radius, BOT_BASE_SPEED, BOT_MIN_SPEED), step);
    eatCrumbs(world, bot, false);
  }

  resolveBotContacts(world);
  resolvePlayerContacts(world);
  updateParticles(world, step);
  refillCrumbs(world);
  refillBots(world);
}

/* ---------- read-outs ---------- */

export function leaderboard(world: World, count = 5): LeaderEntry[] {
  const rows: LeaderEntry[] = [
    { id: world.player.id, nameIndex: -1, radius: world.player.radius, player: true },
    ...world.bots.map((bot) => ({ id: bot.id, nameIndex: bot.nameIndex, radius: bot.radius, player: false })),
  ];
  rows.sort((a, b) => b.radius - a.radius);
  return rows.slice(0, count);
}

export function playerRank(world: World): number {
  const bigger = world.bots.filter((bot) => bot.radius > world.player.radius).length;
  return bigger + 1;
}
