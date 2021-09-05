<template>
  <hr
    class="spacer"
    :style="{
      height: `${unit * size}rem`
    }"
  >
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    unit: .5
  })
}
</script>

<style lang="scss" scoped>

.spacer {
  border: none;
  display: block;
}
</style>
