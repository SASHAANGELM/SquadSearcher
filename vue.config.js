const manifest = require('./public/manifest.json');

module.exports = {
  pwa: {
    themeColor: manifest['theme_color'],
    workboxOptions: {
      skipWaiting: true,
      navigateFallback: '/index.html',
      runtimeCaching: [{
        urlPattern: new RegExp('/api/'),
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 20,
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }]
    }
  }
};
