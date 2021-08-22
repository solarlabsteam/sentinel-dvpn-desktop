import { DVPN_KEY_NAME } from '@/main/common/constants'
import AccountService from '@/main/services/AccountService'
import * as bip39 from 'bip39'
import KeyApi from '@/main/api/rest/KeyApi'
import { setters } from '@/main/store/store'

export class LoginService {
  constructor () {
    this.accountService = new AccountService()
    this.restKeyApi = new KeyApi()
  }

  async login () {
    try {
      const result = await this.accountService.queryKeyByName(DVPN_KEY_NAME)
      return { isLogin: !!result }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error.code === 1004) {
        return { isLogin: false }
      }

      throw e
    }
  }

  async addAccount (mnemonic) {
    await this.queryNewKey({
      mnemonic
    })
    return { isLogin: true }
  }

  getRandomMnemonic (strength = 256) {
    return bip39.generateMnemonic(strength)
  }

  getRandomPassword () {
    return Math.random().toString(36).slice(-8)
  }

  async queryNewKey ({
    name = DVPN_KEY_NAME,
    mnemonic = this.getRandomMnemonic(),
    password = this.getRandomPassword(),
    index = 0,
    account = 0,
    coinType = 118
  } = {}) {
    const { data } = await this.restKeyApi.createKey({ name, mnemonic, password, index, account, coinType })
    this.setKeyToStore(data.result)
    return data.result
  }

  setKeyToStore (key) {
    setters.setKey(key)
  }
}
