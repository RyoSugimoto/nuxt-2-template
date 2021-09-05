<template>
  <div class="image-place-holder">
    <div class="image-place-holder__logo">
      <Logo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-place-holder {
  align-items: center;
  background: var(--image-place-hoder-bg-color, #999);
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 2rem;

  &__logo {
    display: block;
    max-width: 8rem;
    width: 100%;

    svg {
      fill: var(--image-place-holder-logo-color, #fff);
      vertical-align: middle;
    }
  }
}
</style>
