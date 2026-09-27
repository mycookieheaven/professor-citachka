import { fireEvent, render, screen } from "@testing-library/react";
import { VeterinaryLesson } from "@/app/subjects/veterinary-science/VeterinaryLesson";

describe("VeterinaryLesson", () => {
  it("delivers a staged clinical-foundations lesson with objectives, a scene, and retrieval practice", () => {
    render(<VeterinaryLesson lessonSlug="clinical-foundations" />);

    expect(screen.getByRole("heading", { name: /clinical foundations/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /today's objectives/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /canine intake scene/i })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: /retrieval practice/i })).toBeInTheDocument();
    expect(screen.getByText(/observation before intervention/i)).toBeInTheDocument();
  });

  it("gives immediate rationale after a retrieval response", () => {
    render(<VeterinaryLesson lessonSlug="pharmacology-diagnostics" />);

    fireEvent.click(screen.getByRole("button", { name: /confirm patient, medication, dose, route, and time/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/right—those checks interrupt common medication errors/i);
  });

  it("records passed unit checks locally and unlocks the next unit", () => {
    localStorage.clear();
    render(<VeterinaryLesson lessonSlug="clinical-foundations" />);

    fireEvent.click(screen.getByRole("button", { name: /one-way flow of attention/i }));
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Next lesson:|Complete sequence & review/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/lesson completed/i);
    expect(localStorage.getItem("professor-citachka:completed-lessons")).toContain("veterinary-science/clinical-foundations");
    expect(screen.getByRole("button", { name: /Next lesson: Comparative Anatomy/i })).toBeDisabled();
  });
});
