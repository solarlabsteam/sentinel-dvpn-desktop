/* eslint-disable no-template-curly-in-string */

import { exec } from 'child_process'

export async function queryNodeList () {
  const { stdout, stderr } = await exec('sentinelcli query nodes \\\n' +
    '    --home "${HOME}/.sentinelcli" \\\n' +
    '    --node https://rpc.sentinel.co:443 \\\n' +
    '    --status Active \\\n' +
    '    --page 1')
  stdout.on('data', data => {
    console.log(data)
  })
  stderr.on('data', err => {
    console.log(err)
  })
}
