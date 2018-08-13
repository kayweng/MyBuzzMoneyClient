import * as validator from 'src/validations/settingValidator'
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

      preferences = (typeof setting.preferences === 'object' ? setting.preferences : JSON.parse(setting.preferences))

      if (preferences === null) {
        return
      }

      location = (typeof preferences.location === 'object' ? preferences.location : JSON.parse(preferences.location))
      notifications = (typeof preferences.notifications === 'object' ? preferences.notifications : JSON.parse(preferences.notifications))
  
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
      
      this.verifications = (typeof setting.verifications === 'object' ? setting.verifications : JSON.parse(setting.verifications))
    }
  }

  static validationScheme () {
    return {
      localCurrency: validator.mandatory,
      location: {
        country: validator.mandatory,
        state: validator.mandatory,
        city: validator.mandatory
      }
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
        accepted: true,
        denied: true
      }
    }
    
    this.verifications = {
      emailVerified: false,
      addressVerified: false,
      mobileVerified: false,
      identityVerified: false
    }
  }
}

export default SettingModel
