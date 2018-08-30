import Chunk from 'chunk'
export default {
  install (Vue, options) {
    Vue.filter('chunk', function (value, size) {
      if (value instanceof Array) {
        return Chunk(value, size)
      } else {
        console.warn('vue2-chunk input is not an array', value);
      }
    })
  }
}
