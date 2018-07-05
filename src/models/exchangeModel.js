import { required, numeric } from 'vuelidate/lib/validators'
import basedModel from './baseModel'

class ExchangeModel extends basedModel {
  constructor () {
    super()
    
    this.exchangeId = null        // 1
    this.baseCurrency = null      // { code: MYR, rate: 1 }
    this.requestCurrency = null   // { code: SGD, rate: 2.96 }
    this.amount = null            // 100.00
    this.geolocation = null       // { lat: 0 lang: 0 }
    this.address = null           // 242, Jalan Merdeka, Taman Gopeng Baru, 31600
    this.method = null            // 1-Meetup, 2-Bank Transfer, 3-Via Mybuzzmoney
    this.type = null              // 1-Request, 2-Offer
    this.expireDate = null        // created date + 14 days
  }

  static validationScheme () {
    return {
      baseCurrency: required,
      requestCurrency: required,
      amount: {
        required,
        numeric
      },
      geolocation: required,
      address: required,
      exchangeMethod: required
    }
  }

  resetState () {
    this.exchangeId = null
    this.baseCurrency = null
    this.requestCurrency = null
    this.amount = null
    this.geolocation = null
    this.address = null
    this.exchangeMethod = null
    this.type = null
    this.expireDate = null
  }
}

export { ExchangeModel }
