import AxiosError from '@/main/common/AxiosError'
import BaseError from '@/main/common/BaseError'
import RpcError from '@/main/common/RpcError'

export function generateError (e) {
  if (typeof e === 'string') {
    return BaseError.create({ message: e })
  }

  if (e.isAxiosError) {
    return AxiosError.create(e)
  } if (e.isRpcError) {
    return RpcError.create(e)
  } else {
    return BaseError.create(e)
  }
}
