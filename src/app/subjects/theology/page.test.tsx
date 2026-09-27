import { render, screen } from "@testing-library/react";
import TheologyStudyMapPage from "@/app/subjects/theology/page";

describe("Theology Study Map", () => {
  it("links all five staged Catholic theology lessons from the Study Map", () => {
    render(<TheologyStudyMapPage />);

    expect(screen.getByRole("heading", { name: "Catholic Theology" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Study Map" })).toBeInTheDocument();
    expect(screen.getAllByTestId("theology-lesson-link")).toHaveLength(5);
    expect(screen.getByRole("link", { name: /how theology reasons/i })).toHaveAttribute("href", "/subjects/theology/how-theology-reasons");
    expect(screen.getByRole("link", { name: /history, philosophy, and questions/i })).toHaveAttribute("href", "/subjects/theology/history-philosophy-and-questions");
  });
});
