import type { ReactNode } from "react";
import { Schibsted_Grotesk, Instrument_Serif } from "next/font/google";
import "./blog.css";

// Blog-only typefaces, loaded here so the rest of the site is untouched.
// Schibsted Grotesk: tight, heavy headlines. Instrument Serif italic: the
// accent words ("detrás", "sin sal"). Body text keeps the site's Geist.
const display = Schibsted_Grotesk({
  variable: "--font-blog-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const accent = Instrument_Serif({
  variable: "--font-blog-accent",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className={`${display.variable} ${accent.variable} blog-body`}>{children}</div>;
}
