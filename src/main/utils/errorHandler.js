import AxiosError from '@/main/common/AxiosError'
import BaseError from '@/main/common/BaseError'

export function generateError (e) {
  if (typeof e === 'string') {
    return BaseError.create({ message: e })
  }

  if (e.isAxiosError) {
    return AxiosError.create(e)
  } else {
    return BaseError.create(e)
  }
}
