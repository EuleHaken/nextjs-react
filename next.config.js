/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.foerderland.de",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
