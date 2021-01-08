import {$} from '@core/dom'
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table_template';
export class Table extends ExcelComponent {
  static className = 'excel_table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const type = event.target.dataset.resize

      const resizeElement = $(event.target)
      const $targetElement = resizeElement.closest('[data-type="resizable"]')

      let cells
      if (type === 'col') {
        cells = this.$root.findAll(`[data-col="${$targetElement.data.col}"]`)
      }

      let delta
      const coords = $targetElement.getBoundingClientRect()

      document.onmousemove = (e) => {
        switch (type) {
          case 'col':
            delta = Math.floor(e.pageX - coords.right)
            break;
          case 'row':
            delta = Math.floor(e.pageY - coords.bottom)
        }
      }

      document.onmouseup = () => {
        switch (type) {
          case 'col': {
            const newWidth = (coords.width + delta) + 'px'
            $targetElement.css({width: newWidth})
            cells.forEach((el) => el.style.width = newWidth)
            break;
          }
          case 'row': {
            const newHeight = (coords.height + delta) + 'px'
            $targetElement.css({height: newHeight})
            break;
          }
        }
        document.onmousemove = null
      }
    }
  }

  onMousemove(event) {
  }

  onMouseup(event) {
  }

  toHTML() {
    return createTable()
  }
}
