import type { Metadata } from "next";
import { alternatesFor, urlFor, toLocale } from "@/lib/seo";                                                                                                                      
import { PromoMixBuilder } from "./promomix-builder";                                                                                                      
                                                                                                                                                           
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);

  return {                                                                                                                        
  title: "PromoMix 2026",                                                                                                                                  
  description:                                                                                                                                             
    "Arma tu PromoMix de productos Nouvie por $300.000. 20% de descuento en Línea Hogar, 40% en Línea Capilar. Envío no incluido.",                         
  keywords: [                                                                                                                                              
    "promomix",                                                                                                                                            
    "descuento productos limpieza",                                                                                                                        
    "promoción capilar",                                                                                                                                   
    "nouvie promoción",                                                                                                                                    
    "productos nouvie descuento",                                                                                                                          
    "promomix 2026",                                                                                                                                       
  ],                                                                                                                                                       
  alternates: alternatesFor(locale, "/promomix"),                                                                                                                                                       
  openGraph: {                                                                                                                                             
    title: "PromoMix 2026 | Nouvie",                                                                                                                       
    description:                                                                                                                                           
      "Arma tu PromoMix por $300.000. 20% de descuento en Línea Hogar, 40% en Línea Capilar. Envío no incluido.",                                           
    url: urlFor(locale, "/promomix"),                                                                                                                 
  },                                                                                                                                                       
  };
}                                                                                                                                                         
                                                                                                                                                           
export default function PromoMixPage() {                                                                                                                   
  return <PromoMixBuilder />;                                                                                                                              
}                         