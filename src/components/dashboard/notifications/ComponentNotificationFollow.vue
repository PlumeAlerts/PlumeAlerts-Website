<template>
  <td>Followed by {{data.username}}</td>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {NotificationFollow} from '@/network/v1/user';


@Component({
  props: {
    data: Object as () => NotificationFollow,
  },
})
export default class ComponentNotifications extends Vue {

}
</script>
