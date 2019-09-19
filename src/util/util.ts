export default {
  isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  },

  beforeNow(seconds: number): boolean {
    const now = Math.floor(new Date().getTime() / 1000);
    return now - seconds > 0;
  },
};
