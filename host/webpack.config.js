const { ModuleFederationPlugin: ModFedPlugin } = require("webpack").container
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

// app-wide vars
const ROOT_JS_FILE = './src/index.js';
const HTML_TEMPLATE_FILE = './src/index.html'
const ENTRY = resolve(__dirname, ROOT_JS_FILE);
// federated module vars
const FED_MOD_HOST = process.env.HOST_FED_MOD_HOST || 'localhost'
const FED_MOD_PORT = process.env.HOST_FED_MOD_PORT || 8080;
const deps = require('./package.json').dependencies;

const THIS_FED_MOD = {
  NAME: 'host-app',
  FILENAME: 'remoteEntry.js',
  URL: `http://${FED_MOD_HOST}:${FED_MOD_PORT}/`,
};

const NAV_FED_OBJ = {
  NAME: 'nav',
  HOST: 'http://localhost',
  PORT: process.env.COUNTER_PORT || 8081,
  FILE: 'remoteEntry.js',
};
const NAV_FED_STR = `${NAV_FED_OBJ.NAME}@${NAV_FED_OBJ.HOST}:${NAV_FED_OBJ.PORT}/${NAV_FED_OBJ.FILE}`;

const NAV_FED_REMOTE = {
  nav: NAV_FED_STR,
};

module.exports = {
  output: {
    publicPath: THIS_FED_MOD.URL,
    chunkFilename: `[name]`,
  },
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
    new ModFedPlugin({
      name: THIS_FED_MOD.NAME,
      filename: THIS_FED_MOD.FILENAME,
      remotes: {},
      // remotes: {
      //   ...NAV_FED_REMOTE,
      // },
      exposes: {},
      shared: {
        ...deps,
      },
    }),
  ],
};
