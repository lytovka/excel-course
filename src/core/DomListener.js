import {capitalize} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('root was not provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const methodName = getMethodName(listener)
      if (!this[methodName]) {
        // eslint-disable-next-line max-len
        throw new Error(`Method ${methodName} is not implemented in ${this.name}`)
      }
      this.$root.on(listener, this[methodName])
    })
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const methodName = getMethodName(listener)
      this.$root.off(listener, this[methodName])
    })
  }
}

function getMethodName(string) {
  return 'on' + capitalize(string)
}
