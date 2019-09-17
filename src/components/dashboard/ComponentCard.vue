<template>
  <div class="card" style="width: 100%; height: 100%; display: flex; flex-direction: column;">
    <header class="card-header card-draggable">
      <a class="card-header-icon" aria-label="move">
        <span class="icon">
          <i class="fas fa-align-justify"></i>
        </span>
      </a>
      <p class="card-header-title">
        {{this.title}}
      </p>
      <div class="card-header-icon" aria-label="close" @click="this.closeItem">
        <span class="icon">
          <i class="fas fa-times"></i>
        </span>
      </div>
    </header>

    <div class="card-content" style="width: 100%; height: 100%;">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    title: String,
  },
})
export default class ComponentCard extends Vue {
  public closeItem() {
    this.$emit('close', true);
    console.log('test');
  }
}
</script>
