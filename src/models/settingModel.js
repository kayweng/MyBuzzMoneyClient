// import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import basedModel from './baseModel'

class SettingModel extends basedModel {
  constructor () {
    super()

    this.username = null
    this.preferences = {
      localCurrency: null,
      location: {
        country: null,
        state: null,
        city: null
      },
      notifications: {
        expiredIn3Days: false,
        exchangeAccepted: false,
        exchangeDenied: false
      }
    }
    this.linkedAccounts = null  // [{ bankCode: Mbb, swiftCode: MBBDKL, accountNumber: 00000 }
  }
}

export default SettingModel
