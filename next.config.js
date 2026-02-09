/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/(links|lnk|l)',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig