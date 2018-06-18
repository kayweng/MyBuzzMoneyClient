import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import basedModel from './baseModel'

class SettingModel extends basedModel {
  constructor () {
    super ()

    this.username = null
    this.location = null
    this.localCurrency = null   // code
    this.notifications = null   // { expiredIn3Days: false, receiveExchange: false, deniedExchange: false }
    
    this.linkedAccounts = null  // [{ bankCode: Mbb, swiftCode: MBBDKL, accountNumber: 00000 }
  }
}

export default SettingModel
