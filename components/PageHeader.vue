<template>
  <div class="page-header">
    <h1 class="page-header__title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: var(--page-header-bg-color, transparent);
  color: var(--page-header-color, inherit);
  padding: 0 1rem;
  position: relative;
  z-index: 100;

  &__title {
    font-size: 300%;
  }
}
</style>
