# Decisions

## 2026-09-15 — YouTube Shorts load on tap, not on page load

Each Short shows its YouTube thumbnail and only creates the player iframe when tapped. Seven iframes at once would slow the home and testimonials pages on phones. Search engines learn about the videos through one `VideoObject` JSON-LD per Short instead.

## 2026-09-15 — Business address lives in one file

`lib/business-info.ts` is the single source for the address, coordinates, Maps link and Place ID. The layout schema, footer and contact page all read from it, so the address stays identical everywhere, matching the Google Business Profile.

## 2026-09-15 — Live Google reviews via Places API (New)

Chosen over copying reviews by hand, so the rating and count stay current.

- Server-side only; the key (`GOOGLE_PLACES_API_KEY`) never reaches the browser.
- Response reused for 6 hours (`next.revalidate`). Review requests bill as the Enterprise + Atmosphere SKU, 1,000 free calls per month; the daily quota is capped at 30 in Google Cloud so it can never exceed that.
- Missing key → the page throws (setup mistake, must be visible). Google unreachable → error logged, section hidden, rest of the page still renders.
- The reviewer's original text is shown, never a machine translation, also on `/en`.
- No `Review`/`AggregateRating` schema: Google does not allow self-serving review markup for a business on its own site.
- If reviews are ever hand-picked later, they must be real Google reviews, copied verbatim, with name, date and a link to the original.
