<template>
  <NuxtLink
    :to="href"
    class="base-link"
  >
    {{text}}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.base-link {
  border: 1px solid;
  border-radius: 2rem;
  color: var(--link-color, #222);
  display: inline-block;
  line-height: 1;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
}
</style>
