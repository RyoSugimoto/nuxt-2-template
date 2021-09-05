<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__list">
      <li class="breadcrumb__list__item breadcrumb__list__item--root">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li
        v-for="(item, index) in list"
        :key="index"
        class="breadcrumb__list__item"
      >
        <NuxtLink
          v-if="index < list.length - 1"
          :to="item.href"
        >{{item.label}}
        </NuxtLink>
        <span
          v-else
        >{{item.label}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sass-utils/_all" as *;

.breadcrumb {
  font-size: rem(get-font-size(sm));
  padding: .25rem 1rem;

  &__list {
    display: flex;
    gap: 0 .5rem;
    list-style: none;

    &__item {
      & + & {
        &::before {
          content: "/";
          margin: 0 .5rem 0 0;
        }
      }
      &:last-child span {
        // visibility: hidden;
      }
    }
  }
}
</style>
