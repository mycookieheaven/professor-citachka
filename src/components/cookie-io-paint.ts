/*
 * cookie.io — drawing.
 *
 * A separate module from the simulation on purpose: the rules decide who lives,
 * and this file only decides what that looks like. It is a single `paint()`
 * call, so the component never accumulates drawing state between frames.
 *
 * Two things shape every choice here:
 *
 *   1. The stage is small (about 200–300px square) and sits on a bright yellow
 *      page. Contrast between a cookie and the dough is what makes it playable,
 *      so cookies carry a dark outline and a shadow, not just a fill.
 *   2. The reader cannot rely on colour alone. Danger and prey are marked twice:
 *      colour, and thickness (a heavy dashed ring for something that can kill
 *      you, a thin pale ring for something you can eat).
 */

import { EAT_RATIO, MAX_RADIUS, PLAYER_START_RADIUS, clampNumber, type Cookie, type World } from "@/lib/cookie-io";

const TAU = Math.PI * 2;

export type Camera = { x: number; y: number; zoom: number; width: number; height: number };

/*
 * Chip positions inside the cookie, as fractions of its radius. A golden-angle
 * spiral gives a natural scatter without a random number generator, so a cookie
 * looks the same on every frame.
 */
const CHIP_SLOTS = Array.from({ length: 24 }, (_, index) => {
  const angle = index * 2.399963229728653;
  const spread = 0.6 * Math.sqrt((index + 0.6) / 24);
  return {
    x: Math.cos(angle) * spread,
    y: Math.sin(angle) * spread,
    size: 0.24 + ((index * 37) % 7) / 80,
    angle: ((index * 53) % 15) / 10 - 0.4,
  };
});

/** Zoom out as the cookie grows, and adapt to how large the stage actually is. */
export function cameraFor(world: World, width: number, height: number): Camera {
  const fit = clampNumber(Math.min(width, height) / 320, 0.72, 1.6);
  const base = 1.15 * (PLAYER_START_RADIUS / world.player.radius) ** 0.45;
  return { x: world.player.x, y: world.player.y, zoom: clampNumber(base, 0.46, 1.15) * fit, width, height };
}

function drawCookieBody(context: CanvasRenderingContext2D, sx: number, sy: number, r: number, player: boolean): void {
  /* A cookie is a squat cylinder: the side first, then the top face. */
  context.beginPath();
  context.ellipse(sx, sy + r * 0.16, r, r * 0.94, 0, 0, TAU);
  context.fillStyle = player ? "#c98a35" : "#cbb88a";
  context.fill();

  const face = context.createRadialGradient(sx - r * 0.32, sy - r * 0.36, r * 0.12, sx, sy, r * 1.04);
  if (player) {
    face.addColorStop(0, "#fff6cf");
    face.addColorStop(0.55, "#f0c56a");
    face.addColorStop(1, "#d79b3d");
  } else {
    face.addColorStop(0, "#fffdf3");
    face.addColorStop(0.55, "#f4e4bd");
    face.addColorStop(1, "#dcc592");
  }
  context.beginPath();
  context.arc(sx, sy, r, 0, TAU);
  context.fillStyle = face;
  context.fill();
  context.lineWidth = 2.5;
  context.strokeStyle = player ? "#8a5a1e" : "#9c8855";
  context.stroke();
}

