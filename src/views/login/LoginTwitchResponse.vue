<template>
  <div class="section">
    Logged in response
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AuthAPI from '@/network/v1/AuthAPI';
import Util from '@/util/util';

@Component
export default class LoginTwitch extends Vue {
  private error?: string;

  public created() {
    const code = this.$route.query.code;
    const state = this.$route.query.state;

    if (typeof code === 'string' && typeof state === 'string') {
      AuthAPI.getTwitchResponse(code, state)
        .then((value) => {
          const data = value.data.data;
          this.$cookies.set('accessToken', data.accessToken, '30M', undefined, undefined, Util.isProduction());
          this.$cookies.set('expiredAt', data.expiredAt, '30M', undefined, undefined, Util.isProduction());
          this.$cookies.set('refreshToken', data.refreshToken, '7D', undefined, undefined, Util.isProduction());
          this.$cookies.set('refreshExpiredAt', data.refreshExpiredAt, '7D', undefined, undefined, Util.isProduction());
          this.$router.push('/dashboard');
        })
        .catch((reason) => {
          this.error = 'Failed to login ' + reason; // TODO move to localization file
        });
    } else {
      // TODO ERROR
    }
  }
}
</script>
