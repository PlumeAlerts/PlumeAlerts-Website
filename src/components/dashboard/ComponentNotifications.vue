<template>
  <div style="overflow:auto; flex: 1" class="list">
    <div v-for="item in data" class="list-item">
      <div class="columns">
        <div class="column is-narrow small">
          {{getPretty(item.createdAt)}}
        </div>
        <div class="column small">
          <component :is="getComponent(item.type)" :data="item"/>
        </div>
        <div class="column is-narrow small">
          <span class="icon" @click="hide(item)">
            <font-awesome-icon :icon="item.hide?'eye-slash':'eye'"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ComponentNotificationFollow from '@/components/dashboard/notifications/ComponentNotificationFollow.vue';
import UserAPI, {Notification, NotificationType} from '@/network/v1/UserAPI';
import prettyMilliseconds from 'pretty-ms';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);
@Component({
  components: {ComponentNotificationFollow},
})
export default class ComponentNotifications extends Vue {
  private data: Notification[] = [];

  public mounted() {
    UserAPI.getNotifications()
      .then((value) => {
        this.data = value.data.data;
      })
      .catch((reason) => console.log(reason));
  }

  protected hide(item: Notification) {
    item.hide = !item.hide;

    UserAPI.putNotifications({
      id: item.id,
      hide: item.hide,
    });
  }

  protected getComponent(type: string): string {
    return NotificationType[type];
  }

  protected getPretty(time: number): string {
    return prettyMilliseconds(new Date().getTime() - time * 1000, {compact: true});
  }
}
</script>

<style>
  .column.small {
    padding: 0.5rem;
  }
</style>
