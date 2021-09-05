<template>
  <article class="archive-article">
    <div class="archive-article__thumbnail">
      <NuxtLink :to="`${item.dir}/post/${item.slug}`">
        <img
          v-if="item.thumbnail"
          :src="`${item.thumbnail}`"
          :alt="item.title"
        >
        <ImagePlaceHolder v-else />
      </NuxtLink>
    </div>

    <h3 class="archive-article__title">
      <NuxtLink :to="`${item.dir}/post/${item.slug}`">
        {{item.title}}
      </NuxtLink>
    </h3>

    <div class="archive-article__categories">
      <template v-if="item.categories">
        <BaseLabel
          v-for="category in item.categories"
          :key="category"
          :content="category"
        />
      </template>

      <template v-if="item.category">
        <BaseLabel
          :content="item.category"
        />
      </template>
    </div>
    <div class="archive-article__date">{{item.date}}</div>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
    dir: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String
    },
    categories: {
      type: Array
    },
    category: {
      type: String
    },
    thumbnail: {
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
.archive-article {
  &__title {
    margin: .5rem 0;
  }

  &__categories {
    display: flex;
    gap: .25rem;
    margin: .5rem 0;
  }

  &__thumbnail {
    aspect-ratio: 1 / 1;
    background: #eee;
    display: block;
    height: auto;
    width: 100%;

    img {
      height: 100%;
      object-fit: cover;
      vertical-align: bottom;
      width: 100%;
    }
  }
}
</style>
