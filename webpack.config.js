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

/*
  Eager dependencies, per error-driven-development 
  see 
  https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption

  - list of modules that are set to "eagerly load", to enable quick additions
  - loop through each, build an obj that gets used in the ModuleFederationPlugin
*/ 
const eagerDeps = ['react', 'react-dom', '@emotion/styled', '@emotion/react']
const eagerDepsObj = {}
eagerDeps.forEach(d => { 
  eagerDepsObj[`${d}`] = {
      singleton: true,
      requiredVersion: deps[d],
      eager: true,
    }
})

const THIS_FED_MOD = {
  NAME: 'host-app',
  FILENAME: 'remoteEntry.js',
  URL: `http://${FED_MOD_HOST}:${FED_MOD_PORT}/`,
};
module.exports = {
  entry: {
    index: ENTRY,
    shared: 'react',
  },
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
      exposes: {},
      shared: {
        ...deps,
        ...eagerDepsObj,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
