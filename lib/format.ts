  /**                                                                                                                                                        
   * Format a number as Colombian Pesos (COP).                                                                                                               
   * Example: formatCOP(300000) → "$ 300.000"                                                                                                                
   */                                                                                                                                                        
  export function formatCOP(value: number): string {                                                                                                         
    return new Intl.NumberFormat("es-CO", {                                                                                                                  
      style: "currency",                                                                                                                                     
      currency: "COP",                                                                                                                                       
      minimumFractionDigits: 0,                                                                                                                              
      maximumFractionDigits: 0,                                                                                                                              
    }).format(value);                                                                                                                                        
  } 