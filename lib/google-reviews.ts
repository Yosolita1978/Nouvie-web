// Fetches the Nouvie Colombia rating and reviews from the Google Places API (New).
//
// Runs on the server only: the key in GOOGLE_PLACES_API_KEY never reaches the
// browser. Google returns at most 5 reviews and chooses which ones.
//
// Cost: requests that include reviews have 1,000 free calls per month. The
// response is reused for 6 hours, so the site makes about 4 calls a day.

import { GOOGLE_PLACE_ID } from "@/lib/business-info";

const REFRESH_SECONDS = 6 * 60 * 60;

export type GoogleReview = {
  authorName: string;
  authorUrl: string | null;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  reviewUrl: string | null;
};

export type GoogleReviewsData = {
  rating: number;
  totalReviews: number;
  reviewsUrl: string;
  writeReviewUrl: string;
  reviews: GoogleReview[];
};

// Shape of the fields we request from Google (see X-Goog-FieldMask below).
type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: { reviewsUri?: string; writeAReviewUri?: string };
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    googleMapsUri?: string;
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }[];
};

/**
 * Returns null when Google can't be reached, so the testimonials page still
 * renders. The error is logged on the server (Vercel logs), not hidden.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // A missing key is a setup mistake, not a Google outage: fail loudly.
  if (!apiKey) {
    throw new Error("GOOGLE_PLACES_API_KEY is not set (.env.local locally, Environment Variables in Vercel).");
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=es`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,googleMapsLinks,reviews",
        },
        next: { revalidate: REFRESH_SECONDS },
      }
    );

    if (!response.ok) {
      console.error(`[google-reviews] Places API returned ${response.status}: ${await response.text()}`);
      return null;
    }

    const data: PlacesApiResponse = await response.json();

    if (!data.rating || !data.userRatingCount || !data.reviews?.length) {
      console.error("[google-reviews] Places API response has no rating or reviews.");
      return null;
    }

    const listingUrl = data.googleMapsUri ?? "";

    return {
      rating: data.rating,
      totalReviews: data.userRatingCount,
      reviewsUrl: data.googleMapsLinks?.reviewsUri ?? listingUrl,
      writeReviewUrl: data.googleMapsLinks?.writeAReviewUri ?? listingUrl,
      reviews: data.reviews.map((review) => ({
        authorName: review.authorAttribution?.displayName ?? "",
        authorUrl: review.authorAttribution?.uri ?? null,
        authorPhotoUrl: review.authorAttribution?.photoUri ?? null,
        rating: review.rating ?? 0,
        // The original words of the reviewer, never a machine translation.
        text: review.originalText?.text ?? review.text?.text ?? "",
        relativeTime: review.relativePublishTimeDescription ?? "",
        reviewUrl: review.googleMapsUri ?? null,
      })),
    };
  } catch (error) {
    console.error("[google-reviews] Could not reach the Places API:", error);
    return null;
  }
}
