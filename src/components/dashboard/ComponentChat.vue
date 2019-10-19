<template>
  <iframe
    id="chat_embed"
    :src="`https://www.twitch.tv/embed/${user.login}/chat?darkpopout`"
    width="100%"
    height="100%" style="height:100%"
    title="Twitch chat">
  </iframe>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {User} from '@/network/v1/UserAPI';

@Component({
  props: {
    user: Object as () => User,
  },
})
export default class ComponentChat extends Vue {
}
</script>
