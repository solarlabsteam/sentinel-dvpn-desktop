export default function (name) {
  const otherNames = {
    Czechia: 'Czech Republic'
  }

  return otherNames[name] || name
}
