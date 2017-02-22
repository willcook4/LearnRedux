var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, './app/components'),
      path.resolve(__dirname, './app/api'),
      'node_modules'],
    alias: {
      applicationStyles: path.resolve(__dirname, './app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0']
            }
          }]
      },{
        test: /\.scss?$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, './node_modules/foundation-sites/scss'),
                path.resolve(__dirname, './app/styles/')
              ]
            }
          }]
      }]
  },
  devtool: 'eval-source-map'
};