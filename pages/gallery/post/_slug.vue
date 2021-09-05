<template>
    <article
      class="gallery-post"
    >
      <header class="gallery-post__header">
        <Breadcrumb :list="[
          { label: 'Gallery', href: `/${contentName}/`, },
          { label: `${item.title}`, href: './', },
        ]" />
        <Container>
          <h1 class="gallery-post__title">{{item.title}}</h1>
          <div class="gallery-post__date">{{item.date}}</div>
          <div class="gallery-post__categories">
            <BaseLabel
              v-for="category in item.categories"
              :key="category"
              :content="category"
            />
          </div>
        </Container>
      </header>
      <Spacer :size="4"/>
      <Container>
        <div class="gallery-post__thumbnail">
          <img :src="`${item.thumbnail}`" alt="">
        </div>
        <div>
          {{item.description}}
        </div>
        <div>
          <NuxtContent :document="item" />
        </div>

        <h2>Data</h2>

        <ul class="specs">
          <li
            v-for="spec in item.specs"
            :key="spec.label"
            class="spec"
          >
            <span>{{spec.label}}</span>
            <span>{{spec.value}}</span>
          </li>
        </ul>

        <h2>Links</h2>

        <ul class="links">
          <li
            v-for="link in item.links"
            :key="link.label"
            class="link"
          >
            <span>{{link.label}}</span>
            <span><a
              target="_blank"
              :href="link.value"
            >{{link.value}}</a></span>
          </li>
        </ul>
      </Container>

    </article>
</template>

<script>
const contentName = 'gallery'

export default {
  async asyncData ({$content, params}) {
    const item = await $content(contentName, params.slug).fetch()
    return {
      contentName,
      item,
    }
  },
}
</script>

<style lang="scss" scoped>

.gallery-post {
  &__categories {
    display: flex;
    gap: .25rem .25rem;
  }

  &__thumbnail {
    width: 100%;

    img {
      height: auto;
      width: 100%;
    }
  }

}
</style>
