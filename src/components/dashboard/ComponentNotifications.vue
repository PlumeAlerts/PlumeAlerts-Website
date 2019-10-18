<template>
  <div style="overflow:auto; flex: 1">
    <table class="table is-striped is-narrow is-fullwidth">
      <tr v-for="item in data">
        <td>{{prettyMilliseconds(now - item.createdAt*1000, {compact:true})}}</td>
        <component :is="type[item.type]" :data="item"></component>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ComponentNotificationFollow from '@/components/dashboard/notifications/ComponentNotificationFollow.vue';
import UserAPI, {Notification, NotificationType} from '@/network/v1/UserAPI';
import * as prettyMilliseconds from 'pretty-ms';

@Component({
  components: {ComponentNotificationFollow},
})
export default class ComponentNotifications extends Vue {
  private data: Notification[] = [];
  private type = NotificationType;
  private prettyMilliseconds = prettyMilliseconds;
  private now = new Date();

  public mounted() {
    UserAPI.getNotifications()
      .then((value) => {
        this.data = value.data.data;
      })
      .catch((reason) => console.log(reason));
  }
}
</script>
