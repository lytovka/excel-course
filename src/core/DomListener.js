export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('root was not provided for DomListener')
    }
    this.$root = $root
  }
}
