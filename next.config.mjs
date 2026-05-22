/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'instagram.com' },
      { protocol: 'https', hostname: 'cdninstagram.com' },
    ],
  },
  // Useful when deploying behind a path (e.g. GitHub Pages); leave empty for root.
  // basePath: '',
};

export default nextConfig;
