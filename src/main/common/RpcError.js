import BaseError from '@/main/common/BaseError'

export default class RpcError extends BaseError {
  constructor (error) {
    super(error.message)
    this.message = error.description || error.message
  }

  static create (e) {
    return new RpcError(e)
  }
}
