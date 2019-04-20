<template>
  <div class="card" style="width: 100%; height: 100%; display: flex; flex-direction: column;">
    <header class="card-header">
      <a class="card-header-icon" aria-label="close">
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
      </a>
      <p class="card-header-title">
        {{this.moduleName}}
      </p>
      <div class="card-header-icon" aria-label="move">
            <span class="icon">
              <i class="fas fa-align-justify"></i>
            </span>
      </div>
    </header>

    <div class="card-content" style="width: 100%; height: 100%;">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ComponentCard',
  props: {
    moduleName: String,
  },
};
</script>
