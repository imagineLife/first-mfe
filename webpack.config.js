const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const ROOT_JS_FILE = './src/index.js';
const HTML_TEMPLATE_FILE = './src/index.html'
const ENTRY = resolve(__dirname, ROOT_JS_FILE);

module.exports = {
  entry: ENTRY,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: HTML_TEMPLATE_FILE,
      filename: './index.html',
    }),
  ],
};
