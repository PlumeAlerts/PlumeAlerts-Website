const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");

let plugins = [];
if (process.env.NODE_ENV === "production") {
  const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
  plugins = [
    new CompressionPlugin({
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
      compressionOptions: {
        numiterations: 15
      },
      minRatio: 0.99,
      test: compressionTest
    }),
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: compressionTest,
      compressionOptions: { level: 11 },
      minRatio: 0.99,
    })
  ];
}

module.exports = {
  publicPath: process.env.BASE_URL,
  lintOnSave: true,
  devServer: {
    allowedHosts: (process.env.ALLOWED_HOSTS && process.env.ALLOWED_HOSTS.split(',')) || []
  },
  configureWebpack: {
    plugins
  }
};
