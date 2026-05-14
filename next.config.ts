import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
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
    ];
  },
};

export default withNextIntl(nextConfig);
