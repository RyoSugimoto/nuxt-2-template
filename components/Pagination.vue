<template>
  <div class="pagination">
    <NuxtLink
      v-if="pageNumber !== 1"
      :to="prevHref"
      class="pagination__link pagination__link--prev"
    >前のページ</NuxtLink>

    <NuxtLink
      v-if="hasNextPage"
      :to="nextHref"
      class="pagination__link pagination__link--next"
    >次のページ</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
    hasNextPage: {
      type: Boolean,
      required: true,
    },
    prevHref: {
      type: String,
      required: true,
    },
    nextHref: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 0 1rem;
  &__link {
    &--prev {

    }
    &--next {

    }
  }
}
</style>
