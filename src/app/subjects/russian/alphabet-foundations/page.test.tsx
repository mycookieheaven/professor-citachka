import { act, fireEvent, render, screen } from "@testing-library/react";
import AlphabetFoundationsPage from "@/app/subjects/russian/alphabet-foundations/page";

describe("Alphabet Foundations lesson", () => {
  it("teaches a small first set of Cyrillic letters with pronunciation support", () => {
    render(<AlphabetFoundationsPage />);

    expect(screen.getByRole("heading", { name: /alphabet foundations/i })).toBeInTheDocument();
    expect(screen.getByText("А (ah) — the sound in father")).toBeInTheDocument();
    expect(screen.getByText("МАМА (MAH-mah) — mama / mom")).toBeInTheDocument();
    expect(screen.getByText(/write each letter three times/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /illustration: a cat reading by a window/i })).toBeInTheDocument();
  });

  it("marks the lesson complete and persists progress locally", () => {
    localStorage.clear();
    render(<AlphabetFoundationsPage />);

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Next lesson:|Complete sequence & review/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/Lesson completed/);
    expect(localStorage.getItem("professor-citachka:completed-lessons")).toContain("russian/alphabet-foundations");
  });

  it("gives every Russian letter and word its own slow and natural pronunciation controls", () => {
    render(<AlphabetFoundationsPage />);

    expect(screen.getAllByRole("button", { name: /play slow (sound|pronunciation) for/i })).toHaveLength(10);
    expect(screen.getAllByRole("button", { name: /play natural (sound|pronunciation) for/i })).toHaveLength(10);
    expect(screen.getAllByRole("button", { name: /play slow sound for/i })).toHaveLength(6);
    expect(screen.getByRole("button", { name: /play slow pronunciation for мама/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /play natural pronunciation for кот/i })).toHaveLength(2);
  });

  it("offers slow and natural recordings and never plays both together", async () => {
    render(<AlphabetFoundationsPage />);

    const slowAudio = screen.getByTestId("slow-audio") as HTMLAudioElement;
    const naturalAudio = screen.getByTestId("natural-audio") as HTMLAudioElement;
    const slowPlay = vi.fn().mockResolvedValue(undefined);
    const naturalPlay = vi.fn().mockResolvedValue(undefined);
    const slowPause = vi.fn();
    Object.defineProperty(slowAudio, "play", { value: slowPlay });
    Object.defineProperty(naturalAudio, "play", { value: naturalPlay });
    Object.defineProperty(slowAudio, "pause", { value: slowPause });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^play slow pronunciation$/i }));
    });
    expect(slowPlay).toHaveBeenCalledOnce();

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /^play natural pronunciation$/i }));
    });
    expect(slowPause).toHaveBeenCalled();
    expect(naturalPlay).toHaveBeenCalledOnce();
  });
});
