import {capitalize} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root was provided for DOM Listener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const methodName = getMethodName(listener)
      if (!this[methodName]) {
        throw new Error(`Method ${methodName} is not implemented in ${this.name} Component`)
      }
      this[methodName] = this[methodName].bind(this)
      console.log('boundListener', this[methodName])
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

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
