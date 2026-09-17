// The date the site was last built, i.e. the last deploy.
//
// next.config.ts sets BUILD_DATE once per build, and Next writes the value into
// the bundle, so it stays fixed until the next push. The footer's "Última
// actualización" and the sitemap's lastModified both read it, so the date we
// show visitors and the date we give search engines always match.

export function getBuildDate(): Date {
  const value = process.env.BUILD_DATE;
  if (!value) {
    throw new Error("BUILD_DATE is not set. It is defined in next.config.ts under `env`.");
  }
  return new Date(value);
}

/** "16 de septiembre de 2026" / "16 September 2026", on Colombia's calendar. */
export function formatBuildDate(locale: string): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Vercel builds in UTC. Without this, a push after 7 pm in Colombia would
    // show the next day's date.
    timeZone: "America/Bogota",
  }).format(getBuildDate());
}
