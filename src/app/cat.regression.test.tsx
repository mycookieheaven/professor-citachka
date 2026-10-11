import { readFileSync } from "node:fs";

/*
 * The cat is drawn by hand and animated by stylesheet, which means the things
 * that can silently break are arithmetic and asset geometry, not behaviour:
 * a redraw with a different number of frames, a strip whose frame ratio no
 * longer matches the CSS, a title whose new size no longer fits the screen.
 * None of that shows up in a jsdom render, so it is checked here.
 */

const catCss = readFileSync("src/app/cat.css", "utf8");
const bootCss = readFileSync("src/app/boot.css", "utf8");
const landing = readFileSync("src/app/landing.css", "utf8");
const walk = readFileSync("public/images/pixel-cat-walk.svg", "utf8");
const sitting = readFileSync("public/images/pixel-cat-cookie.svg", "utf8");

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

describe("the walking cat", () => {
  it("is one strip of four frames, stepped through without a script", () => {
    expect(walk).toMatch(/width="96" height="19"/);
    expect(walk).toMatch(/viewBox="0 0 96 19"/);
    expect(walk).toContain("Black pixel cat walking");
  });

  it("is stepped four times across the strip, so the frames line up with the art", () => {
    const sprite = rule(catCss, ".cat-sprite");
    expect(sprite).toMatch(/url\("\/images\/pixel-cat-walk\.svg"\)/);
    expect(sprite).toMatch(/animation:\s*cat-paws\s+\d+ms\s+steps\(4\)\s+infinite/);
    expect(sprite).toMatch(/background-size:\s*calc\(var\(--cat-w, 64px\) \* 4\)/);
    expect(catCss).toMatch(/background-position-x:\s*calc\(var\(--cat-w, 64px\) \* -4\)/);
  });

  it("walks in place, rather than vanishing or travelling, when motion is not wanted", () => {
    const reduced = catCss.slice(catCss.indexOf("@media (prefers-reduced-motion"));
    /* Slowed, not stopped: the cat is still visibly alive for a reader who asked
       for less movement, but it no longer crosses the screen. */
    expect(rule(reduced, ".cat-sprite")).toMatch(/animation-duration:\s*1600ms/);
    const patrolReduced = landing.slice(landing.indexOf("@media (prefers-reduced-motion", landing.indexOf("@keyframes home-cat-patrol-cross")));
    expect(rule(patrolReduced, ".home-cat-lane")).toMatch(/animation:\s*none/);
  });
});

describe("the cat on patrol", () => {
  it("crosses the page and turns around off-screen, so it never walks backwards", () => {
    const crossings = landing.slice(landing.indexOf("@keyframes home-cat-patrol-cross"));
    const block = crossings.slice(0, crossings.indexOf("\n}"));
    expect(block).toMatch(/0% \{ transform: translateX\(calc\(-1 \* var\(--cat-w\) - 10px\)\) scaleX\(1\); \}/);
    expect(block).toMatch(/49\.9% \{ transform: translateX\(100%\) scaleX\(1\); \}/);
    expect(block).toMatch(/50% \{ transform: translateX\(calc\(100% \+ var\(--cat-w\) \+ 10px\)\) scaleX\(-1\); \}/);
    expect(block).toMatch(/100% \{ transform: translateX\(0\) scaleX\(-1\); \}/);
  });

  it("hides what it does not fit instead of widening the page", () => {
    expect(rule(landing, ".home-cat-patrol")).toMatch(/overflow:\s*hidden/);
  });
});

