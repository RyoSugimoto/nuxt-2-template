<template>
  <span class="base-label">
    {{content}}
  </span>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.base-label {
  border: 1px solid;
  border-radius: .125rem;
  font-size: .75rem;
  display: inline-block;
  line-height: 1;
  padding: .25rem .5rem;
}
</style>
