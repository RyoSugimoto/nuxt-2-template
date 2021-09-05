<template>
  <ul class="archive-list">
    <li class="archive-list__item">
      <ArchiveArticle
        v-for="item in items"
        :key="item.slug"
        :item="item"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.archive-list__item {
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  list-style: none;
}
</style>
