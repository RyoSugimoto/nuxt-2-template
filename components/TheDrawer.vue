<template>
  <div class="the-drawer">
    <TheDrawerSwitch />
    <Transition name="the-drawer">
      <div
        class="the-drawer__body"
        v-show="$store.state.drawerIsShown"
      >
        <div class="the-drawer__body__logo">
          <Logo />
        </div>
        <nav
          class="the-drawer__body__navigation"
        >
          <ul class="the-drawer__body__navigation__list">
            <li
              v-for="item in navigationItems"
              :key="item.key"
              class="the-drawer__body__navigation__list__item"
            >
              <NuxtLink
                :to="item.href"
                @click.native="onClick"
              >
                {{item.label}}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  mounted() {
    const mediaQuery = new this.$mediaQuery('(min-width: 768px)');
    mediaQuery
    .match(() => {
      this.close()
    })
  },
  computed: {
    // `store/index.js`のゲッターメソッドの結果を受け取って`computed`に展開
    ...mapGetters({
      navigationItems: 'getNavigationItems'
    }),
  },
  methods: {
    close() {
      this.$store.commit('closeDrawer')
    },
    open() {
      this.$store.commit('openDrawer')
    },
    onClick() {
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sass-utils/_all" as *;

.the-drawer {
  @include when-vw-over(rg) {
    display: none;
  }
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;

  &__body {
    background: var(--drawer-bg-color, #222);
    color: var(--drawer-color, inherit);
    min-height: 100vh;
    padding: 1rem 1rem 0;
    z-index: 1;

    &__logo {
      height: 1.5rem;

      .logo {
        fill: var(--drawer-color, inherit);
        height: 100%;
      }
    }

    &__navigation {
      margin: 2rem 0;
      text-align: right;

      &__list {
        font-size: rem(get-font-size(lg));
        list-style: none;

        &__item {
          a {
            color: inherit;
            text-decoration-thickness: 1px;
            text-underline-offset: .5rem;
          }
        }
      }
    }
  }

  // Transition

  &-enter-active,
  &-leave-active {
    transition: opacity var(--drawer-transition-duration, 0);
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
