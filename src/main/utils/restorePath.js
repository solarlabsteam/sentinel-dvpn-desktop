export default function restorePath () {
  if (process.platform !== 'darwin') {
    return
  }

  if (!process.env.PATH) {
    process.env.PATH = ''
  }

  const paths = ['/usr/bin', '/usr/local/bin']
  const vars = process.env.PATH.split(':')

  paths.forEach(path => {
    if (vars.includes(path)) return
    vars.push(path)
  })

  process.env.PATH = process.env.PATH || '/usr/bin:/usr/local/bin'
}
