/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // or restrict to known domains
      },
    ],
  },
  experimental: {
    serverActions: {}, // ✅ must be an object, not boolean
  },
  compiler: {
    removeConsole: false, // ✅ replace swcMinify with compiler options
  },
  async rewrites() {
    return [
      {
        source: "/api/gemini",
        destination: "http://localhost:3001/api/gemini", // ✅ proxy to backend
      },
    ];
  },
};

module.exports = nextConfig;