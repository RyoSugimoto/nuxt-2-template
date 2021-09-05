import fixBackface from '~/assets/js/fix-backface-module'

export default ({ app }, inject) => {
  inject('fixBackface', fixBackface)
}
