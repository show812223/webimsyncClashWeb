// var webpack = require("webpack")
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
// const LodashWebpackPlugin = require("lodash-webpack-plugin")
module.exports = {
  lintOnSave: false,
  // transpileDependencies: ['vuetify'],

  configureWebpack: {
    plugins: [
      // new VuetifyLoaderPlugin(),
      // new BundleAnalyzerPlugin({ analyzerMode: "disabled" }), //{ analyzerMode: "disabled" }
      // new LodashWebpackPlugin(),
      // // 只保留moment中的中文與英文語言包
      // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/,/zh-tw|en/)
    ],
   

  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
