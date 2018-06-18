// import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import basedModel from './baseModel'

class SettingModel extends basedModel {
  constructor () {
    super()

    this.username = null
    this.preferences = null     // { location: { country: null, city:null, suburb: null }, localCurrency: null, notifications: { expiredIn3Days: false, receiveExchange: false, deniedExchange: false } }
    this.linkedAccounts = null  // [{ bankCode: Mbb, swiftCode: MBBDKL, accountNumber: 00000 }
  }
}

export default SettingModel
