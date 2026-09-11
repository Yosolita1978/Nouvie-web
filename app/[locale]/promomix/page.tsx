import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { PromoMixBuilder } from "./promomix-builder";                                                                                                      
                                                                                                                                                           
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return buildPageMetadata({
    key: "promomix",
    href: "/promomix",
    locale: (await params).locale,
  });
}
                                                                                                                                                           
export default function PromoMixPage() {                                                                                                                   
  return <PromoMixBuilder />;                                                                                                                              
}                         