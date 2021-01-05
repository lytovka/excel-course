import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel_formula'

  constructor($root) {
    super($root, {name: 'Formula', listeners: ['click', 'input']})
  }

  onClick(event) {
    console.log('onClick', event)
  }

  onInput(event) {
    console.log('onInput', event.target.textContent)
  }

  toHTML() {
    return `
    <div class="info">fx</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    </div>
    `
  }
}
