import { fireEvent, render, screen } from "@testing-library/react";
import { FinanceLessonExperience, financeLessons } from "@/app/subjects/finance/[lesson]/FinanceLesson";

describe("Finance curriculum lessons", () => {
  it("ignores malformed legacy completion objects without crashing", () => {
    localStorage.setItem("professor-citachka:completed-lessons", "{}");
    render(<FinanceLessonExperience lesson={financeLessons[0]} />);
    expect(screen.getByRole("heading", { name: /cash flow: see the whole month/i })).toBeVisible();
    localStorage.clear();
  });
  it("defines a staged five-lesson curriculum with safe learning objectives", () => {
    expect(financeLessons).toHaveLength(5);
    expect(financeLessons.map((lesson) => lesson.slug)).toEqual([
      "cash-flow-basics",
      "debt-interest-and-risk",
      "investing-fundamentals",
      "markets-and-valuation",
      "independent-financial-judgment",
    ]);
    expect(financeLessons[0].objective).toMatch(/cash flow/i);
  });

  it("teaches the cash-flow lesson with examples, a scene, and educational-not-advice guidance", () => {
    render(<FinanceLessonExperience lesson={financeLessons[0]} />);

    expect(screen.getByRole("heading", { name: /cash flow: see the whole month/i })).toBeInTheDocument();
    expect(screen.getByText(/\$2,400 income − \$1,950 spending = \$450 surplus/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /illustrated scene: a desk with a calendar/i })).toBeInTheDocument();
    expect(screen.getByText(/education, not individualized financial advice/i)).toBeInTheDocument();
  });

  it("gives immediate feedback during retrieval practice and allows the lesson to be completed", () => {
    localStorage.clear();
    render(<FinanceLessonExperience lesson={financeLessons[0]} />);

    fireEvent.click(screen.getByRole("button", { name: /a surplus/i }));
    expect(screen.getAllByText(/correct.*income is greater than spending/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Next lesson:|Complete sequence & review/i }));
    expect(screen.getAllByRole("status").some(node=>node.textContent?.includes("Lesson completed"))).toBe(true);
    expect(localStorage.getItem("professor-citachka:completed-lessons")).toContain("finance/cash-flow-basics");
  });
});
