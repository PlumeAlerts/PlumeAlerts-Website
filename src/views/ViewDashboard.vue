<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="15"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :responsive="true"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  >
    <grid-item v-bind:key="item.i" v-for="item in layout"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               :minW="3"
               :maxW="5"
               :minH="13"
               dragIgnoreFrom="iframe">
      <ComponentCard>
        <iframe id="chat_embed"
                src="https://www.twitch.tv/embed/lclc98/chat/"
                scrolling="yes"
                style="width: 100%; height: 100%">
        </iframe>
      </ComponentCard>
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import ComponentCard from '../components/dashboard/DashboardCard.vue';

const testLayout = [
  {
    x: 0, y: 0, w: 3, h: 15, i: '0',
  },
];

export default {
  components: {
    ComponentCard,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      layout: testLayout,
    };
  },

  methods: {
  },
};

</script>
