import BaseError from '@/main/common/BaseError'

class AxiosError extends BaseError {
  static create (e) {
    let message
    if (e.response && e.response.data) {
      message = e.response.data.error.message
    } else {
      message = e.message
    }

    return new AxiosError({ message })
  }
}

export default AxiosError