function drawChips(context: CanvasRenderingContext2D, cookie: Cookie, sx: number, sy: number, r: number): void {
  const count = clampNumber(Math.round(cookie.radius / 4), 4, CHIP_SLOTS.length);
  /* Chips sit on the top face and turn with the cookie, but not with the eyes. */
  const turn = cookie.id * 1.7;
  const cos = Math.cos(turn);
  const sin = Math.sin(turn);
  for (let index = 0; index < count; index += 1) {
    const slot = CHIP_SLOTS[index];
    const chipX = sx + (slot.x * cos - slot.y * sin) * r * 0.92;
    const chipY = sy + (slot.x * sin + slot.y * cos) * r * 0.92 + r * 0.02;
    const size = Math.max(2.4, slot.size * r * 1.15);
    context.save();
    context.translate(chipX, chipY);
    context.rotate(slot.angle * 2);
    context.beginPath();
    context.moveTo(-size / 2, -size / 2);
    context.lineTo(size / 2, -size / 2.5);
    context.lineTo(size / 2.2, size / 2.2);
    context.lineTo(-size / 2.3, size / 2);
    context.closePath();
    context.fillStyle = "#6b3421";
    context.fill();
    context.beginPath();
    context.moveTo(-size / 5, -size / 3);
    context.lineTo(size / 5, -size / 3.2);
    context.lineWidth = 1;
    context.strokeStyle = "rgba(255, 232, 176, 0.5)";
    context.stroke();
    context.restore();
  }
}

function drawFace(context: CanvasRenderingContext2D, cookie: Cookie, sx: number, sy: number, r: number, angry: boolean): void {
  const forwardX = Math.cos(cookie.heading);
  const forwardY = Math.sin(cookie.heading);
  const sideX = -forwardY;
  const sideY = forwardX;
  const eye = Math.max(1.6, r * 0.2);
  for (const side of [-1, 1]) {
    const ex = sx + forwardX * r * 0.4 + sideX * side * r * 0.31;
    const ey = sy + forwardY * r * 0.4 + sideY * side * r * 0.31;
    context.beginPath();
    context.arc(ex, ey, eye, 0, TAU);
    context.fillStyle = "#fff8ee";
    context.fill();
    context.beginPath();
    context.arc(ex + forwardX * eye * 0.34, ey + forwardY * eye * 0.34, eye * 0.52, 0, TAU);
    context.fillStyle = "#3b102d";
    context.fill();
    if (angry && r > 9) {
      context.beginPath();
      context.moveTo(ex + sideX * side * eye * 0.95, ey + sideY * side * eye * 0.95 - forwardX * eye * 0.1);
      context.lineTo(ex + forwardX * eye * 0.9, ey + forwardY * eye * 0.9);
      context.lineWidth = 2;
      context.strokeStyle = "#3b102d";
      context.stroke();
    }
  }
}

function drawBots(context: CanvasRenderingContext2D, world: World, camera: Camera, toScreen: (x: number, y: number) => { x: number; y: number }): void {
  const player = world.player;
  for (const bot of world.bots) {
    const point = toScreen(bot.x, bot.y);
    const r = bot.radius * camera.zoom;
    if (point.x + r < -40 || point.y + r < -40 || point.x - r > camera.width + 40 || point.y - r > camera.height + 40) continue;
    context.beginPath();
    context.ellipse(point.x, point.y + r * 0.18, r * 1.03, r * 0.95, 0, 0, TAU);
    context.fillStyle = "rgba(96, 52, 12, 0.20)";
    context.fill();
    const dangerous = bot.radius >= player.radius * EAT_RATIO;
    const edible = player.radius >= bot.radius * EAT_RATIO;
    drawCookieBody(context, point.x, point.y, r, false);
    drawChips(context, bot, point.x, point.y, r);
    drawFace(context, bot, point.x, point.y, r, dangerous);
    context.save();
    if (dangerous) {
      /* Heavy and dashed: something that can kill you must not look decorative. */
      context.setLineDash([5, 4]);
      context.lineWidth = 3;
      context.strokeStyle = "#b71864";
    } else if (edible) {
      context.setLineDash([]);
      context.lineWidth = 1.5;
      context.strokeStyle = "#1f6b2e";
    } else {
      context.setLineDash([]);
      context.lineWidth = 1;
      context.strokeStyle = "rgba(59, 16, 45, 0.35)";
    }
    context.beginPath();
    context.arc(point.x, point.y, r + 4, 0, TAU);
    context.stroke();
    context.restore();
  }
}

