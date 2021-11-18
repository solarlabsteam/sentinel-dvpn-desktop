class BaseError extends Error {
  constructor (error) {
    super(error.message)
    this.message = error.message
  }

  static create (e) {
    return new BaseError(e)
  }
}

export default BaseError
