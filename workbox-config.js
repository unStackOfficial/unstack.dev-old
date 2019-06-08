module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{html,css,png,eot,svg,ttf,woff,jpg,js,json,md}"
  ],
  "swDest": "sw.js"
  
   // Define runtime caching rules.
   runtimeCaching: [{
    // Match any request ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 10 images.
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};