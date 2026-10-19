import {
  ARENA,
  BOT_COUNT,
  CRUMB_GROWTH,
  EAT_RATIO,
  GROWTH_PER_SECOND,
  MAX_RADIUS,
  PLAYER_START_RADIUS,
  SCORE_CRUMB,
  TARGET_CRUMBS,
  createWorld,
  formatTime,
  isHandledKey,
  leaderboard,
  playerRank,
  restartWorld,
  startWorld,
  steeringFor,
  stepWorld,
  type World,
} from "@/lib/cookie-io";

/*
 * These tests exist because the rules of the game are the only thing standing
 * between a visitor and an unfair death: a contact that should have been an
 * absorption, a crumb that failed to respawn, a frame that teleported the
 * cookie across the board. The world is seeded, so every case here replays.
 */

const FRAME = 1 / 60;

/** A world with no crumbs and no bots, so a single step tests exactly one rule. */
function bareWorld(seed = 7): World {
  const world = createWorld(seed);
  world.crumbs = [];
  world.bots = [];
  return world;
}

function stepMany(world: World, seconds: number, dt = FRAME): void {
  const steps = Math.round(seconds / dt);
  for (let index = 0; index < steps; index += 1) stepWorld(world, dt, { turnToward: null, boost: false });
}

describe("the opening board", () => {
  it("starts paused, with a full field of crumbs and every bot on the sheet", () => {
    const world = createWorld(11);
    expect(ARENA).toBeGreaterThanOrEqual(5400);
    expect(world.status).toBe("ready");
    expect(world.crumbs).toHaveLength(TARGET_CRUMBS);
    expect(world.bots).toHaveLength(BOT_COUNT);
    expect(world.player.radius).toBe(PLAYER_START_RADIUS);
    for (const cookie of [world.player, ...world.bots]) {
      expect(cookie.x).toBeGreaterThanOrEqual(0);
      expect(cookie.x).toBeLessThanOrEqual(ARENA);
      expect(cookie.y).toBeGreaterThanOrEqual(0);
      expect(cookie.y).toBeLessThanOrEqual(ARENA);
      expect(cookie.radius).toBeLessThan(MAX_RADIUS);
    }
  });

  it("does not run a single step until the game is started", () => {
    const world = createWorld(12);
    stepMany(world, 2);
    expect(world.time).toBe(0);
    expect(world.steps).toBe(0);
    startWorld(world);
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.steps).toBe(1);
  });

  it("gives the player room to breathe: no bot within contact distance of the start point", () => {
    const world = createWorld(13);
    for (const bot of world.bots) {
      const gap = Math.hypot(bot.x - world.player.x, bot.y - world.player.y);
      expect(gap).toBeGreaterThan(world.player.radius + bot.radius);
    }
  });
});

describe("growing", () => {
  it("grows from surviving alone, even with nothing to eat", () => {
    const world = bareWorld(21);
    startWorld(world);
    /* One second is safe by construction: the nearest bot starts at least 560
       units away and cannot close that gap that fast. */
    stepMany(world, 1);
    expect(world.time).toBeGreaterThan(0.99);
    /* Survival itself is growth; crumbs only add to it. */
    expect(world.player.radius - PLAYER_START_RADIUS).toBeGreaterThanOrEqual(GROWTH_PER_SECOND * world.time - 1e-9);
  });

  it("slows down as it grows, so size is never free", () => {
    const small = Math.pow(PLAYER_START_RADIUS / PLAYER_START_RADIUS, 0.22);
    expect(small).toBe(1);
    const world = bareWorld(22);
    startWorld(world);
    const startPosition = { x: world.player.x, y: world.player.y };
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    const smallStep = Math.hypot(world.player.x - startPosition.x, world.player.y - startPosition.y);
    world.player.radius = PLAYER_START_RADIUS * 4;
    world.player.heading = 0;
    world.player.x = ARENA / 2;
    world.player.y = ARENA / 2;
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    const bigStep = Math.hypot(world.player.x - ARENA / 2, world.player.y - ARENA / 2);
    expect(bigStep).toBeLessThan(smallStep);
  });

  it("is capped, so the sheet stays playable", () => {
    const world = bareWorld(23);
    startWorld(world);
    world.player.radius = MAX_RADIUS;
    stepMany(world, 1);
    expect(world.player.radius).toBe(MAX_RADIUS);
  });
});

