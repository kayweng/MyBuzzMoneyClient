// import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import basedModel from './baseModel'

class SettingModel extends basedModel {
  constructor (data) {
    super()
    
    var setting = data
    var preferences = JSON.parse(setting.preferences)
    var location =  preferences.location
    var notifications = preferences.notifications
    var linkedAccounts = JSON.parse(setting.linkedAccounts)

    this.preferences = {
      localCurrency: preferences.localCurrency,
      location: {
        country: location.country,
        state: location.state,
        city: location.city
      },
      notifications: {
        expired: notifications.expired,
        accepted: notifications.accepted,
        denied: notifications.denied
      }
    }
    this.linkedAccounts = linkedAccounts
  }
}

export default SettingModel
