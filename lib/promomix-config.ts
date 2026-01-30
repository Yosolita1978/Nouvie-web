  // ============================================                                                                                                            
  // PromoMix 2026 — Single source of truth                                                                                                                  
  // ============================================                                                                                                            
                                                                                                                                                             
  export type PromoMixCategory = "hogar" | "capilar";                                                                                                        
                                                                                                                                                             
  export interface PromoMixProduct {                                                                                                                         
    id: string;                                                                                                                                              
    name: string;                                                                                                                                            
    category: PromoMixCategory;                                                                                                                              
    size: string;                                                                                                                                            
    basePrice: number;                                                                                                                                       
    promoPrice: number;                                                                                                                                      
  }                                                                                                                                                          
                                                                                                                                                             
  // Business rule constants                                                                                                                                 
  export const PROMOMIX_MINIMUM = 300000;                                                                                                                    
  export const HOGAR_DISCOUNT = 0.20;                                                                                                                        
  export const CAPILAR_DISCOUNT = 0.40;                                                                                                                      
  export const PROMOMIX_YEAR = 2026;                                                                                                                         
  export const WHATSAPP_NUMBER = "573158326422";                                                                                                             
                                                                                                                                                             
  // Helper: calculate promo price from base price and category                                                                                              
  function getPromoPrice(basePrice: number, category: PromoMixCategory): number {                                                                            
    const discount = category === "hogar" ? HOGAR_DISCOUNT : CAPILAR_DISCOUNT;                                                                               
    return Math.round(basePrice * (1 - discount));                                                                                                           
  }                                                                                                                                                          
                                                                                                                                                             
  // ============================================                                                                                                            
  // HOGAR — 20% discount off PVP+IVA                                                                                                                         
  // ============================================                                                                                                            
  export const HOGAR_PRODUCTS: PromoMixProduct[] = [                                                                                                         
    {                                                                                                                                                        
      id: "pm-desengrasante-multiusos",                                                                                                                      
      name: "Desengrasante Multiusos",                                                                                                                       
      category: "hogar",                                                                                                                                     
      size: "250 ml",                                                                                                                                        
      basePrice: 55200,                                                                                                                                      
      promoPrice: getPromoPrice(55200, "hogar"), // 54,096                                                                                                   
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-detergente-neutro",                                                                                                                            
      name: "Detergente Neutro",                                                                                                                             
      category: "hogar",                                                                                                                                     
      size: "250 ml",                                                                                                                                        
      basePrice: 55200,                                                                                                                                      
      promoPrice: getPromoPrice(55200, "hogar"), // 54,096                                                                                                   
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-limpia-vidrios",                                                                                                                               
      name: "Limpia Vidrios",                                                                                                                                
      category: "hogar",                                                                                                                                     
      size: "250 ml",                                                                                                                                        
      basePrice: 51750,                                                                                                                                      
      promoPrice: getPromoPrice(51750, "hogar"), // 50,715                                                                                                   
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-limpia-pisos",                                                                                                                                 
      name: "Limpia Pisos",                                                                                                                                  
      category: "hogar",                                                                                                                                     
      size: "250 ml",                                                                                                                                        
      basePrice: 51750,                                                                                                                                      
      promoPrice: getPromoPrice(51750, "hogar"), // 50,715                                                                                                   
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-lustra-muebles",                                                                                                                               
      name: "Lustra Muebles",                                                                                                                                
      category: "hogar",                                                                                                                                     
      size: "250 ml",                                                                                                                                        
      basePrice: 51750,                                                                                                                                      
      promoPrice: getPromoPrice(51750, "hogar"), // 50,715                                                                                                   
    },                                                                                                                                                       
  ];                                                                                                                                                         
                                                                                                                                                             
  // ============================================                                                                                                            
  // CAPILAR — 40% discount off PVP+IVA                                                                                                                      
  // ============================================                                                                                                            
  export const CAPILAR_PRODUCTS: PromoMixProduct[] = [                                                                                                       
    {                                                                                                                                                        
      id: "pm-shampoo-honey-melon",                                                                                                                          
      name: "Shampoo Honey Melon",                                                                                                                           
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 51750,                                                                                                                                      
      promoPrice: getPromoPrice(51750, "capilar"), // 31,050                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-mascarilla-honey-melon",                                                                                                                       
      name: "Mascarilla Honey Melon",                                                                                                                        
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 69000,                                                                                                                                      
      promoPrice: getPromoPrice(69000, "capilar"), // 41,400                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-locion-honey-melon",                                                                                                                           
      name: "Loción Honey Melon",                                                                                                                            
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 60950,                                                                                                                                      
      promoPrice: getPromoPrice(60950, "capilar"), // 36,570                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-shampoo-kiwi-acai",                                                                                                                            
      name: "Shampoo Kiwi y Açaí",                                                                                                                           
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 51750,                                                                                                                                      
      promoPrice: getPromoPrice(51750, "capilar"), // 31,050                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-mascarilla-kiwi-acai",                                                                                                                         
      name: "Mascarilla Kiwi y Açaí",                                                                                                                        
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 69000,                                                                                                                                      
      promoPrice: getPromoPrice(69000, "capilar"), // 41,400                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-locion-kiwi-acai",                                                                                                                             
      name: "Loción Kiwi y Açaí",                                                                                                                            
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 60950,                                                                                                                                      
      promoPrice: getPromoPrice(60950, "capilar"), // 36,570                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-shampoo-mountain-breeze",                                                                                                                      
      name: "Shampoo Mountain Breeze",                                                                                                                       
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 51750,                                                                                                                                      
      promoPrice: getPromoPrice(51750, "capilar"), // 31,050                                                                                                 
    },                                                                                                                                                       
    {                                                                                                                                                        
      id: "pm-locion-mountain-breeze",                                                                                                                       
      name: "Loción Mountain Breeze",                                                                                                                        
      category: "capilar",                                                                                                                                   
      size: "250 ml",                                                                                                                                        
      basePrice: 60950,                                                                                                                                      
      promoPrice: getPromoPrice(60950, "capilar"), // 36,570                                                                                                 
    },                                                                                                                                                       
  ];                                                                                                                                                         
                                                                                                                                                             
  // All PromoMix products combined                                                                                                                          
  export const ALL_PROMOMIX_PRODUCTS: PromoMixProduct[] = [                                                                                                  
    ...HOGAR_PRODUCTS,                                                                                                                                       
    ...CAPILAR_PRODUCTS,                                                                                                                                     
  ];             