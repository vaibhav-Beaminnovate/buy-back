/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // trailingSlash: true,
  // output: "export",
  // basePath: "/#",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jishan-test.s3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
