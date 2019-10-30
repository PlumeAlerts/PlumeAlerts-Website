<template>
  <div class="section">
    Login
    {{error}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AuthAPI from '@/network/v1/AuthAPI';

@Component
export default class LoginTwitch extends Vue {
  private error: string = '';

  public mounted() {
    AuthAPI.getTwitchAuth()
      .then((value) => {
        window.location.href = value.data.data.url;
      })
      .catch((reason) => {
        this.error = 'Failed to login ' + reason; // TODO move to localization file
      });
  }
}
</script>
