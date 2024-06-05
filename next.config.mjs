/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        pathname: '/**',
        protocol: "https",
        hostname: "unsplash.com"
      },
      {
        pathname: '/**',
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        pathname: '/**',
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net"
      },
      
    ],
    domains: [
      'unsplash.com',
      'images.unsplash.com',
    ]
  }
};

export default nextConfig;
