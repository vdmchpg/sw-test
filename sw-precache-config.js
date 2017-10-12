module.exports = {
  staticFileGlobs: [
    '**.html'
  ],
  stripPrefix: '/',
  runtimeCaching: [
    {
      urlPattern: /fcxfccvgf/,
      handler: 'cacheFirst',
      options: {
        name: 'some other routes'
      }
    }
  ]
};
