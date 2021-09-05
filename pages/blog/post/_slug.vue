<template>
  <article
    class="blog-post"
  >
    <header class="blog-post__header">
      <Breadcrumb :list="[
        { label: 'Blog', href: `/${contentName}/`, },
        { label: `${item.title}`, href: './', },
      ]" />
      <Container>
        <h1 class="blog-post__title">{{item.title}}</h1>
        <div class="blog-post__date">{{item.date}}</div>
        <div class="blog-post__category">
          <BaseLabel
            :content="item.category"
          />
        </div>
      </Container>
    </header>
    <Spacer :size="4"/>
    <Container>
      <div
        v-if="item.thumbnail"
        class="blog-post__thumbnail"
      >
        <img
          :src="item.thumbnail"
          :alt="item.title"
        >
        <Spacer :size="4"/>
      </div>
      <!-- 本文の出力 -->
      <NuxtContent :document="item" />
    </Container>
  </article>
</template>

<script>
const contentName = 'blog'

export default {
  async asyncData ({$content, params}) {
    const item = await $content(contentName, params.slug).fetch()
    return {
      contentName,
      item,
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post {
  &__thumbnail {
    img {
      max-width: 100%;
    }
  }
}
</style>
