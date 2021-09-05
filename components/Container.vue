<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sass-utils/_all" as *;

.container {
  // margin: 0 auto;
  max-width: get-width(md);
  padding: 0 1rem;
}
</style>
