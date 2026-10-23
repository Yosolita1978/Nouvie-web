// Serializes structured data for a <script type="application/ld+json"> tag.
//
// JSON.stringify leaves "<" as is, so a string containing "</script>" would
// close the tag early and whatever follows would run as HTML. Escaping "<" as
// < keeps the JSON identical for Google and makes that impossible. All
// the data is hardcoded today; this matters the day names or descriptions
// come from the shared database.
export function toJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
