import { render, screen } from "@testing-library/react";
import { isSubjectSlug, SubjectRoom } from "@/components/SubjectRoom";

it("rejects prototype names as department slugs", () => {
  expect(isSubjectSlug("toString")).toBe(false);
  expect(isSubjectSlug("__proto__")).toBe(false);
});

describe("SubjectRoom", () => {
  it("renders an accessible neuroscience Study Map", () => {
    const { container } = render(<SubjectRoom subject="neuroscience" />);

    expect(screen.getByRole("heading", { name: "Neuroscience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Study Map" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Neural foundations" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Clinical and cognitive neuroscience" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /begin unit 1: neural foundations/i })[0]).toHaveAttribute("href", "/subjects/neuroscience/neural-foundations");
    expect(container.querySelector('[data-subject-icon="neuroscience"]')).toBeInTheDocument();
  });

  it("shows all six Russian pathway units before the learner begins", () => {
    render(<SubjectRoom subject="russian" />);

    expect(screen.getByRole("heading", { name: "Study Map" })).toBeInTheDocument();
    expect(screen.getAllByTestId("study-map-unit")).toHaveLength(6);
    expect(screen.getByText(/foundations: sound, script, and first speech/i)).toBeInTheDocument();
    expect(screen.getByText(/consolidation and real use/i)).toBeInTheDocument();
  });

  it("links each Finance Study Map unit to its staged curriculum lesson", () => {
    render(<SubjectRoom subject="finance" />);

    expect(screen.getAllByTestId("study-map-unit")).toHaveLength(5);
    expect(screen.getByRole("link", { name: /begin unit 1: cash flow basics/i })).toHaveAttribute("href", "/subjects/finance/cash-flow-basics");
    expect(screen.getByRole("link", { name: /continue to lesson 05: independent financial judgment/i })).toHaveAttribute("href", "/subjects/finance/independent-financial-judgment");
  });
});
