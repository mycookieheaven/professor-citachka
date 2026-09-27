import { PronunciationControls } from "@/components/PronunciationControls";

export function IllustratedExampleCard({ russian, latin, english, scene }: { russian: string; latin: string; english: string; scene: string }) {
  return <article className="illustrated-example-card">
    <div className="scene-illustration" role="img" aria-label={`Illustration: ${scene}`}><svg viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" rx="12" fill="#18243a"/><circle cx="122" cy="25" r="12" fill="#e2ca91" opacity=".8"/><path d="M0 78 Q35 51 72 75 T160 65 V100 H0Z" fill="#314466"/><circle cx="72" cy="56" r="18" fill="#a89bd7"/><path d="M58 49 48 39M86 49 96 39M67 59h10M72 63v8" stroke="#f4f0e8" strokeWidth="3" strokeLinecap="round" fill="none"/></svg></div>
    <div><strong>{russian}</strong><span>{latin}</span><p>{english}</p><PronunciationControls russian={russian.toLowerCase()} latin={latin} /></div>
  </article>;
}