function drawPlayer(context: CanvasRenderingContext2D, world: World, camera: Camera, toScreen: (x: number, y: number) => { x: number; y: number }): void {
  const player = world.player;
  const point = toScreen(player.x, player.y);
  const r = player.radius * camera.zoom;

  if (world.boosting) {
    /* A short trail, so hurrying reads as hurrying. */
    for (let step = 3; step >= 1; step -= 1) {
      context.beginPath();
      context.arc(point.x - Math.cos(player.heading) * r * step * 0.45, point.y - Math.sin(player.heading) * r * step * 0.45, r * (1 - step * 0.12), 0, TAU);
      context.fillStyle = `rgba(255, 233, 150, ${0.2 / step})`;
      context.fill();
    }
  }

  context.beginPath();
  context.ellipse(point.x, point.y + r * 0.2, r * 1.04, r * 0.96, 0, 0, TAU);
  context.fillStyle = "rgba(96, 52, 12, 0.26)";
  context.fill();
  drawCookieBody(context, point.x, point.y, r, true);
  drawChips(context, player, point.x, point.y, r);
  drawFace(context, player, point.x, point.y, r, false);

  context.save();
  context.setLineDash([6, 5]);
  context.lineWidth = 2;
  context.strokeStyle = "#c31563";
  context.beginPath();
  context.arc(point.x, point.y, r + 7, 0, TAU);
  context.stroke();
  context.restore();
}

function drawCrumb(context: CanvasRenderingContext2D, world: World, camera: Camera, toScreen: (x: number, y: number) => { x: number; y: number }): void {
  for (const crumb of world.crumbs) {
    const point = toScreen(crumb.x, crumb.y);
    if (point.x < -12 || point.y < -12 || point.x > camera.width + 12 || point.y > camera.height + 12) continue;
    if (crumb.kind === "chip") {
      const size = Math.max(5, 9 * camera.zoom);
      context.save();
      context.translate(point.x, point.y);
      context.rotate(crumb.spin);
      context.beginPath();
      context.rect(-size / 2, -size / 2.6, size, size / 1.3);
      context.fillStyle = "#6b3421";
      context.fill();
      context.beginPath();
      context.rect(-size / 2, -size / 2.6, size, size / 5);
      context.fillStyle = "rgba(255, 232, 176, 0.35)";
      context.fill();
      context.restore();
    } else {
      const radius = Math.max(1.5, 3.1 * camera.zoom);
      context.beginPath();
      context.arc(point.x, point.y, radius, 0, TAU);
      context.fillStyle = "#d99a44";
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = "#a86c2a";
      context.stroke();
    }
  }
}

function drawParticles(context: CanvasRenderingContext2D, world: World, camera: Camera, toScreen: (x: number, y: number) => { x: number; y: number }): void {
  for (const particle of world.particles) {
    const point = toScreen(particle.x, particle.y);
    const fade = 1 - particle.age / particle.life;
    context.beginPath();
    context.arc(point.x, point.y, Math.max(0.8, particle.radius * camera.zoom), 0, TAU);
    context.fillStyle = particle.color;
    context.globalAlpha = clampNumber(fade, 0, 1);
    context.fill();
    context.globalAlpha = 1;
  }
}

