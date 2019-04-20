<template>
  <!--  TODO Create padding -->
  <div class="columns">
    <div class="column is-one-fifth">
      <aside class="menu">
        <p class="menu-label">
          Widgets
        </p>
        <ul class="menu-list">
          <li><a @click="onAlertClick">Alerts</a></li>
          <li><a>Event Box</a></li>
        </ul>
      </aside>
    </div>
    <!--  Show borders -->
    <div class="column">
      <component v-bind:is="container"></component>
    </div>
  </div>
</template>

<script>
import ContainerAlerts from '@/components/alerts/ContainerAlerts.vue';

export default {
  name: 'ViewAlerts',
  data() {
    return {
      container: ContainerAlerts,
    };
  },
  methods: {
    onAlertClick(e) {
      this.container = ContainerAlerts;
    },
  },
};
</script>
