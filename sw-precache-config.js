module.exports = {
  staticFileGlobs: [
  ],
  stripPrefix: '/',
  runtimeCaching: [
    {
      urlPattern: /fcxfccvgf/,
      handler: 'cacheFirst',
      options: {
        name: 'some other routes'
      }
    },
    {
      urlPattern: /(.*)/,
      handler: 'networkOnly',
      options: {
        name: 'index html'
      }
    }
  ]
};
