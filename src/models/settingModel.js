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
        expired: false,
        accepted: false,
        denied: false
      }
    }
    this.linkedAccounts = [] 
    // [
    //  { type: Bank, bankAccount: null, swiftCode: MBBKL },
    //  { type: Paypal, account: null, swiftCode: MBBKL },
    // ]
  }
}

export default SettingModel
