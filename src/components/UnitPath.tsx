"use client";
import Link from "next/link";
import { allTopics, getProgram, topicHref } from "@/lib/programs";
import { courseUnits } from "@/lib/assessments";
import { resumeTopic, subjectStats } from "@/lib/progress";
import { useStudy } from "@/lib/study-store";

/**
 * A Duolingo-style progress path: each core unit is a node on a winding path,
 * grouped into sections (levels). A unit is complete when every lesson in it is
 * read, which earns its crown. The first unit with an unfinished lesson is the
 * live one; everything after it stays locked until the path is reached.
 *
 * States are conveyed by text as well as colour, so the path is usable without
 * colour vision, by screen reader, and at large text sizes.
 */
export function UnitPath({ subject }: { subject: string }) {
  const { progress, ready } = useStudy();
  const program = getProgram(subject);
  if (!program) return null;

  const topics = allTopics(program);
  const ids = topics.map((topic) => topic.id);
  const stats = subjectStats(progress, subject, ids, new Date());
  const done = progress.subjects[subject]?.completed ?? [];
  const nextId = resumeTopic(progress, subject, ids);

  const sections = program.levels
    .map((level, levelIndex) => ({
      level,
      levelIndex,
      units: courseUnits(program).filter((unit) => unit.levelIndex === levelIndex),
    }))
    .filter((section) => !section.level.supplemental && section.units.length > 0);

  const allUnits = sections.flatMap((section) => section.units);
  const isComplete = (unitId: string) => {
    const unit = allUnits.find((candidate) => candidate.id === unitId);
    return !!unit && unit.topics.every((topic) => done.includes(topic.id));
  };
  const crowns = allUnits.filter((unit) => isComplete(unit.id)).length;
  const currentUnitIndex = allUnits.findIndex((unit) => !isComplete(unit.id));
  const currentUnit = currentUnitIndex >= 0 ? allUnits[currentUnitIndex] : null;

  const unitState = (unitId: string) => {
    if (isComplete(unitId)) return "complete" as const;
    const index = allUnits.findIndex((unit) => unit.id === unitId);
    return index === currentUnitIndex ? ("current" as const) : ("locked" as const);
  };

  const unreached = (unitId: string) => {
    const index = allUnits.findIndex((unit) => unit.id === unitId);
    const blocker = allUnits[currentUnitIndex];
    return { index, blocker };
  };

  return (
    <section className="unit-path" id="unit-path" aria-label={`${program.title} unit path`}>
      <p className="eyebrow">Your progress path</p>
      <h2>Units, one crown at a time</h2>
      <p className="unit-path-intro">
        Each unit is five lessons. Read every lesson in a unit and it earns a crown. The next unit
        opens when you reach it, so the path always shows exactly where you are.
      </p>

      <ul className="unit-path-stats">
        <li>
          <strong>{ready ? stats.streak : "—"}</strong>
          <span>day streak</span>
        </li>
        <li>
          <strong>{ready ? crowns : "—"}</strong>
          <span>of {allUnits.length} unit crowns</span>
        </li>
        <li>
          <strong>{ready ? stats.completed : "—"}</strong>
          <span>of {ids.length} lessons read</span>
        </li>
        <li data-state={stats.today ? "done" : "pending"}>
          <strong>{ready ? (stats.today ? "Met" : "Not yet") : "—"}</strong>
          <span>today&rsquo;s goal: one lesson</span>
        </li>
      </ul>

      {currentUnit && (
        <p className="unit-path-current">
          <span className="unit-path-current-flag">You are here</span>
          <strong>
            Unit {currentUnitIndex + 1}: {currentUnit.title}
          </strong>
          <Link href={nextId ? topicHref(subject, nextId) : "#unit-path"}>
            {nextId ? "Continue this unit" : "Review this unit"} <span aria-hidden="true">→</span>
          </Link>
        </p>
      )}

      {sections.map((section) => (
        <section className="unit-path-section" key={section.level.title}>
          <h3>
            <span className="unit-path-section-label">Section {section.levelIndex + 1}</span>
            {section.level.title}
          </h3>
          <ol className="unit-node-path">
            {section.units.map((unit) => {
              const state = unitState(unit.id);
              const read = unit.topics.filter((topic) => done.includes(topic.id)).length;
              const { blocker } = unreached(unit.id);
              const blockerNumber = allUnits.indexOf(blocker) + 1;
              const target = unit.topics.find((topic) => !done.includes(topic.id)) ?? unit.topics[0];
              const globalNumber = allUnits.indexOf(unit) + 1;
              return (
                <li className={`unit-node unit-node-${state}`} data-state={state} key={unit.id}>
                  <span className="unit-node-orb" aria-hidden="true">
                    {state === "complete" ? "★" : globalNumber}
                  </span>
                  <div className="unit-node-body">
                    <p className="unit-node-step">
                      {state === "complete"
                        ? "Crown earned"
                        : state === "current"
                          ? "Start here"
                          : "Locked"}
                    </p>
                    <strong>
                      Unit {globalNumber}: {unit.title}
                    </strong>
                    <p className="unit-node-progress">
                      {read} of {unit.topics.length} lessons read
                      {state === "complete" ? " · unit complete" : ""}
                    </p>
                    {state === "locked" ? (
                      <p className="unit-node-locked">
                        Finish Unit {blockerNumber}
                        {blocker ? `: ${blocker.title}` : ""} to open this unit.
                      </p>
                    ) : (
                      <Link href={topicHref(subject, target.id)}>
                        {state === "complete" ? "Review this unit" : "Start this unit"}{" "}
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </section>
  );
}
