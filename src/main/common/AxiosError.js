import BaseError from '@/main/common/BaseError'

class AxiosError extends BaseError {
  constructor (error) {
    super(error.message)
    this.status = error.response.status
  }

  static create (e) {
    let message
    if (e.response.data) {
      message = e.response.data.error.message
    } else {
      message = e.message
    }

    return new AxiosError({ message })
  }
}

export default AxiosError
