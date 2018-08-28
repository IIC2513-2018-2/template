const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetPipeline = require('webpack-asset-pipeline');
const webpack = require('webpack');

const developmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function decorateWithHRM(entry) {
  if (developmentMode) {
    return [
      // 'react-hot-loader/patch',
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      entry,
    ];
  }
  return [entry];
}

module.exports = {
  mode: developmentMode ? 'development' : 'production',
  context: path.join(__dirname, 'src', 'assets'),
  entry: {
    app: decorateWithHRM('./js/index.js'),
    appReact: decorateWithHRM('./js/app.jsx'),
  },
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, 'build', 'assets'),
    filename: developmentMode
      ? '[name].js'
      : '[name]-[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  devtool: developmentMode ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/i,
        loader: 'file-loader',
        options: {
          name: developmentMode
            ? '[name].[ext]'
            : '[name]-[hash].[ext]',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          developmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css',
    }),
    new WebpackAssetPipeline(),
  ],
};
