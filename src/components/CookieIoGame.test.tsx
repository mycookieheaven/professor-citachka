import { fireEvent, render, screen } from "@testing-library/react";
import { CookieIoGame } from "@/components/CookieIoGame";
import { loadDictionary } from "@/lib/i18n";

/*
 * The window has one job on the homepage: stay closed until it is asked for.
 * A game that starts on its own is a game playing at someone who came to read,
 * so these tests hold that line — nothing is mounted, nothing is animated, and
 * nothing runs until Play is pressed.
 */

const labels = loadDictionary("en").game;

/** jsdom has no 2D context; the component must survive that, not depend on it. */
function blindCanvas() {
  return vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("cookie.io, before it is played", () => {
  it("names itself, explains itself, and offers the way into the full-screen game", () => {
    const { container } = render(<CookieIoGame labels={labels} gameHref="/game" />);
    expect(screen.getByRole("heading", { name: "cookie.io" })).toBeInTheDocument();
    expect(screen.getByText(labels.tagline)).toBeInTheDocument();
    expect(screen.getByText(labels.opensFullScreen)).toBeInTheDocument();
    /* A link, not a button: the small window does not play any more. */
    expect(screen.getByRole("link", { name: labels.play })).toHaveAttribute("href", "/game");
    expect(container.querySelector("canvas")).toBeNull();
  });

  it("says what it is even with the game shut", () => {
    render(<CookieIoGame labels={labels} />);
    expect(screen.getByText(labels.hint)).toBeInTheDocument();
  });
});

describe("cookie.io, once it is played", () => {
  it("fills the display on the stage, with the score, the board and the way back", () => {
    blindCanvas();
    const { container } = render(<CookieIoGame labels={labels} variant="stage" backHref="/" />);
    expect(screen.getByRole("link", { name: labels.backHome })).toHaveAttribute("href", "/");
    expect(screen.getByRole("button", { name: labels.fullscreen })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: labels.play }));
    const canvas = container.querySelector("canvas");
    expect(canvas).not.toBeNull();
    expect(canvas).toHaveAttribute("tabindex", "0");
    expect(canvas).toHaveAttribute("data-double-click-boost", "true");
    expect(canvas).toHaveAttribute("aria-label", expect.stringContaining(labels.tagline));
    expect(screen.queryByRole("button", { name: labels.play })).toBeNull();
    expect(screen.getByRole("button", { name: labels.pause })).toBeInTheDocument();
    expect(screen.getByText(labels.board)).toBeInTheDocument();
    expect(screen.getByText(labels.danger)).toBeInTheDocument();
    expect(screen.getByText(labels.snack)).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(labels.playing);
  });
});

describe("cookie.io, from the keyboard", () => {
  it("pauses and resumes, and never lets a steering key scroll the page", () => {
    blindCanvas();
    const { container } = render(<CookieIoGame labels={labels} variant="stage" />);
    fireEvent.click(screen.getByRole("button", { name: labels.play }));
    const canvas = container.querySelector("canvas") as HTMLCanvasElement;

    /* A false return means the default was prevented: the key was ours. */
    expect(fireEvent.keyDown(canvas, { code: "ArrowUp" })).toBe(false);
    expect(fireEvent.keyDown(canvas, { code: "KeyW" })).toBe(false);
    expect(fireEvent.keyDown(canvas, { code: "Space" })).toBe(false);
    expect(fireEvent.keyDown(canvas, { code: "KeyZ" })).toBe(true);

    expect(fireEvent.keyDown(canvas, { code: "KeyP" })).toBe(false);
    expect(screen.getByText(labels.paused)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: labels.resume })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(labels.paused);

    fireEvent.keyDown(canvas, { code: "KeyP" });
    expect(screen.getByRole("button", { name: labels.pause })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(labels.playing);
  });
});
