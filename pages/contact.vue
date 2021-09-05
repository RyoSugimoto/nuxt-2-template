<template>
  <div>
    <Breadcrumb :list="[
      { label: 'Contact', href: `./`, },
    ]" />
    <PageHeader title="Contact" />
    <Container>
      <NuxtChild />
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity var(--page-transition-duration, 0);
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transition: opacity var(--page-transition-duration, 0);
}
</style>
