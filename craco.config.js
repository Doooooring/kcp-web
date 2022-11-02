const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@asset': path.resolve(__dirname, 'src/asset'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@repositories': path.resolve(__dirname, 'src/repositories'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
}
