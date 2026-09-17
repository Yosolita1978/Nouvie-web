import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Fixed at build time: the footer's "last updated" date and the sitemap's
  // lastModified read it through lib/build-date.ts.
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
  images: {
    remotePatterns: [
      // YouTube Shorts thumbnails (components/ui/ShortCard.tsx).
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/productos/lustra-muebles",
        destination: "/productos/lustra-muebles-concentrado",
        permanent: true,
      },
      {
        source: "/productos/limpia-vidrios-alfombras",
        destination: "/productos/limpia-vidrios-concentrado",
        permanent: true,
      },
      // The three product lines used to be a ?categoria= filter on the
      // catalogue. They are real pages now, so send the old query URLs to them
      // and consolidate whatever Google already indexed.
      //
      // `has` matches the query param. Next forwards unused query params to the
      // destination, so the redirect may land on /productos/hogar?categoria=hogar
      // — harmless, since the param is no longer read anywhere, and it cannot
      // loop because the destination path differs from the source path.
      // The unprefixed and /en forms are listed separately, because the locale
      // prefix is part of the source path.
      ...["hogar", "capilar", "institucional"].flatMap((linea) => [
        {
          source: "/productos",
          has: [{ type: "query" as const, key: "categoria", value: linea }],
          destination: `/productos/${linea}`,
          permanent: true,
        },
        {
          source: "/es/productos",
          has: [{ type: "query" as const, key: "categoria", value: linea }],
          destination: `/es/productos/${linea}`,
          permanent: true,
        },
      ]),
      {
        source: "/en/products",
        has: [{ type: "query" as const, key: "categoria", value: "hogar" }],
        destination: "/en/products/home",
        permanent: true,
      },
      {
        source: "/en/products",
        has: [{ type: "query" as const, key: "categoria", value: "capilar" }],
        destination: "/en/products/hair-care",
        permanent: true,
      },
      {
        source: "/en/products",
        has: [{ type: "query" as const, key: "categoria", value: "institucional" }],
        destination: "/en/products/institutional",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
