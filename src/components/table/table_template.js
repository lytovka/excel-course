const CODES = {
  A: 65,
  Z: 90,
}

function toChar(_el, index) {
  return String.fromCharCode(CODES.A + index)
}

function createCell(_, index) {
  return `
    <div class="cell" contenteditable data-col="${index}"></div>
    `
}

function createAlphabeticalAxis(colContent, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
        ${colContent}
        <div class="col-resize" data-resize="col"></div>
    </div>
    `
}

function createRow(rowContent) {
  return `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">${rowContent}</div>
    </div>
    `
}

function createNumericalAxis(rowContent, index) {
  const resizeElem = '<div class="row-resize" data-resize="row"></div>'
  return `
      <div class="row" data-type="resizable" data-row="${index}">
          <div class="row-info">${index}
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

  rows.push(createRow(cols))

  for (let i = 0; i < rowsLimit; i++) {
    const cells = Array.from({length: COLS_COUNT}, createCell)
        .join('')
    rows.push(createNumericalAxis(cells, i + 1))
  }
  return rows.join('')
}
