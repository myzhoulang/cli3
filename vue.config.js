const webpack = require("webpack");
const theme = require("./src/constants/theme");

module.exports = {
  // 自定义svg
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },

  // webpack 配置
  configureWebpack: {
    plugins: [
      // 忽略 moment 中没有使用到的语言包， 减少应用的大小
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },

  // 处理css/less/scss/styls
  css: {
    loaderOptions: {
      less: {
        // 主题配置
        modifyVars: theme,
        javascriptEnabled: true,
      },
    },
  },
};
