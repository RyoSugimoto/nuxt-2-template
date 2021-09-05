<template>
  <h1 class="base-heading--01">
    {{text}}
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sass-utils/_all" as *;

.base-heading--01 {
  font-size: get-font-size(xl);
}
</style>