describe("crumbs", () => {
  it("eats a crumb it reaches, scores it, and puts a fresh one back on the sheet", () => {
    const world = bareWorld(31);
    startWorld(world);
    world.player.x = ARENA / 2;
    world.player.y = ARENA / 2;
    world.player.heading = 0;
    world.crumbs = [{ id: 900, kind: "crumb", x: world.player.x + 8, y: world.player.y, spin: 0 }];
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.eaten).toBe(1);
    expect(world.score).toBe(SCORE_CRUMB);
    expect(world.crumbs.length).toBeGreaterThanOrEqual(TARGET_CRUMBS);
    expect(world.crumbs.some((crumb) => crumb.id === 900)).toBe(false);
    expect(world.player.radius).toBeGreaterThanOrEqual(PLAYER_START_RADIUS + CRUMB_GROWTH);
  });

  it("leaves crumbs alone until they touch, and keeps the field stocked", () => {
    const world = bareWorld(32);
    startWorld(world);
    world.player.x = ARENA / 2;
    world.player.y = ARENA / 2;
    world.crumbs = [{ id: 901, kind: "chip", x: world.player.x + 400, y: world.player.y, spin: 0 }];
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.eaten).toBe(0);
    expect(world.crumbs.length).toBeGreaterThanOrEqual(TARGET_CRUMBS);
  });

  it("keeps the field stocked and inside the sheet while the game runs", () => {
    const world = createWorld(33);
    startWorld(world);
    stepMany(world, 12);
    /* A killed cookie leaves food behind, so the field can run over the target
       but never under it. */
    expect(world.crumbs.length).toBeGreaterThanOrEqual(TARGET_CRUMBS);
    expect(world.crumbs.length).toBeLessThanOrEqual(TARGET_CRUMBS + 80);
    for (const crumb of world.crumbs) {
      expect(crumb.x).toBeGreaterThan(0);
      expect(crumb.x).toBeLessThan(ARENA);
      expect(crumb.y).toBeGreaterThan(0);
      expect(crumb.y).toBeLessThan(ARENA);
    }
  });
});

describe("contact", () => {
  it("dies when a bigger cookie touches it, and names the cookie that did it", () => {
    const world = bareWorld(41);
    startWorld(world);
    const attacker = { id: 700, nameIndex: 3, x: world.player.x, y: world.player.y, radius: 40, heading: 0, targetX: 0, targetY: 0, retarget: 0 };
    world.bots = [attacker];
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.status).toBe("over");
    expect(world.cause).toBe("cookie");
    expect(world.killerId).toBe(700);
  });

  it("dies against a cookie it does not clearly outweigh", () => {
    const world = bareWorld(42);
    startWorld(world);
    /* Equal size is still a death: the margin has to be earned. */
    world.bots = [{ id: 701, nameIndex: 1, x: world.player.x, y: world.player.y, radius: PLAYER_START_RADIUS, heading: 0, targetX: 0, targetY: 0, retarget: 0 }];
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.status).toBe("over");
    expect(world.player.radius).toBeLessThan(PLAYER_START_RADIUS * EAT_RATIO);
  });

  it("absorbs a cookie it outweighs, and both the score and the board recover", () => {
    const world = bareWorld(43);
    startWorld(world);
    const prey = { id: 702, nameIndex: 2, x: world.player.x, y: world.player.y, radius: 11, heading: 0, targetX: 0, targetY: 0, retarget: 0 };
    world.bots = [prey];
    const before = world.player.radius;
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.status).toBe("playing");
    expect(world.absorbed).toBe(1);
    expect(world.score).toBeGreaterThanOrEqual(20);
    expect(world.player.radius).toBeGreaterThan(before);
    expect(world.bots).toHaveLength(BOT_COUNT);
    expect(world.bots.some((bot) => bot.id === 702)).toBe(false);
  });

  it("does not kill on a graze, but does once the outlines properly overlap", () => {
    /* Radius 13 is heavier than the player can swallow (15 < 13 × 1.25), so this
       is a cookie that kills rather than a cookie that gets eaten. */
    const graze = bareWorld(46);
    startWorld(graze);
    const reach = graze.player.radius + 13;
    graze.bots = [{ id: 706, nameIndex: 5, x: graze.player.x + reach * 0.95, y: graze.player.y, radius: 13, heading: 0, targetX: 0, targetY: 0, retarget: 0 }];
    stepWorld(graze, 0.0001, { turnToward: null, boost: false });
    expect(graze.status).toBe("playing");

    const hit = bareWorld(47);
    startWorld(hit);
    hit.bots = [{ id: 707, nameIndex: 5, x: hit.player.x + reach * 0.6, y: hit.player.y, radius: 13, heading: 0, targetX: 0, targetY: 0, retarget: 0 }];
    stepWorld(hit, 0.0001, { turnToward: null, boost: false });
    expect(hit.status).toBe("over");
  });

  it("lets the player escape a close pass before an opponent can eat it", () => {
    const world = bareWorld(48);
    startWorld(world);
    const reach = world.player.radius + 13;
    world.bots = [{ id: 708, nameIndex: 5, x: world.player.x + reach * 0.75, y: world.player.y, radius: 13, heading: 0, targetX: 0, targetY: 0, retarget: 0 }];
    stepWorld(world, 0.0001, { turnToward: null, boost: false });
    expect(world.status).toBe("playing");
  });

  it("stops the clock at the moment of death", () => {
    const world = bareWorld(44);
    startWorld(world);
    world.bots = [{ id: 703, nameIndex: 4, x: world.player.x, y: world.player.y, radius: 50, heading: 0, targetX: 0, targetY: 0, retarget: 0 }];
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    const frozen = world.time;
    stepMany(world, 3);
    expect(world.time).toBe(frozen);
  });

  it("keeps bots away from each other's throats unless one is clearly bigger", () => {
    const world = bareWorld(45);
    startWorld(world);
    world.bots = [
      { id: 704, nameIndex: 0, x: ARENA / 2, y: ARENA / 2, radius: 20, heading: 0, targetX: 0, targetY: 0, retarget: 0 },
      { id: 705, nameIndex: 1, x: ARENA / 2 + 24, y: ARENA / 2, radius: 20, heading: 0, targetX: 0, targetY: 0, retarget: 0 },
    ];
    world.player.x = 100;
    world.player.y = 100;
    stepWorld(world, FRAME, { turnToward: null, boost: false });
    expect(world.bots).toHaveLength(BOT_COUNT);
    expect(world.bots.some((bot) => bot.id === 704)).toBe(true);
    expect(world.bots.some((bot) => bot.id === 705)).toBe(true);
  });
});

