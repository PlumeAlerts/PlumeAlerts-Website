<template>
  <div class="content">
    <grid-layout
      :layout.sync="layout"
      :col-num="10"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true">
      <grid-item v-if="!item.closed" v-for="item in layout"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 dragAllowFrom=".card-draggable"
                 :key="item.i">
        <ComponentCard :title="item.title"
                       v-on:close="item.closed = true">
          <component :is="item.type"></component>
        </ComponentCard>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VueGridLayout, {GridItemData} from 'vue-grid-layout';
import ComponentCard from '@/components/dashboard/ComponentCard.vue';
import ComponentChat from '@/components/dashboard/ComponentChat.vue';

export enum CardType {
  CHAT = 'ComponentChat',
}

interface CustomData extends GridItemData {
  title: string;
  closed: boolean;
  type: CardType;
}

@Component({
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    ComponentCard,
    ComponentChat,
  },
})
export default class DashboardHome extends Vue {
  private defaultLayout: CustomData[] = [
    {x: 7, y: 0, w: 3, h: 18, i: '0', title: 'Chat', closed: false, type: CardType.CHAT},
  ];

  private layout: CustomData[] = [];

  public created() {
    this.layout = this.defaultLayout;
  }
}
</script>
