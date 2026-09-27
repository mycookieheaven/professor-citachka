import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LiteraturePage from "./page";
import { books } from "./books";

beforeEach(() => localStorage.clear());

describe("Literature department", () => {
  it("saves guide reading independently of optional retrieval and writing, then restores it", async () => {
    const user = userEvent.setup();
    const view = render(<LiteraturePage />);
    const guide = within(screen.getByRole("article", { name: "Jane Eyre" }));
    const complete = guide.getByRole("button", { name: /Next reading guide:|Complete guides & review/ });
    expect(complete).toBeEnabled();
    await user.click(guide.getByRole("button", { name: /Every adult/ }));
    expect(guide.getByRole("status")).toHaveTextContent(/cannot directly establish/);
    expect(complete).toBeEnabled();
    await user.click(guide.getByRole("button", { name: /curtain and book suggest/ }));
    expect(guide.getByRole("status")).toHaveTextContent(/concrete objects/);
    expect(complete).toBeEnabled();
    await user.type(guide.getByRole("textbox"), "The curtain separates Jane from the family. Her book suggests a chosen refuge, although separation is not the same as belonging.");
    await user.click(guide.getByRole("button", { name: "Compare with a model" }));
    expect(guide.getByText(/Jane places herself behind a curtain/)).toBeVisible();
    await user.click(complete);
    expect(guide.getByRole("status")).toHaveTextContent("Guide complete · saved on this device");
    expect(localStorage.getItem("citachka-literature-jane-eyre-v1")).toContain('"complete":true');
    expect(JSON.parse(localStorage.getItem("citachka-study-v1")!).subjects.literature.interactions).toBe(1);
    view.unmount();
    render(<LiteraturePage />);
    expect(within(screen.getByRole("article", { name: "Jane Eyre" })).getByRole("status")).toHaveTextContent("Guide complete · saved on this device");
    expect(within(screen.getByRole("article", { name: "Frankenstein" })).getByRole("button", { name: /Next reading guide:|Complete guides & review/ })).toBeEnabled();
  });
  it.each(books)("provides specific feedback and a saveable interaction for $title", async (book) => {
    const user = userEvent.setup();
    render(<LiteraturePage />);
    const guide = within(screen.getByRole("article", { name: book.title }));
    for (const choice of book.choices) {
      await user.click(guide.getByRole("button", { name: choice.text }));
      expect(guide.getByRole("status")).toHaveTextContent(choice.feedback);
    }
    await user.click(guide.getByRole("button", { name: book.choices.find((choice) => choice.correct)!.text }));
    await user.type(guide.getByRole("textbox"), "A concrete detail supports this interpretation, but another perspective could complicate the claim.");
    await user.click(guide.getByRole("button", { name: "Compare with a model" }));
    expect(guide.getByText(book.model)).toBeVisible();
    await user.click(guide.getByRole("button", { name: /Next reading guide:|Complete guides & review/ }));
    expect(guide.getByRole("status")).toHaveTextContent("Guide complete");
  });

  it("ignores corrupt saved state and reports storage failure without claiming a save", async () => {
    localStorage.setItem("citachka-literature-jane-eyre-v1", "{broken");
    const user = userEvent.setup();
    render(<LiteraturePage />);
    const guide = within(screen.getByRole("article", { name: "Jane Eyre" }));
    expect(guide.getByRole("status")).not.toHaveTextContent("Guide complete");
    await user.click(guide.getByRole("button", { name: /curtain and book suggest/ }));
    await user.type(guide.getByRole("textbox"), "The curtain is both an imposed boundary and a way for Jane to create a private reading space.");
    await user.click(guide.getByRole("button", { name: "Compare with a model" }));
    const fail = vi.spyOn(localStorage, "setItem").mockImplementation(() => { throw new Error("quota"); });
    await user.click(guide.getByRole("button", { name: /Next reading guide:|Complete guides & review/ }));
    expect(guide.getByRole("status")).toHaveTextContent("could not be saved");
    expect(guide.getByRole('button',{name:'Continue without saving'})).toBeEnabled();
    expect(guide.getByRole("status")).not.toHaveTextContent("Guide complete");
    fail.mockRestore();
  });

  it("publishes four substantive guides with exact external audio editions and honest scope", () => {
    render(<LiteraturePage />);
    expect(screen.getByRole("heading", { name: "Literature" })).toBeVisible();
    for (const title of ["Jane Eyre", "Pride and Prejudice", "Frankenstein", "The Great Gatsby"]) {
      const guide = screen.getByRole("article", { name: title });
      for (const heading of [/Reading assignment/, /Core idea/, /Worked examples/, /Practice/, /Next reading/]) {
        expect(within(guide).getByRole("heading", { name: heading })).toBeVisible();
      }
    }
    expect(document.querySelectorAll('audio')).toHaveLength(4);
    expect(document.querySelector('a[href*="libby"], a[href*="libro.fm"]')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Audiobooks · listen here' })).toBeVisible();
    for (const book of books) {
      expect(screen.getByLabelText(`${book.title} chapter`)).toBeVisible();
    }
    expect(screen.getByRole("heading", { name: /Future expansion/ })).toBeVisible();
  });
});
