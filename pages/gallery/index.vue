<template>
  <div>
    <Breadcrumb :list="[
      { label: 'Gallery', href: `./`, },
    ]" />
    <PageHeader title="Gallery" />
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
const contentName = 'gallery'
const postPerPage = 4

export default {
  async asyncData({ app, $content, params }) {
    const pageNumber = parseInt(params.number) || 1
    const {hasNextPage, items} = await app.$fetchContentArchive({
      $content,
      pageNumber,
      contentName,
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
