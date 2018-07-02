import Vue from 'vue'

export const UserEventBus = new Vue({
  methods: {
    setUserProfileImage (data) {
      this.$emit('setUserImage', data)
    },
    setUserSetting (data) {
      this.$emit('setUserSetting', data)
    }
  }
})
