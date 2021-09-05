<template>
  <div>
    <!-- <video
      class="key-visual-video"
      alt=""
      autoplay
      muted
      loop
      src="~/assets/videos/art.mp4"
    ></video> -->
    <Container>
      <BaseHeading01 text="About" />
      <BaseLink text="このサイトについて" href="/about/" />
      <BaseHeading01 text="Blog" />
      <BaseLink text="すべてのブログを見る" href="/blog/" />
      <BaseHeading01 text="Gallery" />
      <BaseLink text="すべての作品を見る" href="/gallery/" />
      <BaseHeading01 text="Contact" />
      <BaseLink text="お問い合わせ" href="/contact/" />
    </Container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  z-index: 1;
}

.key-visual-video {
  height: auto;
  width: 100%;
}
</style>
