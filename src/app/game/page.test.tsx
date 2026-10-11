import { render, screen } from "@testing-library/react";
import GamePage from "@/app/game/page";

/*
 * The game's own page. It exists because playing inside the homepage window meant
 * playing in something about the size of a postage stamp; this page is the game
 * and nothing else, so it carries no site navigation.
 */

describe("the full-screen game page", () => {
  it("is the game, with a way back and a way to fill the display", () => {
    const { container } = render(<GamePage />);
    expect(screen.getByRole("heading", { name: "cookie.io" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "cookieheaven" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("button", { name: "Full screen" })).toBeInTheDocument();
    /* Nothing runs until Play is pressed, here either. */
    expect(container.querySelector("canvas")).toBeNull();
  });
});
