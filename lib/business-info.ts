// Nouvie's physical address, shared by the JSON-LD in the root layout, the
// footer and the contact page. Google trusts an address more when the schema,
// the visible page and the Google Business Profile all say the same thing, so
// change it here only, and keep it matching the Maps listing.

export const BUSINESS_ADDRESS = {
  streetAddress: "Calle 155 # 9-45",
  addressLocality: "Bogotá",
  addressRegion: "Cundinamarca",
  addressCountry: "CO",
};

// One line for display: "Calle 155 # 9-45, Bogotá, Cundinamarca".
export const BUSINESS_ADDRESS_LINE = `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion}`;

export const BUSINESS_GEO = {
  latitude: 4.7328527,
  longitude: -74.0326066,
};

// Short link to the Nouvie Colombia listing on Google Maps.
export const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=7181650791352928388";