describe("the sheet edge", () => {
  it("stops a cookie instead of killing it", () => {
    const world = bareWorld(51);
    startWorld(world);
    world.player.x = 60;
    world.player.y = 60;
    world.player.heading = Math.PI * 1.25;
    stepMany(world, 2);
    expect(world.status).toBe("playing");
    expect(world.player.x).toBeGreaterThanOrEqual(world.player.radius - 1e-9);
    expect(world.player.y).toBeGreaterThanOrEqual(world.player.radius - 1e-9);
    expect(world.player.x).toBeLessThanOrEqual(ARENA - world.player.radius + 1e-9);
  });
});

describe("hurrying", () => {
  it("is faster and costs size, but never eats into the starting cookie", () => {
    const plain = bareWorld(61);
    startWorld(plain);
    plain.player.radius = 40;
    plain.player.x = ARENA / 2;
    plain.player.y = ARENA / 2;
    plain.player.heading = 0;
    const boosted = bareWorld(61);
    startWorld(boosted);
    boosted.player.radius = 40;
    boosted.player.x = ARENA / 2;
    boosted.player.y = ARENA / 2;
    boosted.player.heading = 0;

    stepWorld(plain, FRAME, { turnToward: null, boost: false });
    stepWorld(boosted, FRAME, { turnToward: null, boost: true });
    const plainStep = plain.player.x - ARENA / 2;
    const boostedStep = boosted.player.x - ARENA / 2;
    expect(boostedStep).toBeGreaterThan(plainStep);
    expect(boosted.player.radius).toBeLessThan(plain.player.radius);
  });

  it("lets a newly spawned cookie use a turbo burst", () => {
    const world = bareWorld(62);
    startWorld(world);
    expect(world.player.radius).toBe(PLAYER_START_RADIUS);
    stepWorld(world, FRAME, { turnToward: null, boost: true });
    expect(world.boosting).toBe(true);
    expect(world.player.radius).toBeGreaterThanOrEqual(PLAYER_START_RADIUS);
  });
});

describe("the clock", () => {
  it("ignores a frame that arrived late, so a sleeping tab cannot teleport anything", () => {
    const world = bareWorld(71);
    startWorld(world);
    stepWorld(world, 5, { turnToward: null, boost: false });
    expect(world.time).toBeLessThanOrEqual(0.05);
  });

  it("formats a survival time the way a scoreboard does", () => {
    expect(formatTime(0)).toBe("0:00");
    expect(formatTime(9.9)).toBe("0:09");
    expect(formatTime(65)).toBe("1:05");
    expect(formatTime(600)).toBe("10:00");
  });
});

