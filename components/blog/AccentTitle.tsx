// Renders a title with one part in the italic accent face, as in the blog
// design: "Shampoo <em>sin sal</em>: qué significa y cuándo elegirlo".
// The text stays a single heading, so Google reads the full title.

export function AccentTitle({
  title,
  accent,
  accentClassName = "text-[#0b8a90]",
}: {
  title: string;
  accent?: string;
  accentClassName?: string;
}) {
  const start = accent ? title.indexOf(accent) : -1;

  if (!accent || start === -1) {
    return <>{title}</>;
  }

  const before = title.slice(0, start);
  const after = title.slice(start + accent.length);

  return (
    <>
      {before}
      {/* Instrument Serif reads smaller than the grotesk, so it is nudged up. */}
      <em className={`blog-accent text-[1.12em] ${accentClassName}`}>{accent}</em>
      {after}
    </>
  );
}
