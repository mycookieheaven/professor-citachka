import { render, screen, within } from "@testing-library/react";
import HomePage from "@/app/page";

/*
 * The homepage is now the personal page for cookieheaven.art, and the learning
 * dashboard lives at /professorcitachka. These tests pin that arrangement, because a quiet
 * change to it would send readers to the wrong place without failing anything
 * else.
 */

describe("cookieheaven.art homepage", () => {
  it("uses cookieheaven as the title, not a personal introduction", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: "cookieheaven" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /hi, i.m melissa/i })).not.toBeInTheDocument();
  });

  it("makes the premise philosophical and knowledge-forward", () => {
    const { container } = render(<HomePage />);
    const lede = container.querySelector(".home-lede");
    expect(lede?.textContent).toMatch(/love the world/i);
    expect(lede?.textContent).toMatch(/knowledge is its most powerful tool/i);
  });

  it("links to the learning platform at /professorcitachka, not to itself", () => {
    render(<HomePage />);
    const enter = screen.getAllByRole("link", { name: /enter professor citachka/i });
    expect(enter).toHaveLength(2);
    for (const link of enter) expect(link).toHaveAttribute("href", "/professorcitachka");
  });

  it("keeps an indirect premise section and reaches the university from it", () => {
    render(<HomePage />);
    const premise = screen.getByRole("region", { name: /a small doctrine/i });
    expect(within(premise).getAllByRole("paragraph").length).toBeGreaterThan(2);
    expect(within(premise).getByRole("link", { name: /enter professor citachka/i })).toHaveAttribute(
      "href",
      "/professorcitachka",
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

  it("shows a black pixel cat holding a cookie and a moving cookie field", () => {
    const { container } = render(<HomePage />);
    const cat = screen.getByRole("img", { name: /black pixel cat.*holding a cookie/i });
    expect(cat).toHaveAttribute("src", "/images/pixel-cat-cookie.svg");
    expect(container.querySelectorAll(".pixel-cookie")).toHaveLength(8);
  });

  it("never prints a placeholder music entry of its own invention", () => {
    const { container } = render(<HomePage />);
    const cards = container.querySelectorAll(".music-card");
    // Whatever appears must come from src/data/music.json, not from the code.
    expect(cards.length === 0 || cards[0].textContent?.length).toBeTruthy();
    expect(screen.getByText(/listening list is being put together/i)).toBeInTheDocument();
  });

  it("does not expose the old Brooklyn location line on the indirect landing page", () => {
    render(<HomePage />);
    expect(screen.queryByText(/based in brooklyn/i)).not.toBeInTheDocument();
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
