import {$} from '@core/dom'

export class Excel {
  constructor($rootId, options) {
    this.$rootId = $rootId
    this.options = options.components || []
  }

  getRoot() {
    const $topLevelElement = $.createElement('div', 'excel')
    this.options.forEach((Component) => {
      const $componentRoot = $.createElement('div', Component.className)
      const component = new Component($componentRoot)
      $componentRoot.innerHTML = component.toHTML()
      console.log($componentRoot)
      $topLevelElement.insertAdjacentElement('beforeend', $componentRoot)
    })
    return $topLevelElement
  }

  render() {
    const $rootElement = document.querySelector(this.$rootId)
    $rootElement.appendChild(this.getRoot())
  }
}
