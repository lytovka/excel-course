import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  toHTML() {
    return ''
  }

  init() {
    console.log(this.$root)
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}
