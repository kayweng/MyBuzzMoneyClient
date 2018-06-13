import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import * as validator from 'src/validations/userValidator'
import basedModel from './baseModel'

class PasswordModel extends basedModel {
  constructor () {
    super()
    this.code = null
    this.email = null
    this.oldPassword = null
    this.newPassword = null
    this.confirmPassword = null
    this.forceReset = false
  }

  static resetValidationScheme () {
    return {
      code: {
        required,
        numeric
      },
      email: validator.emailAddress,
      oldPassword: requiredIf(function () {
        return this.forceReset
      }),
      newPassword: validator.password,
      confirmPassword: validator.confirmNewPassword,
      forceReset: {
        required
      }
    }
  }

  static changePasswordValidationScheme () {
    return {
      oldPassword: validator.mandatory,
      newPassword: validator.password,
      confirmPassword: validator.confirmNewPassword
    }
  }

  resetState () {
    this.code = null
    this.email = null
    this.oldPassword = null
    this.newPassword = null
    this.confirmPassword = null
    this.forceReset = false
  }
}

export { PasswordModel }
