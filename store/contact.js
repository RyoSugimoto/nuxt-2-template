export const state = () => ({
  values: {},
  isInvalid: true,
})

export const mutations = {
  setValues(state, values) {
    state.values = values
  },
  setInvalid(state, isInvalid) {
    state.isInvalid = isInvalid
  }
}
