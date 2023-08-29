/** @type {import('next').NextConfig} */
// const nextConfig = {
  
// }
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1'], // Add your Django backend domain here
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '127.0.0.1',
    //     port: '8000',
    //     pathname: '/uploads/',
    //   },
    // ],
    
  },
};

// module.exports = nextConfig
