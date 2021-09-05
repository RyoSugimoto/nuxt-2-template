<template>
  <div class="layout layout--default">
    <div class="layout--default__container">
      <TheHeader />
      <main class="layout--default__main">
        <Spacer :size="6" />
        <Nuxt />
        <Spacer :size="6"/>
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drawerIsShown() {
      return this.$store.state.drawerIsShown
    },
  },
  watch: {
    drawerIsShown() {
      this.fixBackface(this.drawerIsShown)
    }
  },
  methods: {
    fixBackface(isFixed) {
      this.$fixBackface(isFixed)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout--default__main {
  position: relative;
  z-index: 1;
}

.layout--default__container {
  position: relative;
}

// Transition

.page-enter-active,
.page-leave-active {
  transition: opacity var(--page-transition-duration, 0);
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
