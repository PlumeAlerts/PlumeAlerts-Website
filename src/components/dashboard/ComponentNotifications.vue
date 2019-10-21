<template>
  <div style="overflow:auto; flex: 1" class="list">
    <div v-for="item in data" class="list-item">
      <div class="columns">
        <div class="column is-narrow small">
          {{prettyMilliseconds(now - item.createdAt*1000, {compact:true})}}
        </div>
        <div class="column small">
          <component :is="type[item.type]" :data="item"/>
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
import * as prettyMilliseconds from 'pretty-ms';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);
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

  protected hide(item: Notification) {
    item.hide = !item.hide;

    UserAPI.putNotifications({
      id: item.id,
      hide: item.hide,
    });
  }
}
</script>

<style>
  .column.small {
    padding: 0.5rem;
  }
</style>
