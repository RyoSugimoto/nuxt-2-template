import mediaQuery from '~/assets/js/js-media-query-module'

export default ({ app }, inject) => {
  inject('mediaQuery', mediaQuery)
}
