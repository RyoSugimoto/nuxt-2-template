<template>
  <button
  class="drawer-switch"
  @click="toggleDrawer"
  :aria-expanded="$store.state.drawerIsShown"
  :style="{
    //transform: `translate(-${scrollbarWidth}px, 0)`,
  }"
>
    Menu
  </button>
</template>

<script>
export default {
  data: () => ({
    scrollbarWidth: 0,
  }),
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sass-utils/_all" as *;

.drawer-switch {
  background: transparent;
  border: none;
  font-size: 0;
  height: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  z-index: 10;

  &::before,
  &::after {
    background: var(--drawer-switch-color, #000);
    content: "";
    height: .125rem;
    left: 0;
    position: absolute;
    transition:
      transform get-easing(easeOutCubic) var(--drawer-switch-transition-duration, 0);
    width: 100%;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &[aria-expanded="true"] {
    // ドロワー展開時、2つのバーをクロスさせて「X」印にする。
    &::before,
    &::after {
      background: #fff;
    }

    &::before {
      transform: translate(0, .425rem) rotate(-200deg);
    }

    &::after {
      transform: translate(0, -.425rem) rotate(200deg);
    }
  }
}
</style>
