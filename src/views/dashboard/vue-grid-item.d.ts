declare module 'vue-grid-layout' {
  import Vue from 'vue';

  export class GridLayout extends Vue {
  }

  // tslint:disable-next-line:max-classes-per-file
  export class GridItem extends Vue {
  }

  export interface GridItemData {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
  }
}
