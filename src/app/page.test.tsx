import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("cookieheaven home screen", () => {
  it("is quote-led rather than a biography", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: "COOKIE HEAVEN" })).toBeInTheDocument();
    expect(screen.getByText(/knowledge is the most valuable thing/i)).toBeInTheDocument();
    expect(screen.getByText(/trying to save cookie businesses/i)).toBeInTheDocument();
    expect(screen.getByText(/usually loved by the world/i)).toHaveClass("home-floating-quote");
    expect(screen.queryByText(/portrait of melissa/i)).not.toBeInTheDocument();
  });
  it("keeps the top screen personal and gives Instagram its own safe link", () => {
    render(<HomePage />);
    const instagram = screen.getByRole("link", { name: /@cookieswpeanutbutter/i });
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/cookieswpeanutbutter/");
    expect(screen.queryByText(/professor citachka/i)).not.toBeInTheDocument();
  });
  it("shows the black pixel cat and cookie field", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector('img[src="/images/pixel-cat-cookie.svg"]')).toBeInTheDocument();
    expect(container.querySelectorAll(".pixel-cookie")).toHaveLength(64);
  });
  it("gives every letter of the title its own span, and still names the words", () => {
    const { container } = render(<HomePage />);
    const letters = container.querySelectorAll(".home-main-title .home-title-letter");
    expect(letters).toHaveLength("COOKIE HEAVEN".replace(/ /g, "").length);
    expect(screen.getByRole("heading", { name: "COOKIE HEAVEN" })).toBeInTheDocument();
  });
  it("sends the cat along the top of the page, and keeps it out of the way of readers", () => {
    const { container } = render(<HomePage />);
    const patrol = container.querySelector(".home-cat-patrol");
    expect(patrol).not.toBeNull();
    expect(patrol).toHaveAttribute("aria-hidden", "true");
    expect(patrol?.querySelector(".home-cat-lane .cat-sprite")).not.toBeNull();
  });
  it("carries the small cookie game, closed, in the margin beside the hero", () => {
    const { container } = render(<HomePage />);
    const slot = container.querySelector(".home-hero-band .home-game-slot");
    expect(slot).not.toBeNull();
    expect(screen.getByRole("heading", { name: "cookie.io" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
    /* Nothing is playing until it is asked to. */
    expect(slot?.querySelector("canvas")).toBeNull();
  });
});
