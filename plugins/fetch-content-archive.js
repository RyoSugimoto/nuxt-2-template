const fetchContentArchive = async({
  $content,
  pageNumber,
  contentName,
  limit,
  sort,
  order
}) => {
  const items = await $content(contentName)
    .sortBy(sort, order)
    .limit(limit + 1)
    .skip(limit * (pageNumber - 1))
    .fetch()

  const hasNextPage = items.length > limit

  return {
    hasNextPage,
    items: hasNextPage ? items.slice(0, -1) : items,
  }
}

export default ({}, inject) => {
  inject('fetchContentArchive', fetchContentArchive)
}
