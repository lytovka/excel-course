export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No root was provided for DOM Listener')
    }
    this.$root = $root
  }
}
