<template>
  <header
    class="the-header"
    id="the-header"
  >
    <div class="the-header__logo">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </div>
    <TheNavigation />
    <TheDrawer />
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  background: #fff;
  left: 0;
  height: 3.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;

  &__logo {
    height: 1.5rem;
    left: 1rem;
    position: absolute;
    top: 1rem;
    width: auto;

    svg {
      height: 100%;
      width: auto;
    }
  }
}
</style>
