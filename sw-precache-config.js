module.exports = {
  staticFileGlobs: [
    '**.html',
    '**.js'
  ],
  stripPrefix: '/',
  runtimeCaching: [
    {
      urlPattern: /(.*)\.html/,
      handler: 'cacheFirst',
      options: {
        name: 'indexhtml'
      }
    },
    {
      urlPattern: /(.*)\.js/,
      handler: 'cacheFirst',
      options: {
        name: 'js'
      }
    },
    {
      urlPattern: /fcxfccvgf/,
      handler: 'cacheFirst',
      options: {
        name: 'some other routes'
      }
    }
  ]
};
