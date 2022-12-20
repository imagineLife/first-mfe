const { ModuleFederationPlugin: ModFedPlugin } = require('webpack').container;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

// app-wide vars
const ROOT_JS_FILE = './src/index.js';
const HTML_TEMPLATE_FILE = './src/index.html';
const ENTRY = resolve(__dirname, ROOT_JS_FILE);
// federated module vars
const FED_MOD_HOST = process.env.HOST_FED_MOD_HOST || 'localhost';
const FED_MOD_PORT = process.env.HOST_FED_MOD_PORT || 8081;
const deps = require('./package.json').dependencies;

/*
  Eager dependencies, per error-driven-development 
  see 
  https://webpack.js.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption

  - list of modules that are set to "eagerly load", to enable quick additions
  - loop through each, build an obj that gets used in the ModuleFederationPlugin
*/
const eagerDeps = [
  'react',
  'react-dom',
  '@emotion/styled',
  // '@emotion/react',
  // '@mui/icons-material',
  // '@mui/material',
];
const eagerDepsObj = {};
eagerDeps.forEach((d) => {
  eagerDepsObj[`${d}`] = {
    singleton: true,
    requiredVersion: deps[d],
  };
  if (d.includes('react')) { 
    eagerDepsObj[`${d}`].eager = true;
  }
});

console.log('eagerDepsObj')
console.log(eagerDepsObj)


const THIS_FED_MOD = {
  NAME: 'nav',
  FILENAME: 'navEntry.js',
  URL: `http://${FED_MOD_HOST}:${FED_MOD_PORT}/`,
};

module.exports = {
  output: {
    publicPath: THIS_FED_MOD.URL,
    chunkFilename: `nav/[name].mjs`,
    uniqueName: 'nav',
  },
  resolve: {
    extensions: ['.js'],
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
    new ModFedPlugin({
      name: THIS_FED_MOD.NAME,
      filename: THIS_FED_MOD.FILENAME,
      remotes: {},
      exposes: { './Nav': './src/components/Nav' },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
          eager: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: HTML_TEMPLATE_FILE,
      filename: './index.html',
    }),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       reactVendor: {
  //         test: /[\\/]node_modules[\\/](react$)[\\/]/,
  //         name: 'react-dep',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  devServer: {
    port: 8081,
  },
};
