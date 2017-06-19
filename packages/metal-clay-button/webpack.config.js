const webpack = require('webpack');

module.exports = {
  entry: './src/MetalClayButton.js',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                compact: false,
                presets: ['babel-preset-es2015'],
                plugins: ['babel-plugin-transform-node-env-inline']
            }
        }
    }]
  },
  output: {
      library: 'metal',
      libraryTarget: 'this',
      filename: './build/globals/button.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};