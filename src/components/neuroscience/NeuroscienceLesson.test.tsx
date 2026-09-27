import { fireEvent, render, screen } from "@testing-library/react";
import { NeuroscienceLesson } from "@/components/neuroscience/NeuroscienceLesson";
import { neuroscienceLessons } from "@/components/neuroscience/curriculum";

describe("Neuroscience curriculum lessons", () => {
  it("defines five staged lessons with a route for every Study Map unit", () => {
    expect(neuroscienceLessons).toHaveLength(5);
    expect(neuroscienceLessons.map((lesson) => lesson.slug)).toEqual([
      "neural-foundations",
      "sensation-and-movement",
      "learning-memory-attention",
      "emotion-and-motivation",
      "clinical-and-cognitive-neuroscience",
    ]);
    expect(neuroscienceLessons.every((lesson) => lesson.objectives.length >= 3)).toBe(true);
    expect(neuroscienceLessons.every((lesson) => lesson.retrieval.length >= 3)).toBe(true);
  });

  it("presents structured objectives, a worked example, and retrieval feedback", () => {
    render(<NeuroscienceLesson lesson={neuroscienceLessons[0]} />);

    expect(screen.getByRole("heading", { name: /neural foundations/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /by the end of this lesson/i })).toBeInTheDocument();
    expect(screen.getByText(/resting potential is not a neuron at rest/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /check my retrieval/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /check my retrieval/i }));
    expect(screen.getAllByText(/a depolarizing input makes the membrane potential less negative/i).length).toBeGreaterThan(0);
  });

  it("marks an individual neuroscience lesson complete in local progress", () => {
    localStorage.clear();
    render(<NeuroscienceLesson lesson={neuroscienceLessons[1]} />);

    fireEvent.click(screen.getByRole("button", { name: /check my retrieval/i }));
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Next lesson:|Complete sequence & review/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/Lesson completed/);
    expect(localStorage.getItem("professor-citachka:completed-lessons")).toContain("neuroscience/sensation-and-movement");
  });
});
