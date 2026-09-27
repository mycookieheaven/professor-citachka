export type SubjectIconName =
  | "literature"
  | "russian"
  | "business-funding"
  | "neuroscience"
  | "veterinary-science"
  | "theology"
  | "finance"
  | "music"
  | "skincare"
  | "psychiatry"
  | "philosophy";

export function SubjectIcon({ subject }: { subject: SubjectIconName }) {
  if (subject === "russian") {
    return (
      <span className="subject-symbol subject-symbol-letter" data-subject-icon={subject} aria-hidden="true">
        Ж
      </span>
    );
  }

  return (
    <span className="subject-symbol" data-subject-icon={subject} aria-hidden="true">
      <svg viewBox="0 0 32 32" focusable="false">
        {subject === "business-funding" ? <><path d="M4 11h24v16H4zM11 11V6h10v5M4 17h24M13 17v4h6v-4" /></> : null}
        {subject === "psychiatry" ? <><path d="M10 26v-6C1 12 9 3 18 5c8 1 10 10 5 15v6M12 11c2-3 6-3 8 0m-9 5c3 3 7 3 10-1" /></> : null}
        {subject === "philosophy" ? <><path d="M16 5v23M6 11h20M9 11l-5 9h10l-5-9m14 0-5 9h10l-5-9M10 28h12" /></> : null}
        {subject === "literature" ? <><path d="M16 8C12 5 7 5 3 6v19c4-1 9-1 13 2 4-3 9-3 13-2V6c-4-1-9-1-13 2ZM16 8v19" /><path d="M7 11c2-.3 4 0 6 1M7 16c2-.3 4 0 6 1m6-5c2-1 4-1.3 6-1m-6 6c2-1 4-1.3 6-1" /></> : null}
        {subject === "neuroscience" ? (
          <>
            <path d="M12 5.5a5 5 0 0 0-4.6 7A4.5 4.5 0 0 0 9 21a5 5 0 0 0 7 4.5V7.7A4.6 4.6 0 0 0 12 5.5Z" />
            <path d="M20 5.5a5 5 0 0 1 4.6 7A4.5 4.5 0 0 1 23 21a5 5 0 0 1-7 4.5V7.7A4.6 4.6 0 0 1 20 5.5ZM10 11c2.8 0 4 1.5 6 3.5m6-3.5c-2.8 0-4 1.5-6 3.5M9.5 20c2.5-.2 4.4-1.3 6.5-3.2m6.5 3.2c-2.5-.2-4.4-1.3-6.5-3.2" />
          </>
        ) : null}
        {subject === "veterinary-science" ? (
          <>
            <ellipse cx="16" cy="20.5" rx="6.5" ry="5.2" />
            <ellipse cx="8.7" cy="13" rx="2.5" ry="3.5" transform="rotate(-28 8.7 13)" />
            <ellipse cx="14" cy="9.2" rx="2.5" ry="3.5" transform="rotate(-7 14 9.2)" />
            <ellipse cx="23.3" cy="13" rx="2.5" ry="3.5" transform="rotate(28 23.3 13)" />
            <ellipse cx="18" cy="9.2" rx="2.5" ry="3.5" transform="rotate(7 18 9.2)" />
          </>
        ) : null}
        {subject === "theology" ? (
          <path d="M16 4v24M9 11h14" />
        ) : null}
        {subject === "finance" ? (
          <>
            <path d="M5 25V7M5 25h22M9 20l5-6 4 3 8-9" />
            <path d="m21 8 5-.5-.5 5" />
          </>
        ) : null}
        {subject === "music" ? <path d="M11 7v16.5a4 4 0 1 1-2-3.45V10.3l12-3v13.2a4 4 0 1 1-2-3.45V4.7L11 7Z" /> : null}
        {subject === "skincare" ? <><path d="M16 4c5.5 5.3 8.5 9.4 8.5 14a8.5 8.5 0 0 1-17 0c0-4.6 3-8.7 8.5-14Z" /><path d="M12.5 20c1.7 1.7 4.9 1.7 6.6 0" /></> : null}
      </svg>
    </span>
  );
}
