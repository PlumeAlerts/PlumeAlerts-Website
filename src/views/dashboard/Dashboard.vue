<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a @click="select('DashboardHome')"
                   :class="tab==='DashboardHome'?'is-active':''">Dashboard</a></li>
            <!--            <li><a @click="select('Dashboard')">Settings</a></li>-->
            <li><a @click="select('DashboardChangelog')"
                   :class="tab==='DashboardChangelog'?'is-active':''">Changelog</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <component :is="tab"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DashboardHome from '@/views/dashboard/DashboardHome.vue';
import DashboardChangelog from '@/views/dashboard/DashboardChangelog.vue';

@Component({
  components: {
    DashboardHome,
    DashboardChangelog,
  },
})
export default class Dashboard extends Vue {

  private tab: string = 'DashboardHome';

  public select(tab: string) {
    this.tab = tab;
  }
}
</script>