describe("Calm mode", () => {
  /*
   * The site ships `data-motion="calm"` by default and motion.css switches every
   * animation off there, site-wide. That silenced the homepage the design notes
   * describe as keeping its slow glitter — and with it the cat, the veil and the
   * title. These restores are deliberate, carry !important on purpose, and must
   * not be tidied away.
   */
  const calm = (source: string) => source.split("\n").filter((line) => line.startsWith("html[data-motion=\"calm\"]"));

  it("keeps the homepage's slow layer moving, and answers the global rule", () => {
    const rules = calm(landing);
    expect(rules.join("\n")).toMatch(/\.home-cat-lane \{ animation: home-cat-patrol-cross 44s linear infinite !important/);
    expect(rules.join("\n")).toMatch(/\.pixel-cookie \{ animation: pixel-cookie-float 11s ease-in-out infinite !important/);
    expect(rules.join("\n")).toMatch(/\.home::before \{ animation: glitter-drift 34s linear infinite !important/);
    /* Every one-line restore has to answer the global !important rule. The
       letter-wave rule spans lines, and is checked below. */
    for (const line of rules.filter((line) => line.endsWith("}"))) expect(line).toContain("!important");
  });

  it("keeps the cat walking and the letters lighting up", () => {
    expect(calm(landing).join("\n")).toMatch(/\.home .cat-sprite \{ animation: cat-paws 520ms steps\(4\) infinite !important/);
    expect(calm(landing).join("\n")).toMatch(/\.home-title-text:hover \.home-title-letter \{/);
    expect(calm(bootCss).join("\n")).toMatch(/#cookie-boot \.cat-sprite \{ animation: cat-paws/);
  });

  it("lets the loading veil fade in Calm as well", () => {
    expect(calm(bootCss).join("\n")).toMatch(/#cookie-boot \{ animation: boot-veil-away/);
  });
});

describe("the loading veil", () => {
  const veil = rule(bootCss, "#cookie-boot");

  it("leaves on its own, with no script and no second chance", () => {
    expect(veil).toMatch(/animation:\s*boot-veil-away\s+\d+ms\s+ease\s+\d+ms\s+forwards/);
    expect(bootCss).toMatch(/@keyframes boot-veil-away \{\s*to \{ opacity: 0; visibility: hidden; \}/);
  });

  it("is dismissed sooner once the page is ready, and never blocks a click afterwards", () => {
    expect(rule(bootCss, "#cookie-boot.boot-done")).toMatch(/animation:\s*boot-veil-away\s+\d+ms\s+ease\s+forwards/);
    expect(bootCss).toMatch(/visibility: hidden/);
  });

  it("still leaves under reduced motion, so no setting can trap a visitor behind it", () => {
    const reduced = bootCss.slice(bootCss.indexOf("@media (prefers-reduced-motion"));
    expect(reduced).toMatch(/#cookie-boot,\s*\n\s*#cookie-boot\.boot-done \{/);
    expect(reduced).toMatch(/animation:\s*boot-veil-away/);
  });
});

describe("the hero title", () => {
  const title = rule(landing, ".home h1");

  it("is solid bright pink outlined in cream, never translucent", () => {
    expect(title).toMatch(/-webkit-text-fill-color:\s*#ff2e8d/);
    expect(title).not.toMatch(/text-fill-color:\s*transparent/);
    expect(title).toMatch(/-webkit-text-stroke:\s*[\d.]+em #fff8dc/);
    expect(title).toMatch(/paint-order:\s*stroke fill/);
  });

  it("runs to the edges of the screen rather than stopping at the content column", () => {
    expect(title).toMatch(/margin:\s*0 calc\(50% - 50vw\)/);
    expect(title).toMatch(/font-size:\s*clamp\(28px, 11\.6vw, 220px\)/);
    expect(title).toMatch(/white-space:\s*nowrap/);
  });

  it("is sized so one line still fits the screen it is stretched across", () => {
    /* "COOKIE HEAVEN" in this face measures 8.11 x the font size. */
    const widestLine = 8.11 * 11.6;
    expect(widestLine).toBeLessThan(100);
    /* The ceiling only takes hold once the viewport is wide enough to hold it. */
    const viewportWhereCeilingBites = (220 / 11.6) * 100;
    expect(8.11 * 220).toBeLessThan(viewportWhereCeilingBites);
  });
});

describe("the sitting cat", () => {
  it("stays square, because the homepage draws it into a square box", () => {
    expect(sitting).toMatch(/width="24" height="24"/);
    expect(sitting).toMatch(/viewBox="0 0 24 24"/);
  });

  it("keeps its green-gold eyes, and the cookie it is holding", () => {
    expect(sitting).toContain("#b8ff5e");
    expect(sitting).toContain("#ffd45f");
    expect(sitting).toContain("#8d4826");
    expect(sitting).toContain("Black pixel cat holding a chocolate chip cookie");
  });
});
