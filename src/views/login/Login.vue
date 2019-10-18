<template>
  <div class="section">
    <router-link to="/login/twitch">Login Twitch</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Login extends Vue {
  public mounted() {
    this.$router.push('/login/twitch');
  }
}
</script>

<style scoped>

</style>
