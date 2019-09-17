module.exports = {
  publicPath: process.env.BASE_URL,
  lintOnSave: true,
  devServer: {
    allowedHosts: (process.env.ALLOWED_HOSTS && process.env.ALLOWED_HOSTS.split(',')) || []
  }
};
