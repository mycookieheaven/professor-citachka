import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AskProfessor, type AskProfessorLabels } from "./AskProfessor";

const labels: AskProfessorLabels = {
  eyebrow: "ask anything",
  title: "Ask Professor Citachka",
  lede: "Any question, any subject.",
  label: "Your question",
  placeholder: "Why do neurons have dendrites?",
  button: "Ask",
  thinking: "Thinking.",
  privacy: "Questions are sent to an AI model so it can answer.",
  failed: "That answer did not come through. Try again.",
  limit: "That is a lot of questions at once.",
};

function ask(question: string) {
  render(<AskProfessor labels={labels} />);
  fireEvent.change(screen.getByLabelText("Your question"), { target: { value: question } });
  fireEvent.click(screen.getByRole("button", { name: "Ask" }));
}

describe("the homepage ask panel", () => {
  it("posts the question and prints the answer it gets back", async () => {
    const network = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(Response.json({ answer: "A dendrite is where a neuron listens." }));

    ask("Why do neurons have dendrites?");

    expect(await screen.findByText("A dendrite is where a neuron listens.")).toBeInTheDocument();
    expect(network).toHaveBeenCalledWith("/api/professor-chat", expect.objectContaining({ method: "POST" }));
    const [, init] = network.mock.calls[0] as [string, RequestInit];
    expect(JSON.parse(String(init.body))).toEqual({ question: "Why do neurons have dendrites?" });
    /* The question is echoed, so a reader can see what was asked. */
    expect(screen.getByText("Why do neurons have dendrites?")).toBeInTheDocument();
  });

  it("keeps the button disabled until the question is real", () => {
    render(<AskProfessor labels={labels} />);
    const button = screen.getByRole("button", { name: "Ask" });
    expect(button).toBeDisabled();
    fireEvent.change(screen.getByLabelText("Your question"), { target: { value: "a" } });
    expect(button).toBeDisabled();
    fireEvent.change(screen.getByLabelText("Your question"), { target: { value: "ab" } });
    expect(button).toBeEnabled();
  });

  it("shows the server's own words when the Professor is not connected", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      Response.json(
        { error: { code: "CHAT_NOT_CONFIGURED", message: "The Professor is not connected yet." } },
        { status: 503 },
      ),
    );

    ask("Why do neurons have dendrites?");

    expect(await screen.findByText("The Professor is not connected yet.")).toBeInTheDocument();
  });

  it("falls back to its own message when the network itself fails", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("offline"));

    ask("Why do neurons have dendrites?");

    expect(await screen.findByText(labels.failed)).toBeInTheDocument();
  });

  it("marks the answer region live, so a screen reader hears the reply arrive", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(Response.json({ answer: "Hearing it arrives." }));
    const { container } = render(<AskProfessor labels={labels} />);
    const region = container.querySelector('[aria-live="polite"]');
    expect(region).not.toBeNull();
    expect(region).toHaveAttribute("aria-busy", "false");
    fireEvent.change(screen.getByLabelText("Your question"), { target: { value: "hello there" } });
    fireEvent.click(screen.getByRole("button", { name: "Ask" }));
    await waitFor(() => expect(container.querySelector('[aria-live="polite"]')).toHaveAttribute("aria-busy", "false"));
  });

  it("sends on Cmd or Ctrl plus Enter without reloading the page", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(Response.json({ answer: "Shortcut works." }));
    render(<AskProfessor labels={labels} />);
    const input = screen.getByLabelText("Your question");
    fireEvent.change(input, { target: { value: "hello there" } });
    fireEvent.keyDown(input, { key: "Enter", metaKey: true });
    expect(await screen.findByText("Shortcut works.")).toBeInTheDocument();
  });
});
