const ALPHABETICAL_CODES = {
  A: 65,
  Z: 90,
}

function toChar(_el, index) {
  return String.fromCharCode(ALPHABETICAL_CODES.A + index)
}

function createCell() {
  return `<div class="cell" contenteditable></div>`
}

function createAlphabeticalCell(letter) {
  return `<div class="column">${letter}</div>`
}

function createNumericalRow(rowContent, index) {
  return `
      <div class="row">
          <div class="row-info">${index}</div>
          <div class="row-data">${rowContent}</div>
      </div>
      `
}

function createAlphabeticalAxis(content) {
  return `<div class="row">
        <div class="row-info"></div>
        <div class="row-data">
        ${content}
        </div>
    </div>`
}

export function createTable(rowNum = 15) {
  const result = []
  const COLS_COUNT = ALPHABETICAL_CODES.Z - ALPHABETICAL_CODES.A + 1

  const alphabeticalColumns = Array
      .from({length: COLS_COUNT}, toChar)
      .map(createAlphabeticalCell)
      .join('')

  result.push(createAlphabeticalAxis(alphabeticalColumns))

  for (let i = 0; i < rowNum; i++) {
    const cells = Array.from({length: COLS_COUNT}, createCell).join('')
    result.push(createNumericalRow(cells, i + 1))
  }

  return result.join('')
}
