var externalMixin = {
  methods: {
    openFacebookPage () {
      var fb = window.open('http://www.facebook.com', '_blank')
      fb.focus()
    },
    emailUs () {
      window.location.href = 'mailto:customer_support@mybuzzmoney.com?'
    }
  }
}

export default externalMixin