describe("steering", () => {
  const view = { width: 240, height: 240 };

  it("reads the arrow keys and W A S D as the same four directions", () => {
    expect(steeringFor(["ArrowRight"], null, view)).toEqual({ x: 1, y: 0 });
    expect(steeringFor(["KeyD"], null, view)).toEqual({ x: 1, y: 0 });
    expect(steeringFor(["ArrowUp"], null, view)).toEqual({ x: 0, y: -1 });
    expect(steeringFor(["KeyW"], null, view)).toEqual({ x: 0, y: -1 });
    expect(steeringFor(["ArrowLeft"], null, view)).toEqual({ x: -1, y: 0 });
    expect(steeringFor(["KeyS"], null, view)).toEqual({ x: 0, y: 1 });
  });

  it("adds two held keys into a diagonal", () => {
    expect(steeringFor(["ArrowRight", "ArrowDown"], null, view)).toEqual({ x: 1, y: 1 });
  });

  it("lets a held key outrank a parked pointer", () => {
    expect(steeringFor(["ArrowLeft"], { x: 230, y: 120 }, view)).toEqual({ x: -1, y: 0 });
  });

  it("ignores a pointer resting near the middle, so the cookie keeps its line", () => {
    expect(steeringFor([], { x: 120, y: 120 }, view)).toBeNull();
    expect(steeringFor([], { x: 128, y: 126 }, view)).toBeNull();
    expect(steeringFor([], null, view)).toBeNull();
  });

  it("steers toward a pointer away from the middle", () => {
    const right = steeringFor([], { x: 220, y: 120 }, view);
    expect(right?.x).toBeGreaterThan(0);
    expect(Math.abs(right?.y ?? 1)).toBeLessThan(0.001);
    const up = steeringFor([], { x: 120, y: 20 }, view);
    expect(up?.y).toBeLessThan(0);
  });

  it("claims only the keys it uses, so nothing else is hijacked", () => {
    for (const code of ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD", "Space", "KeyP", "Escape"]) {
      expect(isHandledKey(code)).toBe(true);
    }
    for (const code of ["KeyZ", "Enter", "Tab", "F5"]) {
      expect(isHandledKey(code)).toBe(false);
    }
  });
});

describe("the board", () => {
  it("ranks the biggest cookies first and keeps the player among them", () => {
    const world = createWorld(81);
    startWorld(world);
    world.player.radius = 60;
    const rows = leaderboard(world, 5);
    expect(rows).toHaveLength(5);
    expect(rows[0].player).toBe(true);
    for (let index = 1; index < rows.length; index += 1) {
      expect(rows[index - 1].radius).toBeGreaterThanOrEqual(rows[index].radius);
    }
  });

  it("counts a rank from the cookies that are bigger than the player", () => {
    const world = bareWorld(82);
    startWorld(world);
    world.bots = [
      { id: 801, nameIndex: 0, x: 900, y: 900, radius: 30, heading: 0, targetX: 0, targetY: 0, retarget: 0 },
      { id: 802, nameIndex: 1, x: 100, y: 100, radius: 12, heading: 0, targetX: 0, targetY: 0, retarget: 0 },
    ];
    expect(playerRank(world)).toBe(2);
  });
});

describe("replaying", () => {
  it("produces an identical game from an identical seed", () => {
    const a = createWorld(91);
    const b = createWorld(91);
    startWorld(a);
    startWorld(b);
    for (let index = 0; index < 240; index += 1) {
      const input = { turnToward: { x: Math.cos(index / 40), y: Math.sin(index / 40) }, boost: index % 7 === 0 };
      stepWorld(a, FRAME, input);
      stepWorld(b, FRAME, input);
    }
    expect(a.status).toBe(b.status);
    expect(a.player.radius).toBe(b.player.radius);
    expect(a.player.x).toBe(b.player.x);
    expect(a.player.y).toBe(b.player.y);
    expect(a.time).toBe(b.time);
    expect(a.bots.map((bot) => bot.id)).toEqual(b.bots.map((bot) => bot.id));
    expect(a.crumbs.length).toBe(b.crumbs.length);
  });

  it("starts a fresh, playing game on restart", () => {
    const world = createWorld(92);
    startWorld(world);
    stepMany(world, 1);
    const next = restartWorld(world);
    expect(next).not.toBe(world);
    expect(next.status).toBe("playing");
    expect(next.time).toBe(0);
    expect(next.seed).toBe(93);
    expect(next.player.radius).toBe(PLAYER_START_RADIUS);
  });
});
