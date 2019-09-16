<template>
  <div class="section">
    Home
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Home extends Vue {
}
</script>
