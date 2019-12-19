const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const resolve = dir => path.join(__dirname, dir);

const packageName = process.env.VUE_APP_BASE;
const publicPath = process.env.VUE_APP_PATH;

module.exports = {
  publicPath,

  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    },
    hot: true,
    inline: true,
    port: process.env.VUE_APP_PORT
  },

  chainWebpack(config) {
    config.resolve.alias.set('apis', resolve('src/services/index.js'));
  },

  lintOnSave: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/styles/mixin.less')]
    }
  },

  configureWebpack() {
    const plugins = [];

    if (process.env.VUE_APP_MODE === 'development') {
      const bap = new BundleAnalyzerPlugin({ analyzerPort: 'auto' });
      plugins.push(bap);
    }

    const output = {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`
    };

    return {
      plugins,
      output
    };
  }
};
