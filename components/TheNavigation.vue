<template>
  <nav
    class="the-navigation"
  >
    <ul class="the-navigation__list">
      <li
        v-for="item in navigationItems"
        :key="item.key"
        class="the-navigation__list__item"
      >
        <NuxtLink
          :to="item.href"
        >
          {{item.label}}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  computed: {
    // `store/index.js`のゲッターメソッドの結果を受け取って`computed`に展開
    ...mapGetters({
      navigationItems: 'getNavigationItems'
    })
  },
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sass-utils/_all" as *;

.the-navigation {
  display: none;
  position: absolute;
  right: 1rem;
  top: 1rem;

  @include when-vw-over(rg) {
    display: block;
  }

  &__list {
    display: flex;
    gap: 0 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
