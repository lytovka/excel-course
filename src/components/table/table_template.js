const CODES = {
  A: 65,
  Z: 90,
}

function toChar(_el, index) {
  return String.fromCharCode(CODES.A + index)
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
    `
}

function createAlphabeticalAxis(colContent) {
  return `
    <div class="column">
        ${colContent}
        <div class="col-resize"></div>
    </div>
    `
}

function createNumericalAxis(rowContent) {
  return `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">${rowContent}</div>
    </div>
    `
}

function createRow(rowContent, index) {
  const resizeElem = index === 1 ? '' : '<div class="row-resize"></div>'
  return `
      <div class="row">
          <div class="row-info">
           ${index}
           ${resizeElem}
          </div>
          <div class="row-data">${rowContent}</div>
      </div>
      `
}

export function createTable(rowsLimit = 35) {
  const COLS_COUNT = (CODES.Z - CODES.A) + 1
  const rows = []
  const cols = Array
      .from({length: COLS_COUNT}, toChar)
      .map(createAlphabeticalAxis)
      .join('')

  rows.push(createNumericalAxis(cols))

  for (let i = 0; i < rowsLimit; i++) {
    const cells = Array.from({length: COLS_COUNT}, createCell)
        .join('')
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}
