import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel_formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }

  onInput(event) {
    console.log(this.$root)
    console.log('Formula: onInput', event.target.textContent)
  }

  onClick(event) {
    console.log('Formula: onClick', event)
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }
}
