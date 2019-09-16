<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a class="is-active">Dashboard</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <DashboardHome></DashboardHome>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DashboardHome from '@/views/dashboard/DashboardHome.vue';

@Component({
    components: {
        DashboardHome,
    },
})
export default class Dashboard extends Vue {
}
</script>
