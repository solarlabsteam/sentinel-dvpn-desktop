/* eslint-disable no-template-curly-in-string */

// todo: hot reloading
import { exec } from 'child_process'
import { ipcMain } from 'electron'
import { parseCliTableToJson } from '@/libs/cli-utils'
import axios from 'axios'

ipcMain.on('NODE_LIST', event => {
  let result = ''
  const { stdout, stderr } = exec('sentinelcli query nodes \\\n' +
    '    --home "${HOME}/.sentinelcli" \\\n' +
    '    --node https://rpc.sentinel.co:443 \\\n' +
    '    --status Active \\\n' +
    '    --page 1')
  stdout.on('data', data => {
    result += data
  })
  stderr.on('data', err => {
    console.log(err)
  })
  stdout.on('end', () => {
    try {
      result = parseCliTableToJson(result)
      event.reply('NODE_LIST', { data: result })
    } catch (e) {
      event.reply('NODE_LIST', { errors: e })
    }
  })
})

ipcMain.on('SUBSCRIPTION_LIST', event => {
  let result = ''
  const { stdout, stderr } = exec('sentinelcli query subscriptions \\\n' +
    '    --home "${HOME}/.sentinelcli" \\\n' +
    '    --node https://rpc.sentinel.co:443 \\\n' +
    '    --status Active \\\n' +
    '    --page 1 \\\n' +
    '    --address sent1nrrgw4pqpq3jfjdqv78uyul6rp3tu6avdhv2rf')
  stdout.on('data', data => {
    result += data
  })
  stderr.on('data', err => {
    console.log(err)
  })
  stdout.on('end', () => {
    try {
      result = parseCliTableToJson(result)
      event.reply('SUBSCRIPTION_LIST', { data: result })
    } catch (e) {
      event.reply('SUBSCRIPTION_LIST', { errors: e })
    }
  })
})

ipcMain.on('CONNECT_TO_NODE', async (event, payload) => {
  try {
    const { data: { result: { name } } } = await axios.get('http://localhost:9090/api/v1/keys/test_sentinel_key')

    const connectResponse = await axios.post('http://localhost:9090/api/v1/connect', {
      id: Number(payload.id),
      from: name,
      to: payload.node
    })

    event.reply('CONNECT_TO_NODE', { data: connectResponse })
  } catch (e) {
    console.log(e)
    if (e.isAxiosError) {
      event.reply('CONNECT_TO_NODE', { data: e.response.data })
    } else {
      event.reply('CONNECT_TO_NODE', { error: e })
    }
  }
})

ipcMain.on('DISCONNECT', async (event) => {
  try {
    const { data } = await axios.post('http://localhost:9090/api/v1/disconnect')
    event.reply('DISCONNECT', { data })
  } catch (e) {
    event.reply('DISCONNECT', { errors: e })
  }
})

ipcMain.on('SUBSCRIBE_TO_NODE', (event, payload) => {
  const { node, deposit } = payload
  const { stdout, stderr } = exec('sentinelcli tx subscription subscribe-to-node \\\n' +
    '--home "${HOME}/.sentinelcli" \\\n' +
    '--keyring-backend file \\\n' +
    '--chain-id sentinelhub-2 \\\n' +
    '--node https://rpc.sentinel.co:443 \\\n' +
    '--from test_sentinel_key ' + node.address + ' ' + deposit)
  stdout.on('data', data => {
    console.log(data)
  })
  stderr.on('data', err => {
    console.log(err)
  })
})
