<template>
  <div>
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
      <grid-item v-if="item.show" v-for="item in layout"
                 class="is-flex"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 dragAllowFrom=".card-draggable"
                 :key="item.i">
        <ComponentCard :title="item.title"
                       v-on:close="close(item)">
          <component :is="item.component"></component>
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
import ComponentNotifications from '@/components/dashboard/ComponentNotifications.vue';
import User, {DashboardData} from '@/network/v1/user';

interface CardType {
  COMPONENT: string;
  TITLE: string;
}

const CardData: Record<string, CardType> = {
  CHAT: {
    TITLE: 'Chat',
    COMPONENT: 'ComponentChat',
  },
  NOTIFICATION: {
    TITLE: 'Notifications',
    COMPONENT: 'ComponentNotifications',
  },
};

interface CustomData extends GridItemData {
  title: string;
  show: boolean;
  type: string;
  component: string;
}

@Component({
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    ComponentCard,
    ComponentChat,
    ComponentNotifications,
  },
})
export default class DashboardHome extends Vue {

  private layout: CustomData[] = [];

  public mounted() {
    User.getDashboard()
      .then((value) => {
        for (const [i, dashboard] of value.data.data.entries()) {
          const type: string = dashboard.type;
          if (type in CardData) {
            const card: CardType = CardData[type];
            this.layout.push({
              i: `${i}`,
              title: card.TITLE,
              type,
              component: card.COMPONENT,
              x: dashboard.x,
              y: dashboard.y,
              w: dashboard.width,
              h: dashboard.height,
              show: dashboard.show,
            });
          }
        }
      })
      .catch((reason) => console.log(reason));
  }

  public close(item: CustomData) {
    item.show = false;
    const data: DashboardData = {
      type: item.type,
      x: item.x,
      y: item.y,
      width: item.w,
      height: item.h,
      show: item.show,
    };
    User.putDashboard(data);
  }
}
</script>
