import {$} from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$rootElement = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $topLevelElement = $.createElement('div', 'excel')
    this.components = this.components.map((Component) => {
      const $componentRoot = $.createElement('div', Component.className)
      const component = new Component($componentRoot)
      if (component.name) {
        window['c' + component.name] = component
      }
      $componentRoot.setInnerHTML(component.toHTML())
      $topLevelElement.append($componentRoot)
      return component
    })
    return $topLevelElement
  }

  render() {
    this.$rootElement.append(this.getRoot())
    this.components.forEach((component) => component.init())
  }
}
