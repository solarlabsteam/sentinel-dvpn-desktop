import { addMilliseconds } from 'date-fns'

const grpc = require('@grpc/grpc-js')
const keepaliveTime = 10000
const keepaliveTimeout = 5000

class CustomClient {
  constructor (Client) {
    const lcdHost = 'lcd-sentinel-app.cosmostation.io'
    const lcdPort = 9090

    this._client = new Client(`${lcdHost}:${lcdPort}`, grpc.credentials.createInsecure(), {
      'grpc.keepalive_time_ms': keepaliveTime,
      'grpc.keepalive_timeout_ms': keepaliveTimeout
    })
  }

  async call (method, request, { deadline, calls } = {
    // https://github.com/grpc/grpc-node/issues/1769#issuecomment-902053418
    deadline: keepaliveTime + keepaliveTimeout + 1000,
    // https://github.com/grpc/grpc-node/issues/1907#issuecomment-923021279
    calls: 2
  }) {
    let maxCallsNumber = calls
    const callMethod = async () => {
      const callOptions = {
        deadline: deadline ? addMilliseconds(new Date().getTime(), deadline) : null
      }

      try {
        maxCallsNumber -= 1
        return await this._callMethodPromise(this._client[method].bind(this._client), request, callOptions)
      } catch (e) {
        if (maxCallsNumber > 0) {
          return await callMethod()
        } else {
          throw e
        }
      }
    }

    return await callMethod()
  }

  async _callMethodPromise (method, request, callOptions = {}) {
    return new Promise((resolve, reject) => {
      method(request, callOptions, (err, response) => {
        if (err) {
          reject(err)
          return
        }

        resolve(response)
      })
    })
  }
}

export default CustomClient
