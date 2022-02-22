const channelPromises = {}

export function onceForAll (channel, payload) {
  if (channelPromises[channel]) return channelPromises[channel]

  channelPromises[channel] = once(channel, payload)
  channelPromises[channel].finally(() => {
    channelPromises[channel] = null
  })

  return channelPromises[channel]
}

export function once (channel, payload) {
  return new Promise((resolve, reject) => {
    window.ipc.once(channel, payload => {
      if (payload.error) reject(payload.error)
      else resolve(payload.data)
    })

    window.ipc.send(channel, payload && JSON.stringify(payload))
  })
}
