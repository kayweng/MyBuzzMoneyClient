<template>
  <landing-layout pageClass="login-page" >
    <el-main>
      <form method="#" action="#">
        <fade-render-transition :duration="200">
          <card :title="'Create Account'">
            <div class="center" v-show="false">
              <el-collapse accordion>
                <el-collapse-item title="Are you on with facebook ?" name="1">
                  <div class="empty-row"></div>
                  <button type="button" class="btn btn-facebook btn-wd" @click="signupWithFacebook">
                    <i class="fa fa-facebook"></i>
                    Signup with facebook
                  </button>
                  <div class="default-row">
                    <el-button @click="openFacebookPrivacyURL" type="text">Read Facebook Privacy Policy</el-button>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <!-- User Info -->
            <div class="row">
              <!-- first name -->
              <div class="col-md-6 col-12">
                <fg-input type="text"
                          name="first name"
                          label="First Name"
                          placeholder= "Alan"
                          @blur="$v.model.firstName.$touch()"
                          :class="{'input-error': $v.model.firstName.$error }"
                          :maxLength="20"
                          v-model="model.firstName">
                </fg-input>
                <div class="error-message-36">
                  <span v-if="!$v.model.firstName.required">The first name field is required</span>
                  <span v-if="$v.model.firstName.required && !$v.model.firstName.alphaSpace" >The first name field must be only alphabet characters</span>
                </div>
              </div>
              <!-- last name -->
              <div class="col-md-6 col-12">
                <fg-input type="text"
                          name="last name"
                          label="Last Name"
                          placeholder= "Bob"
                          @blur="$v.model.lastName.$touch()"
                          :class="{'input-error': $v.model.lastName.$error }"
                          :maxLength="30"
                          v-model="model.lastName">
                </fg-input>
                <div class="error-message-36">
                  <span v-if="!$v.model.lastName.required">The last name field is required</span>
                  <span v-if="$v.model.lastName.required && !$v.model.lastName.alphaSpace">The last name field must be only alphabet characters</span>
                </div>
              </div>
            </div> 
            <div class="row">
              <!-- email -->
              <div class="col-md-6 col-12">
                <fg-input type="email"
                          name="email"
                          label="Email address"
                          placeholder= "abc@email.com"
                          @blur="$v.model.email.$touch()"
                          :class="{'input-error': $v.model.email.$error }"
                          :maxLength="40"
                          v-model="model.email">
                </fg-input>
                <div class="error-message-36">
                  <span v-if="!$v.model.email.required">The email field is required</span>
                  <span v-if="$v.model.email.required && !$v.model.email.email">Invalid email format</span>
                </div>
              </div>
              <!-- mobile -->
              <div class="col-md-6 col-12">
                <fg-input type="mobile"
                          name="mobile"
                          label="Mobile Number"
                          placeholder= "+6012345678"
                          @blur="$v.model.mobile.$touch()"
                          :class="{'input-error': $v.model.mobile.$error }"
                          :maxLength="14"
                          hintClasses="pointer fa fa-mobile green-sea"
                          @hint="showMobileHint"
                          v-model="model.mobile">
                </fg-input>  
                <div class="error-message-36">
                  <span v-if="!$v.model.mobile.numericPlus">Invalid mobile format.Please start with + and country code</span>
                </div>  
              </div>
            </div>
            <div class="row">
              <!-- birthdate -->
              <div class="col-md-6 col-12">
                <fg-input label="Birth Date" 
                          name="birthdate"
                          @blur="$v.model.birthdate.$touch()"
                          :class="{'input-error': $v.model.birthdate.$error }"
                          v-model="model.birthdate">
                  <el-date-picker v-model="calendarDate"
                                  format="dd-MMM-yyyy"
                                  type="date"
                                  :class="{'input-error': $v.model.birthdate.$error }"
                                  placeholder="Date of Birth"></el-date-picker>
                </fg-input>
                <div class="error-message">
                  <span v-if="!$v.model.birthdate.required">The birth date field is required</span>
                  <span v-if="$v.model.birthdate.required && !$v.model.birthdate.between">You must be age of 18 or order to sign up</span>
                </div>
              </div>
              <div class="empty-row">
              </div>
            </div> 
            <hr/>
            <div class="row">
              <!-- Password -->
              <div class="col-md-6 col-12">
                <fg-input label="Password"
                          type="password"
                          name="password"
                          @blur="$v.model.password.$touch()"
                          :class="{'input-error': $v.model.password.$error }"
                          :maxLength="20"
                          v-model="model.password">
                </fg-input>
                <div class="error-message-36">
                  <span v-if="!$v.model.password.required">The password field is required</span>
                  <span v-if="$v.model.password.required && !$v.model.password.passwordPolicy">Passwords must be at least 8 characters and numbers in length</span>
                </div>
              </div>
              <!-- confirm Password -->
              <div class="col-md-6 col-12">
                <fg-input label="Confirm Password"
                          type="password"
                          name="confirm password"
                          @blur="$v.model.confirmPassword.$touch()"
                          :class="{'input-error': $v.model.confirmPassword.$error }"
                          :maxLength="20"
                          v-model="model.confirmPassword">
                </fg-input>
                <div class="error-message-36">
                  <span v-if="!$v.model.confirmPassword.required">The confirm password field is required</span>
                  <span v-if="$v.model.confirmPassword.required && !$v.model.confirmPassword.sameAs">The confirm password must be same as password</span>
                </div>
              </div>
            </div>
            <br/>
            <!-- Agreement -->
            <div class="row">
              <check-box ref="chkTerms" v-model="model.agreement">
                <span class="terms" v-html="terms"></span>
              </check-box>
            </div>
            <br/>
            <!-- Recaptcha -->
            <div class="row center-item">
                <div class="g-recaptcha" ref="recaptcha" :data-sitekey="rcapt_sig_key"></div>
                <input type="hidden" v-model="model.reCaptcha" />
            </div>
            <br/>
            <!-- Buttons -->
            <div class="row">
              <div class="text-center col-12">
                <div class="button-inline">
                  <button type="reset" @click="resetForm" class="btn btn-round btn-reset btn-wd">Reset</button>
                  <button type="submit" @click.prevent="submitForm" class="btn btn-round btn-submit btn-wd">Submit</button>
                </div>
              </div>
            </div>
          </card>
        </fade-render-transition>
      </form>
    </el-main>
  </landing-layout>
