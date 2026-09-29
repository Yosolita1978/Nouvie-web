import type { CSSProperties } from "react";

// Ingredients crossed out, like on a product label: "s̶a̶l̶  s̶u̶l̶f̶a̶t̶o̶s̶".
// The crossing line is decoration (.blog-strike in globals.css), so screen
// readers get a real "Sin" in front of each word instead.

export function StrikeList({
  items,
  highlighted,
  className = "",
  highlightClassName = "text-nouvie-turquoise",
}: {
  items: string[];
  /** The item that matches the article's topic, shown in the accent color. */
  highlighted?: string;
  className?: string;
  highlightClassName?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-y-2 ${className.includes("gap-x-") ? "" : "gap-x-5"} ${className}`}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="sr-only">Sin </span>
          <span
            className={`blog-strike ${item === highlighted ? highlightClassName : ""}`}
            style={{ "--strike-delay": `${250 + index * 140}ms` } as CSSProperties}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
