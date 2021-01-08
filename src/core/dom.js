class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
            document.querySelector(selector) : selector
  }

  get data() {
    return this.$el.dataset
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  clear() {
    this.html('')
    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  css(styles) {
    for (const property in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, property)) {
        this.$el.style[property] = styles[property]
      }
    }
    // console.log(this.$el.style.width)
    //   throw new Error(`Can't find property "${property}" of ${this.$el}`)
    // } else {
    //   return this.$el.style[property]
    // }
  }

  find(selector) {
    return this.$el.querySelector(selector)
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  getBoundingClientRect() {
    return this.$el.getBoundingClientRect()
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
