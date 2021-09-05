<template>
  <span
    class="base-alert"
    :class="modifier !== '' ? `base-alert--${modifier}` : ''"
  >
    <strong class="base-alert__message">{{message}}</strong>
  </span>
</template>

<script>
export default {
  props: {
    modifier: {
      type: String,
      default: 'default',
    },
    message: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.base-alert {
  display: block;

  &__message {
    border: 1px solid;
    border-radius: .125rem;
    display: inline-block;
    font-weight: bold;
    line-height: 1.25;
    padding: .25rem .5rem;
  }

  &--error {
    color: #c00;
  }
}
</style>
