<template>
  <div class="section">
    Logged in response
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Login from '@/network/v1/login';

@Component
export default class LoginTwitch extends Vue {
  private error?: string;


  public created() {
    const code = this.$route.query.code;
    const state = this.$route.query.state;

    if (typeof code === 'string' && typeof state === 'string') {
      Login.getTwitchResponse(code, state)
        .then((value) => {
          this.$cookies.set('accessToken', value.data.accessToken, '30M', undefined, undefined, true);
          this.$cookies.set('expiredAt', value.data.expiredAt, '30M', undefined, undefined, true);
          this.$cookies.set('refreshToken', value.data.refreshToken, '7D', undefined, undefined, true);
          this.$cookies.set('refreshExpiredAt', value.data.refreshExpiredAt, '7D', undefined, undefined, true);
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
