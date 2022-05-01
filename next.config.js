const securityHeaders = []
module.exports = {
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'res.cloudinary.com',
      'i.ytimg.com',
      'youtube.com',
      'youbu.be',
    ],
  },
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
