import type { Metadata } from "next";                                                                                                                      
import { PromoMixBuilder } from "@/app/promomix/promomix-builder";                                                                                                      
                                                                                                                                                           
export const metadata: Metadata = {                                                                                                                        
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
  alternates: {                                                                                                                                            
    canonical: "https://www.nouvie.co/promomix",                                                                                                           
  },                                                                                                                                                       
  openGraph: {                                                                                                                                             
    title: "PromoMix 2026 | Nouvie",                                                                                                                       
    description:                                                                                                                                           
      "Arma tu PromoMix por $300.000. 20% de descuento en Línea Hogar, 40% en Línea Capilar. Envío no incluido.",                                           
    url: "https://www.nouvie.co/promomix",                                                                                                                 
  },                                                                                                                                                       
};                                                                                                                                                         
                                                                                                                                                           
export default function PromoMixPage() {                                                                                                                   
  return <PromoMixBuilder />;                                                                                                                              
}                         