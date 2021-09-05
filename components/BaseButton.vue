<template>
  <button
    @click="action"
    class="base-button"
    :class="modifier !== '' ? `base-button--${modifier}` : ''"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
    },
    modifier: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  background-color: var(--button-bg-color, #000);
  border: none;
  border-radius: 2rem;
  color: var(--button-color, #fff);
  display: block;
  line-height: 1;
  padding: 1rem 2rem;
  text-align: center;

  &--primary {
    background-color: var(--button-bg-color-primary, #06c);
  }
}
</style>
