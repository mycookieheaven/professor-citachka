import { readFileSync } from "node:fs";

/*
 * The game window is placed by grid, and grid auto-placement only moves forwards.
 * An aside that wants column 1 after the hero has already taken column 2 lands in
 * the next row, which puts the game under the hero on exactly the wide screens it
 * was meant to sit beside. That failure is invisible in a jsdom render, so the
 * layout contract is asserted against the stylesheet itself.
 */

const css = readFileSync("src/app/landing.css", "utf8");

const wideBlock = (() => {
  const start = css.indexOf("@media (min-width: 1340px)");
  expect(start).toBeGreaterThan(-1);
  return css.slice(start, css.indexOf("\n}", start));
})();

describe("the game window's place on the page", () => {
  it("is a three-column band on a wide screen: margin, words, margin", () => {
    expect(wideBlock).toMatch(/\.home-hero-band\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*minmax\(0,\s*\d+px\)\s*minmax\(0,\s*1fr\)/);
  });

  it("puts the hero and the game in the same row, so the game sits beside the words", () => {
    expect(wideBlock).toMatch(/\.home-hero-band\s*>\s*\.home-hero\s*\{[^}]*grid-row:\s*1/);
    expect(wideBlock).toMatch(/\.home-game-slot\s*\{[^}]*grid-row:\s*1/);
    expect(wideBlock).toMatch(/\.home-game-slot\s*\{[^}]*grid-column:\s*1/);
  });

  it("is capped and centred where it stacks below the hero, never wider than a phone", () => {
    const base = css.slice(css.indexOf(".home-game-slot"), css.indexOf("@media (min-width: 1340px)"));
    expect(base).toMatch(/width:\s*min\(100%,\s*\d+px\)/);
    expect(base).toMatch(/justify-self:\s*center/);
  });
});
