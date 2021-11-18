const grpc = require('@grpc/grpc-js')

const lcdHost = 'lcd-sentinel-app.cosmostation.io'
const lcdPort = 9090

class QueryService {
  static create (Client) {
    return new Client(`${lcdHost}:${lcdPort}`, grpc.credentials.createInsecure())
  }
}

export default QueryService
