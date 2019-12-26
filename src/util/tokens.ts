import Vue from 'vue';

export default {
  removeTokens() {
    Vue.$cookies.remove('accessToken');
    Vue.$cookies.remove('expiredAt');
    Vue.$cookies.remove('refreshToken');
    Vue.$cookies.remove('refreshExpiredAt');
  },
};
