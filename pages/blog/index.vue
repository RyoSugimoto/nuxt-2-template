<template>
  <div>
    <Breadcrumb :list="[
      { label: 'Blog', href: './', },
    ]" />
    <PageHeader title="Blog" />
    <Spacer :size="4" />
    <Container>
      <ArchiveList :items="items" />
      <Spacer :size="4" />
      <Pagination
        :page-number="pageNumber"
        :has-next-page="hasNextPage"
        :prev-href="pageNumber === 2 ? `/${contentName}/` : `/${contentName}/archive/${pageNumber - 1}/`"
        :next-href="`/${contentName}/archive/${pageNumber + 1}/`"
      />
    </Container>
  </div>
</template>

<script>
const contentName = 'blog'
const postPerPage = 3

export default {
  async asyncData({ app, $content, params }) {
    const pageNumber = parseInt(params.number) || 1
    const {hasNextPage, items} = await app.$fetchContentArchive({
      $content,
      pageNumber,
      contentName: contentName,
      limit: postPerPage,
      sort: 'date',
      order: 'desc',
    })

    return {
      contentName,
      items,
      pageNumber,
      hasNextPage,
    }
  },
}
</script>
