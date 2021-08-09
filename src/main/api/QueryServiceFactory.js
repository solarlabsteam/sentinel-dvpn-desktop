import { lcdHost, lcdPort } from '@/main/api/urls'

const grpc = require('@grpc/grpc-js')

class QueryServiceFactory {
  static create (Client) {
    return new Client(`${lcdHost}:${lcdPort}`, grpc.credentials.createInsecure())
  }
}

export default QueryServiceFactory