function drawTerrain(context: CanvasRenderingContext2D, world: World, camera: Camera, toScreen: (x: number, y: number) => { x: number; y: number }): void {
  const wash = context.createLinearGradient(0, 0, 0, camera.height);
  wash.addColorStop(0, "#ffeaa4");
  wash.addColorStop(1, "#f7cf68");
  context.fillStyle = wash;
  context.fillRect(0, 0, camera.width, camera.height);

  /* Flour dust on a world-space grid, so it slides as the camera moves. */
  const tile = 150;
  const left = camera.x - camera.width / 2 / camera.zoom;
  const top = camera.y - camera.height / 2 / camera.zoom;
  const right = camera.x + camera.width / 2 / camera.zoom;
  const bottom = camera.y + camera.height / 2 / camera.zoom;
  context.fillStyle = "rgba(255, 255, 255, 0.32)";
  for (let wx = Math.floor(left / tile) * tile; wx < right + tile; wx += tile) {
    for (let wy = Math.floor(top / tile) * tile; wy < bottom + tile; wy += tile) {
      const point = toScreen(wx, wy);
      context.beginPath();
      context.arc(point.x, point.y, 1.6, 0, TAU);
      context.fill();
    }
  }

  const corner = toScreen(0, 0);
  const far = toScreen(world.arena, world.arena);
  context.fillStyle = "rgba(146, 72, 20, 0.22)";
  if (corner.y > 0) context.fillRect(0, 0, camera.width, corner.y);
  if (far.y < camera.height) context.fillRect(0, far.y, camera.width, camera.height - far.y);
  if (corner.x > 0) context.fillRect(0, Math.max(0, corner.y), corner.x, Math.max(0, far.y - Math.max(0, corner.y)));
  if (far.x < camera.width) context.fillRect(far.x, Math.max(0, corner.y), camera.width - far.x, Math.max(0, far.y - Math.max(0, corner.y)));

  context.save();
  context.setLineDash([18, 12]);
  context.lineWidth = 5;
  context.strokeStyle = "#c31563";
  context.strokeRect(corner.x, corner.y, far.x - corner.x, far.y - corner.y);
  context.restore();
}

function drawMinimap(context: CanvasRenderingContext2D, world: World, camera: Camera): void {
  const size = clampNumber(Math.min(camera.width, camera.height) * 0.26, 46, 76);
  const pad = 8;
  const originX = camera.width - size - pad;
  const originY = camera.height - size - pad;
  const scale = size / world.arena;
  context.save();
  context.globalAlpha = 0.72;
  context.fillStyle = "#fff6c9";
  context.fillRect(originX, originY, size, size);
  context.globalAlpha = 1;
  context.lineWidth = 2;
  context.strokeStyle = "rgba(183, 24, 100, 0.55)";
  context.strokeRect(originX, originY, size, size);
  for (const bot of world.bots) {
    const dangerous = bot.radius >= world.player.radius * EAT_RATIO;
    context.beginPath();
    context.arc(originX + bot.x * scale, originY + bot.y * scale, Math.max(1.6, bot.radius * scale * 0.5), 0, TAU);
    context.fillStyle = dangerous ? "#b71864" : "#7d6a45";
    context.fill();
  }
  context.beginPath();
  context.arc(originX + world.player.x * scale, originY + world.player.y * scale, Math.max(2.2, world.player.radius * scale * 0.5), 0, TAU);
  context.fillStyle = "#c31563";
  context.fill();
  context.lineWidth = 1.5;
  context.strokeStyle = "#fff6c9";
  context.stroke();
  context.restore();
}

/**
 * Draws one frame. The caller has already scaled the context for the device
 * pixel ratio, so every measurement here is in CSS pixels.
 */
export function paint(context: CanvasRenderingContext2D, world: World, camera: Camera, options: { minimap: boolean }): void {
  const toScreen = (x: number, y: number) => ({
    x: (x - camera.x) * camera.zoom + camera.width / 2,
    y: (y - camera.y) * camera.zoom + camera.height / 2,
  });

  context.clearRect(0, 0, camera.width, camera.height);
  drawTerrain(context, world, camera, toScreen);
  drawCrumb(context, world, camera, toScreen);
  drawParticles(context, world, camera, toScreen);
  drawBots(context, world, camera, toScreen);
  drawPlayer(context, world, camera, toScreen);
  if (options.minimap) drawMinimap(context, world, camera);

  /* A quiet reminder of the ceiling: a cookie cannot grow past MAX_RADIUS. */
  if (world.player.radius >= MAX_RADIUS) {
    context.save();
    context.setLineDash([3, 6]);
    context.lineWidth = 2;
    context.strokeStyle = "rgba(183, 24, 100, 0.5)";
    context.beginPath();
    context.arc(camera.width / 2, camera.height / 2, MAX_RADIUS * camera.zoom + 14, 0, TAU);
    context.stroke();
    context.restore();
  }
}
