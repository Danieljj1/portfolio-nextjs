const dotenv = require("dotenv");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true, // enabled react-strict mode

  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
