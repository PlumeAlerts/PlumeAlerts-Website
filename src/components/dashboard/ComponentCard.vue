<template>
  <div class="card is-flex" style="flex: auto; flex-direction: column">
    <header class="card-header card-draggable">
      <a class="card-header-icon" aria-label="move">
        <span class="icon">
          <font-awesome-icon icon="align-justify"/>
        </span>
      </a>
      <p class="card-header-title">
        {{this.title}}
      </p>
      <div class="card-header-icon" aria-label="close" @click="this.closeItem">
        <span class="icon">
          <font-awesome-icon icon="times"/>
        </span>
      </div>
    </header>

    <div class="card-content is-flex" style="flex: 1; padding: 0; min-height: 0">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAlignJustify, faTimes} from '@fortawesome/free-solid-svg-icons';

library.add(faAlignJustify, faTimes);
@Component({
  props: {
    title: String,
  },
})
export default class ComponentCard extends Vue {
  public closeItem() {
    this.$emit('close', true);
  }
}
</script>
