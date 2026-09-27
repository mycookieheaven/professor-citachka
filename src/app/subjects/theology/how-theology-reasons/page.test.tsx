import { fireEvent, render, screen } from "@testing-library/react";
import HowTheologyReasonsPage from "@/app/subjects/theology/how-theology-reasons/page";

describe("How Theology Reasons lesson", () => {
  it("distinguishes doctrine, history, and philosophical reasoning in its teaching", () => {
    render(<HowTheologyReasonsPage />);

    expect(screen.getByRole("heading", { name: "How Theology Reasons" })).toBeInTheDocument();
    expect(screen.getByText("Catholic doctrine")).toBeInTheDocument();
    expect(screen.getByText("Historical context")).toBeInTheDocument();
    expect(screen.getByText("Philosophical reasoning")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /illustration: a reader comparing scripture and a church document/i })).toBeInTheDocument();
  });

  it("gives feedback for retrieval practice and persists completion", () => {
    localStorage.clear();
    render(<HowTheologyReasonsPage />);

    fireEvent.click(screen.getByRole("button", { name: /scripture and tradition/i }));
    expect(screen.getAllByText(/That is the Catholic account/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Next lesson:|Complete sequence & review/i }));
    expect(localStorage.getItem("professor-citachka:completed-lessons")).toContain("theology/how-theology-reasons");
  });
});
