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

/** The declarations of one rule, so assertions cannot accidentally span rules.
    Anchored to the start of a line: `.home-hero` is a rule, and a substring of
    `.home-hero-band > .home-hero`, which is a different rule entirely. */
function rule(source: string, selector: string): string {
  const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`(?:^|\\n)[ \\t]*${escape(selector)} \\{`).exec(source);
  expect(match, `no rule for ${selector}`).not.toBeNull();
  const start = match!.index + match![0].indexOf(selector);
  return source.slice(start, source.indexOf("}", start));
}

/** Every rule for one selector, since a selector can be restated per breakpoint. */
function rules(source: string, selector: string): string[] {
  const blocks: string[] = [];
  let from = 0;
  while (from < source.length) {
    const slice = source.slice(from);
    const match = new RegExp(`(?:^|\\n)[ \\t]*${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} \\{`).exec(slice);
    if (!match) break;
    const start = from + match.index + match[0].indexOf(selector);
    blocks.push(source.slice(start, source.indexOf("}", start)));
    from = start + 1;
  }
  expect(blocks.length).toBeGreaterThan(0);
  return blocks;
}

describe("the sections tab", () => {
  const blocks = rules(css, ".home-side-tabs");

  it("is three lines on the left edge, not a word on the right", () => {
    expect(blocks.some((block) => /position:\s*fixed/.test(block) && /left:\s*0/.test(block))).toBe(true);
    for (const block of blocks) expect(block).not.toMatch(/right:\s*0/);
    expect(rule(css, ".home-side-tabs-bars span")).toMatch(/background:\s*#c31563/);
  });

  it("sits where nothing else is, and the cat steps around it on a phone", () => {
    expect(blocks.some((block) => /top:\s*50%/.test(block))).toBe(true);
    const narrow = css.slice(css.indexOf("@media (max-width: 899px)"));
    expect(narrow).toMatch(/\.home-side-tabs\.home-side-tabs \{ top: 8px; transform: none; \}/);
    expect(narrow).toMatch(/\.home-cat-lane \{ left: 56px; \}/);
  });
});

describe("the title's letters", () => {
  it("light one at a time on hover, and only over the words themselves", () => {
    expect(css).toMatch(/\.home-title-text:hover \.home-title-letter \{/);
    expect(css).toMatch(/animation-delay:\s*calc\(var\(--letter-index, 0\) \* 82ms\)/);
    expect(rule(css, ".home-title-text")).toMatch(/display:\s*inline-block/);
  });

  it("stay still for a reader who asked for no motion", () => {
    const reduced = css.slice(css.indexOf("@media (prefers-reduced-motion: reduce)"));
    expect(reduced).toMatch(/\.home-title-text:hover \.home-title-letter \{ animation: none; \}/);
  });
});

describe("the hero card", () => {
  it("is a pale yellow panel with a pink edge, so the wallpaper stays outside it", () => {
    const panel = rule(css, ".home-hero");
    expect(panel).toMatch(/background:\s*#fffce4/);
    expect(panel).toMatch(/border:\s*3px solid rgba\(183, 24, 100/);
    expect(panel).toMatch(/border-radius:\s*28px/);
  });

  it("keeps the words pink and heavier, without a glow that softens them", () => {
    const copy = css.slice(css.indexOf(".home-hero-copy { min-width"), css.indexOf(".home-floating-quote {"));
    expect(copy).toMatch(/color:\s*#c31563/);
    expect(copy).toMatch(/font-weight:\s*800/);
    expect(copy).toMatch(/font-weight:\s*900/);
    expect(copy).not.toMatch(/rgba\(255, 46, 141/);
  });
});

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
