<template>
  <div class="content">
    <h1 class="title is-1">Changelog</h1>
    <h2 class="title is-2">Upcoming Release</h2>
    <h3 class="title is-3">Features</h3>
    <h4 class="title is-4">Dashboard</h4>
    <ul>
      <li>Added chat element.</li>
      <li>Added notification element</li>
      <li>Added a changelog</li>
    </ul>

    <h3 class="title is-3">Bug Fixes</h3>
    <ul>
      <li>Fixed logo going to landing page instead of dashboard.</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {},
})
export default class DashboardChangelog extends Vue {

}
</script>
