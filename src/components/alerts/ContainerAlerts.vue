<template>
  <div>
    <h1 class="title">Alerts</h1>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Followers</a></li>
      </ul>
    </div>
    <component v-bind:is="container"></component>
  </div>
</template>

<script>
import ContainerAlertsFollower from '@/components/alerts/type/ContainerAlertsFollower.vue';

export default {
  name: 'ContainerAlerts',
  data() {
    return {
      container: ContainerAlertsFollower,
    };
  },
};
</script>
