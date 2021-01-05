class Dom {
  constructor(selector) {
    this.$rootElement = typeof selector === 'string' ? document.querySelector(selector) : selector
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

  append(element) {
    if (element instanceof Dom) {
      element = element.$rootElement
    }
    if (Element.prototype.append) {
      this.$rootElement.append(element)
    } else {
      this.$rootElement.appendChild(element)
    }
    return this
  }

  on(type, callback) {
    this.$rootElement.addEventListener(type, callback)
  }

  off(type, callback) {
    this.$rootElement.removeEventListener(type, callback)
  }
}


export function $(selector) {
  return new Dom(selector)
}

$.createElement = (tagName, classes) => {
  const newElement = document.createElement(tagName)
  if (classes) {
    newElement.classList.add(classes)
  }
  return $(newElement)
}
