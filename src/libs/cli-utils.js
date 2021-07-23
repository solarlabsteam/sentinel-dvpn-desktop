import { camelCase } from 'lodash'

function parse (output) {
  const lines = output.trim().split('\n').map(l => l.split('|').map(h => h.trim()))
  const headers = lines.shift().map(h => camelCase(h))

  if (!lines.length) {
    return []
  }

  return lines.flatMap(line => {
    const obj = {}
    line.forEach((field, idx) => {
      const header = headers[idx]
      obj[header] = field || null
    })

    return obj
  })
}

function clean (table) {
  const firstBorderPattern = new RegExp('(?<=\\-)\\+', 'mg')
  const secondBorderPattern = new RegExp('\\+(\\-)+(\\n|)', 'mg')
  const separatorPattern = new RegExp('(^\\|)|(\\|$)', 'mg')

  return table
    .replace(firstBorderPattern, '')
    .replace(secondBorderPattern, '')
    .replace(separatorPattern, '')
}

export function parseCliTableToJson (table) {
  const cleanOutput = clean(table)
  return parse(cleanOutput)
}
