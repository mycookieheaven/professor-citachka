import { render, screen } from "@testing-library/react";
import { russianLessons, russianUnits } from "@/app/subjects/russian/curriculum";
import { RussianCurriculumLesson } from "@/app/subjects/russian/RussianCurriculumLesson";

describe("Russian curriculum", () => {
  it("defines all 24 weekly lessons across six four-week units", () => {
    expect(russianUnits).toHaveLength(6);
    expect(russianLessons).toHaveLength(24);
    expect(new Set(russianLessons.map((lesson) => lesson.slug)).size).toBe(24);
    for (const unit of russianUnits) {
      expect(russianLessons.filter((lesson) => lesson.unit === unit.number)).toHaveLength(4);
    }
  });

  it("keeps a Cyrillic phrase, Latin pronunciation, English meaning, illustrated scene, and two pace controls in each lesson", () => {
    for (const lesson of russianLessons) {
      expect(lesson.examples).not.toHaveLength(0);
      for (const example of lesson.examples) {
        expect(example.russian).toMatch(/[А-Яа-яЁё]/);
        expect(example.latin).not.toHaveLength(0);
        expect(example.english).not.toHaveLength(0);
        expect(example.scene).not.toHaveLength(0);
      }
    }

    render(<RussianCurriculumLesson lesson={russianLessons[1]} />);
    const example = russianLessons[1].examples[0];
    expect(screen.getByText(example.russian)).toBeInTheDocument();
    expect(screen.getByText(example.latin)).toBeInTheDocument();
    expect(screen.getByText(example.english)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: new RegExp(`illustration: ${example.scene}`, "i") })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: new RegExp(`play slow pronunciation for ${example.russian.toLowerCase()}`, "i") })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: new RegExp(`play natural pronunciation for ${example.russian.toLowerCase()}`, "i") })).toBeInTheDocument();
  });

  it("includes a retrieval test and a completion action in every generated lesson", () => {
    render(<RussianCurriculumLesson lesson={russianLessons[23]} />);
    expect(screen.getByRole("heading", { name: /lesson check/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /show answer/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Next lesson:|Complete sequence & review/i })).toBeInTheDocument();
  });
});
