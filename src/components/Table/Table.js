import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table_template';

export class Table extends ExcelComponent {
  static className = 'excel_table'

  toHTML() {
    return createTable(15)
  }
}
