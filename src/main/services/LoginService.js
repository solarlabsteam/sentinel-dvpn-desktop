import * as bip39 from 'bip39'
import { DVPN_KEY_NAME } from '@/shared/constants'
import AccountService from '@/main/services/AccountService'
import KeyApi from '@/main/api/rest/KeyApi'

export class LoginService {
  constructor () {
    this.accountService = new AccountService()
    this.restKeyApi = new KeyApi()
  }

  async login () {
    try {
      const result = await this.accountService.queryKeyByName(DVPN_KEY_NAME)
      return result
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error.code === 1004) {
        return null
      }

      throw e
    }
  }

  async addAccount (mnemonic) {
    const result = await this.queryNewKey({
      mnemonic
    })
    return result
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
    return data.result
  }
}
