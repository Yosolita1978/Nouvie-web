import type { Metadata } from "next";
import { CategoryPage, categoryMetadata } from "../category-page";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return categoryMetadata("institucional", (await params).locale);
}

export default async function Page() {
  return <CategoryPage category="institucional" />;
}
