<template>
  <td>Followed by <strong>{{data.username}}</strong></td>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {NotificationFollow} from '@/network/v1/UserAPI';

@Component({
  props: {
    data: Object as () => NotificationFollow,
  },
})
export default class ComponentNotifications extends Vue {

}
</script>
