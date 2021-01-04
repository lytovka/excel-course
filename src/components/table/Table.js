import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table_template';

export class Table extends ExcelComponent {
  static className = 'excel_table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    })
  }

  onClick() {
    console.log('click')
  }

  onMousedown(event) {
    console.log('mousedown', event.target)
  }

  onMouseup() {
    console.log('mouseup')
  }

  onMousemove() {
    console.log('mousemove')
  }

  toHTML() {
    return createTable()
  }
}
