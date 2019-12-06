const path = require('path');

const resolve = dir => path.join(__dirname, dir);

const packageName = process.env.VUE_APP_BASE;
const publicPath = process.env.NODE_ENV === 'development' ? '/' : `${process.env.VUE_APP_PATH}`;

module.exports = {
  publicPath,

  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    hot: true,
    inline: true,
    port: process.env.VUE_APP_PORT,
  },

  chainWebpack(config) {
    config.resolve.alias.set('apis', resolve('src/services/index.js'));
  },

  lintOnSave: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/styles/mixin.less')],
    },
  },

  configureWebpack() {
    const plugins = [];

    const output = {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    };

    return {
      plugins,
      output,
    };
  },
};
