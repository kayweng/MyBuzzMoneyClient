import { required, numeric, maxLength } from 'vuelidate/lib/validators'

const paypalMeLink = {
  required,
  paypalLink: val => {
    if(val === 'https://www.paypal.me/') {
      return false
    }

    return val.startsWith('https://www.paypal.me/')
  }
}

const bankAccount = {
  required,
  numeric
}

const mandatory = {
  required
}

export {
  paypalMeLink,
  bankAccount,
  mandatory
}