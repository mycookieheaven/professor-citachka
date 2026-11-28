import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';

/*
 * The ask panel lives inside .home, so the homepage's pale ink rules (.home h2,
 * .home-section p) also match its children. A previous fix set dark colours in
 * the CSS module and stopped there, and the panel still rendered near white,
 * because a rule with higher specificity in landing.css won. These tests check
 * the values that actually reach the browser: the module colours, the #ask
 * override that beats the homepage rules, and the contrast between them.
 */

const moduleCss = readFileSync('src/components/AskProfessor.module.css', 'utf8');
const landingCss = readFileSync('src/app/landing.css', 'utf8');

const CARD = '#fffce4';

function luminance(hex: string): number {
  const clean = hex.replace('#', '');
  const channels = [0, 2, 4].map((i) => parseInt(clean.slice(i, i + 2), 16) / 255);
  const linear = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(foreground: string, background: string): number {
  const a = luminance(foreground);
  const b = luminance(background);
  const lighter = Math.max(a, b);
  const darker = Math.min(a, b);
  return (lighter + 0.05) / (darker + 0.05);
}

it('gives the ask panel dark ink and no glow of its own', () => {
  expect(moduleCss).toMatch(/\.title\s*\{[^}]*color:\s*#4a1030;/);
  expect(moduleCss).toMatch(/\.title\s*\{[^}]*text-shadow:\s*none;/);
  expect(moduleCss).toMatch(/\.lede\s*\{[^}]*color:\s*#3d0a22;/);
});

it('overrides the pale homepage ink inside #ask, which is the rule that actually rendered', () => {
  expect(landingCss).toMatch(/\.home #ask h2\s*\{[^}]*color:\s*#4a1030;/);
  expect(landingCss).toMatch(/\.home #ask h2\s*\{[^}]*text-shadow:\s*none;/);
  expect(landingCss).toMatch(/\.home #ask p\s*\{[^}]*color:\s*#3d0a22;/);
  expect(landingCss).toMatch(/\.home #ask p\s*\{[^}]*text-shadow:\s*none;/);
});

it('keeps the homepage wall ink pale on top of the override, so the order is deliberate', () => {
  // The pale rules are still there for text set directly on the wallpaper.
  expect(landingCss).toMatch(/\.home h2\s*\{[^}]*color:\s*#fff6fc;/);
  expect(landingCss).toMatch(/\.home-section p\s*\{[^}]*color:\s*#ffeaf6;/);
});

it('reaches AAA contrast for the panel title, body and privacy note', () => {
  expect(contrast('#4a1030', CARD)).toBeGreaterThan(7);
  expect(contrast('#3d0a22', CARD)).toBeGreaterThan(7);
  expect(contrast('#5c2a44', CARD)).toBeGreaterThan(7);
  expect(contrast('#6b4257', CARD)).toBeGreaterThan(4.5);
});

it('keeps the send button readable instead of neon on neon', () => {
  expect(moduleCss).toMatch(/\.send\s*\{[^}]*background:\s*#6d0f3d;/);
  expect(contrast('#fff7d6', '#6d0f3d')).toBeGreaterThan(7);
});
