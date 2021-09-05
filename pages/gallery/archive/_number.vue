<template>
  <div>
    <Breadcrumb :list="[
      { label: 'Gallery', href: `/${contentName}/`, },
      { label: `Page ${this.pageNumber}`, href: './', },
    ]" />
    <PageHeader :title="`Gallery (Page ${pageNumber})`" />
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
  async asyncData({ app, $content, params, error }) {
    const pageNumber = parseInt(params.number) || 1
    const {hasNextPage, items} = await app.$fetchContentArchive({
      $content,
      pageNumber,
      contentName,
      limit: postPerPage,
      sort: 'date',
      order: 'desc',
    })

    if (!items.length) {
      return error({
        statusCode: 404,
        message: 'No items found.',
      })
    }

    return {
      contentName,
      items,
      pageNumber,
      hasNextPage,
    }
  },
}
</script>
