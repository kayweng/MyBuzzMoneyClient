import swal from 'sweetalert2'
import currencyCodes from 'src/data/currency_data.js'
import countryStates from 'src/data/states_data.js'
import stateCities from 'src/data/cities_data.js'

export default {
  computed: {
    deviceType () {
      var device = 'large-device'

      if (this.$mq.below('width', 420)) {
        device = 'mobile'
      } else if (this.$mq.below('width', 768)) {
        device = 'small-device'
      } else if (this.$mq.below('width', 1204)) {
        device = 'medium-device'
      }

      return device
    },
    currencies () {
      return currencyCodes
    },
    countries () {
      const countries = [
        {value: 'MY', label: 'Malaysia'},
        {value: 'SG', label: 'Singapore'}
      ]

      return countries
    },
    genders () {
      const genders = [
        {value: 'M', label: 'Male'},
        {value: 'F', label: 'Female'}
      ]

      return genders
    },
    loggedMeIn () {
      const val = localStorage.getItem('keepMeSignedIn')
      return val === undefined ? false : (val === 'true')
    },
    profileImageUrl () {
      return `https://s3-ap-southeast-1.amazonaws.com/userimage.mybuzzmoney.com/${this.cognitoUserEmail}.jpg`
    }
  },
  methods: {
    toInteger: function (number) {
      return Math.round(Number(number))
    },
    
    swalInfo (title, message) {
      swal({
        type: 'info',
        title: title,
        html: `<small>${message}</small>`,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info btn-round btn-wd'
      })
    },

    swalError (message) {
      swal({
        type: 'error',
        title: 'Oops...',
        html: `<small>${message}</small>`,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-warning btn-round btn-wd'
      })
    },

    swalSuccess (title, message) {
      swal({
        type: 'success',
        title: title,
        html: `<small>${message}</small>`,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info btn-round btn-wd'
      })
    },

    swalConfirmation (type, title, message) {
      return new Promise((resolve, reject) => {
        swal({
          type: type,
          title: title,
          html: `<span>${message}</span>`,
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-primary btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          resolve(result.value)
        })
      })
    },

    showNotifyMessage (message, duration, type, icon, hAlign, vAlign) {
      this.$notify({
        component: {
          template: `<span>${message}</span>`
        },
        timeout: duration || 5000,
        icon: icon || 'nc-icon nc-bulb-63',
        horizontalAlign: hAlign || 'right', // right | center | left
        verticalAlign: vAlign || 'top', // top | bottom
        type: type || 'primary' // info | warning | danger | success | primary
      })
    },

    logoutUser (sessionExpired) {
      if (!sessionExpired) {
        swal({
          type: 'warning',
          title: 'Logout',
          html: '<small>Are you sure want to logout ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.$store.dispatch('signOut')
            this.$router.push(sessionExpired ? '/login?s=true' : 'Login')
          }
        })
      } else {
        this.$store.dispatch('signOut')
        this.$router.push(sessionExpired ? '/login?s=true' : 'Login')
      }
    },
    getStates (countryCode) {
      return countryStates[countryCode]
    },
    getCities (countryCode, statesCode) {
      return (countryCode && statesCode) ? stateCities[countryCode][statesCode] : []
    }
  }
}
