<template>
  <div>
    <Breadcrumb :list="[
      {
        label: 'About',
        href: './',
      },
    ]" />
    <PageHeader title="About" />
    <Spacer :size="4"/>
    <Container>
      <p>ページの内容です。</p>
    </Container>
  </div>
</template>