</template>

<style scoped>
  .card {
    padding: 4px;
  }
  
  .fb-signin-button {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
  }
</style>

<style lang="scss">
  .el-collapse-item {
    .el-collapse-item__header {
      font-size: 12px;
      height: 24px;
      line-height: 24px;
    }
    .el-collapse-item__arrow {
      line-height: 24px;
    }
  }
</style>

<script>
  import { mapActions } from 'vuex'
  import { FadeRenderTransition, Checkbox } from 'src/components/index'
  import SignUpModel from 'src/models/signUpModel'
  import swal from 'sweetalert2'
  import LandingLayout from 'src/pages/Auth/AuthLayout.vue'
  import facebook from 'src/js/facebook.js'
  import { date } from 'src/js/date.js'

  export default {
    components: {
      FadeRenderTransition,
      LandingLayout,
      checkBox: Checkbox
    },
    data () {
      return {
        terms: 'By proceeding, I agree that you can collect, use and disclose the information provided by me in accordance with your <a href="https://termsfeed.com/terms-conditions/d60b2f84cfb9b72c889d50dacdfdc9dd" target="_blank">My Buzz Money Services Agreement</a> which I have read and understand.',
        calendarDate: null,
        model: new SignUpModel(),
        fbConnected: false,
        rcapt_sig_key: '6Lfj31wUAAAAAIxBl40oHzGXuk8aCZ-IiZnC1GCy',
        rcapt_id: 0
      }
    },
    validations: {
      model: SignUpModel.validationScheme()
    },
    methods: {
      ...mapActions([
        'getUserProfileInfo'
      ]),
      populateFacebookUserInfo () {
        facebook.retrieveMeFacebookInfo().then(response => {
          console.log(response)

          if (!response.email) {
            this.showNotifyMessage('Invalid email address', 5000, 'danger')
            return
          }

          this.model.email = response.email

          if (response.first_name) {
            this.model.firstName = response.first_name
          }

          if (response.last_name) {
            this.model.lastName = response.last_name
          }

          if (response.birthday) {
            this.calendarDate = new Date(response.birthday)
            this.model.birthdate = new Date(response.birthday)
          }

          if (response.mobile) {
            this.model.mobile = response.mobile
          }

          if (
            (this.$v.model.email.$invalid || this.$v.model.email.$error) ||
            (this.$v.model.firstName.$invalid || this.$v.model.firstName.$error) ||
            (this.$v.model.lastName.$invalid || this.$v.model.lastName.$error) ||
            (this.$v.model.birthdate.$invalid || this.$v.model.birthdate.$error) ||
            (this.$v.model.mobile.$invalid || this.$v.model.mobile.$error)
            ) {
            this.showNotifyMessage('Signup with facebook failed. The signup process requires all mandatory info, please create account with complete info.', 10000, 'danger')
            this.$v.model.$touch()
            return
          }

          // check user exists
          this.getUserProfileInfo(this.model.email).then(response => {
            console.log(response)
          }, error => {
            console.log(error)
          })
        })
      },
      signupWithFacebook () {
        if (!this.fbConnected) {
          facebook.loginFacebook().then(response => {
            if (response.status === 'connected') {
              this.populateFacebookUserInfo()
            }
          })
        } else {
          this.populateFacebookUserInfo()
        }
      },
      showMobileHint () {
        this.showNotifyMessage('Please add country code to a mobile number. Example: +609871234', 5000, 'primary', 'fa fa-mobile')
      },
      openFacebookPrivacyURL () {
        var fbPrivacyUrl = window.open('https://termsfeed.com/terms-conditions/42373f8cfb1d0bcfa540b7776965117b', '_blank')
        fbPrivacyUrl.focus()
      },
      resetForm () {
        swal({
          type: 'warning',
          title: 'Reset Sign Up Form',
          html: '<small>Are you confirm to reset all field data in sign up form ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.model.resetState()
            this.$v.model.$reset()
          }
        })
      },

      submitForm (event) {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        if (!this.model.agreement) {
          this.swalError('Please agree to My Buzz Money services agreement by tick the check box')
          return
        }
        
        if (location.hostname !== 'localhost') {
          try {
            var captcha = grecaptcha.getResponse()
            if (captcha.length === 0) {
              throw new Error('Please complete recaptcha upon submit form data')
            }
          } catch (error) {
            this.swalError(error.message)
            return
          }
        }

        this.$store.dispatch('signUp', {
          username: this.model.email,
          password: this.model.password,
          attributes: {
            email: this.model.email,
            name: this.model.name(),
            phone_number: this.model.mobile === null ? null : this.model.mobile,
            birthdate: date.toISODateString(this.model.birthdate)
          }
        }).then(() => {
          swal({
            type: 'success',
            title: 'Successfully Signed Up',
            html: '<small>You have been succesfully created an account.<br/>Before you can login, please verify your account with the verification link sent to your email address.</small>',
            showCancelButton: false,
            confirmButtonClass: 'btn btn-primary btn-round btn-wd',
            confirmButtonText: '<i class="fa fa-home"></i> Home',
            buttonsStyling: false
          }).then(function () {
            location.href = '/#/'
          })
        }).catch((error) => {
          this.swalError(error.message)
        })
      }
    },
    watch: {
      calendarDate: function (val) {
        this.model.birthdate = val
      }
    },
    mounted () {
      if (window.grecaptcha) {
        this.rcapt_id = grecaptcha.render(this.$refs['recaptcha'], { sitekey: this.rcapt_sig_key })
      }

      facebook.getLoginStatus().then(response => {
        console.log(response)
        if (response === 'connected') {
          this.fbConnected = true
        }
      }, error => {
        console.log(error)
      })
    },
    beforeMount () {
      this.model.resetState()
    }
  }
</script>