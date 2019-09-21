module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      { libraryName: 'vant', libraryDirectory: 'es' },
      'vant'
    ]
  ]
}
