<template>
  <iframe
    id="chat_embed"
    src="https://www.twitch.tv/embed/lclc98/chat?darkpopout"
    frameborder="0"
    scrolling="no"
    width="100%"
    height="100%" style="height:100%">
  </iframe>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ComponentChat extends Vue {
}
</script>
