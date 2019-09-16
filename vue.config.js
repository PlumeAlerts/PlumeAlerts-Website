module.exports = {
  lintOnSave: true,
  devServer: {
    allowedHosts: process.env.ALLOWED_HOSTS.split(',') || []
  }
};
