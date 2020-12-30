import {capitalize} from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root was provided for DOM Listener')
    }
    this.$root = $root
    this.listeners = listeners
    this.activeListeners = []
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const callbackName = getMethodName(listener)
      if (!this[callbackName]) {
        throw new Error(`Method ${callbackName} is not implemented in ${this.name} Component`)
      }
      const boundListener = this[callbackName].bind(this)
      this.activeListeners.push({type: callbackName, listener: boundListener})
      this.$root.on(listener, boundListener)
    })
  }

  removeDomListeners() {
    this.activeListeners.forEach((activeListener) => {
      const {type, listener} = activeListener
      this.$root.off(type, listener)
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
