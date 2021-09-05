import navigationItems from '~/assets/json/navigation.json'

export const state = () => ({
  navigationItems,
  drawerIsShown: false,
})

export const mutations = {
  toggleDrawer(state) {
    state.drawerIsShown = !state.drawerIsShown
  },
  closeDrawer(state) {
    if (state.drawerIsShown) state.drawerIsShown = false
  },
  openDrawer(state) {
    if (!state.drawerIsShown) state.drawerIsShown = true
  }
}

export const getters = {
  getNavigationItems(state) {
    return state.navigationItems
  },
}
