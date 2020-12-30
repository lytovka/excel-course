class Dom {
  constructor($rootElement) {
    this.$rootElement = document.createElement($rootElement)
  }

  setInnerHTML(html) {
    if (typeof html === 'string') {
      this.$rootElement.innerHTML = html
    }
    return this
  }

  resetInnerHTML() {
    this.$rootElement.innerHTML = ''
    return this
  }
}


export function $($rootElement) {
  return new Dom($rootElement)
}

$.createElement = (tagName, classes) => {
  const newElement = document.createElement(tagName)
  if (classes) {
    newElement.classList.add(classes)
  }
  return newElement
}
