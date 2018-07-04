// import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import basedModel from './baseModel'

class SettingModel extends basedModel {
  constructor (data) {
    super()
    
    this.resetState()
   
    if (data !== null && data !== undefined) {
      var setting = data
      var preferences = null
      var location = null
      var notifications = null

      if (typeof setting.preferences === 'object') {
        preferences = setting.preferences
      } else {
        preferences = JSON.parse(setting.preferences)
      }

      if (typeof preferences.location === 'object') {
        location = preferences.location
      } else {
        location = JSON.parse(preferences.location)
      }

      if (typeof preferences.location === 'object') {
        notifications = preferences.notifications
      } else {
        notifications = JSON.parse(preferences.notifications)
      }

      var linkedAccounts = setting.linkedAccounts

      this.preferences = {
        localCurrency: preferences.localCurrency === '-' ? null : preferences.localCurrency,
        location: {
          country: location.country === '-' ? null : location.country,
          state: location.state === '-' ? null : location.state,
          city: location.city === '-' ? null : location.city
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

  resetState () {
    this.preferences = {
      localCurrency: null,
      location: {
        country: '',
        state: '',
        city: ''
      },
      notifications: {
        expired: true,
        accepted: false,
        denied: false
      }
    }
    this.linkedAccounts = []
  }
}

export default SettingModel
