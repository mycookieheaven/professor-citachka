import { render, screen, within } from "@testing-library/react";
import HomePage from "@/app/page";

/*
 * The homepage is now the personal page for cookieheaven.art, and the learning
 * dashboard lives at /study. These tests pin that arrangement, because a quiet
 * change to it would send readers to the wrong place without failing anything
 * else.
 */

describe("cookieheaven.art homepage", () => {
  it("introduces Melissa by name", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /hi, i’m melissa aguilera/i }),
    ).toBeInTheDocument();
  });

  it("says it is her website and ties the page to Professor Citachka", () => {
    const { container } = render(<HomePage />);
    // Scope to the hero: the same words also appear inside her about text, and a
    // page-wide text match would pass for the wrong reason.
    const lede = container.querySelector(".home-lede");
    expect(lede?.textContent).toMatch(/this is my website/i);
    expect(lede?.textContent).toMatch(/university i am building for myself/i);
  });

  it("links to the learning platform at /study, not to itself", () => {
    render(<HomePage />);
    const enter = screen.getByRole("link", { name: /enter professor citachka/i });
    expect(enter).toHaveAttribute("href", "/study");
  });

  it("keeps the about section and reaches into the study from it", () => {
    render(<HomePage />);
    const about = screen.getByRole("region", { name: /about me/i });
    // The name arrives from the data file, so check the section is populated.
    expect(within(about).getAllByRole("paragraph").length).toBeGreaterThan(2);
    expect(within(about).getByRole("link", { name: /step inside/i })).toHaveAttribute(
      "href",
      "/study",
    );
  });

  it("gives the galleries and the music list their own anchored sections", () => {
    const { container } = render(<HomePage />);
    for (const id of ["about", "art", "photography", "music"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it("explains an empty gallery instead of rendering a blank space", () => {
    render(<HomePage />);
    // Until images are added the sections must say so rather than look broken.
    expect(screen.getAllByText(/will appear in this section as they are added/i).length).toBe(2);
  });

  it("shows her portrait, labelled for a screen reader and not stretched", () => {
    const { container } = render(<HomePage />);
    const frame = container.querySelector(".home-portrait");
    expect(frame).not.toBeNull();

    const img = frame?.querySelector("img");
    expect(img).toHaveAttribute("src", "/images/portrait.jpg");
    // Alt text has to describe her, not the filename.
    expect(img?.getAttribute("alt")).toMatch(/melissa aguilera/i);

    // The photograph is 3:4. Declaring it square would squash it in every browser
    // that reserves space from the attributes before the image loads.
    const width = Number(img?.getAttribute("width"));
    const height = Number(img?.getAttribute("height"));
    expect(width / height).toBeCloseTo(3 / 4, 2);
  });

  it("never prints a placeholder music entry of its own invention", () => {
    const { container } = render(<HomePage />);
    const cards = container.querySelectorAll(".music-card");
    // Whatever appears must come from src/data/music.json, not from the code.
    expect(cards.length === 0 || cards[0].textContent?.length).toBeTruthy();
    expect(screen.getByText(/listening list is being put together/i)).toBeInTheDocument();
  });

  it("says she is based in Brooklyn, New York", () => {
    render(<HomePage />);
    expect(screen.getByText(/based in brooklyn, new york/i)).toBeVisible();
  });

  it("links to her Spotify profile in two places, opening safely", () => {
    render(<HomePage />);
    const links = screen.getAllByRole("link", { name: /spotify/i });
    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://open.spotify.com/user/mcdonaldscult");
      // External links must not hand the opener window to the destination.
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });
});
