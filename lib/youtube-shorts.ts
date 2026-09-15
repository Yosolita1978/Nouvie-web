// YouTube Shorts shown on the home page and on /testimonios.
//
// Titles and descriptions live in messages/{es,en}.json under "shorts.items",
// keyed by the same `key` used here. To add a Short: add an entry here and a
// title + description in both files.

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@NouVieColombia";

export type YouTubeShort = {
  videoId: string;
  key: string;
  // Publish date on YouTube. Required by the VideoObject schema.
  uploadDate: string;
  // Product page the "Ver producto" link goes to.
  // null = the video covers the whole line, so it links to /productos/capilar.
  productSlug: string | null;
};

// Ordered for the home page: it shows the first entries only.
export const youtubeShorts: YouTubeShort[] = [
  { videoId: "xyJh1OCCKM0", key: "whichLine", uploadDate: "2026-09-14T11:29:58-07:00", productSlug: null },
  { videoId: "LUL3VfhIJFI", key: "commercialShampoos", uploadDate: "2026-09-14T11:33:52-07:00", productSlug: null },
  { videoId: "zJiUGE9fmN4", key: "overnightRoutine", uploadDate: "2026-09-11T09:37:56-07:00", productSlug: "tratamiento-reparacion-intensa" },
  { videoId: "JlcX4AEvypU", key: "endsAndScalp", uploadDate: "2026-09-11T09:33:23-07:00", productSlug: "tratamiento-suave-y-liso" },
  { videoId: "QeUo4jeiJQc", key: "hairCareLine", uploadDate: "2026-09-11T10:19:22-07:00", productSlug: null },
  { videoId: "fr2rr8BjMXs", key: "shortHair", uploadDate: "2026-09-11T12:41:20-07:00", productSlug: "tratamiento-revitalizante" },
  { videoId: "mx84f7Z0QTI", key: "giftKit", uploadDate: "2026-09-11T09:49:37-07:00", productSlug: "tratamiento-reparacion-intensa" },
];
