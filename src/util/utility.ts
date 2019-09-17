export default {
  isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  },
};
