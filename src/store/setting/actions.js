import aws from 'src/axios/axios_db'

const actions = {
  getUserSetting ({commit}, payload) {
    return new Promise((resolve, reject) => {
      var json = localStorage.getItem('setting')

      if (json !== null) {
        var settingJSON = JSON.parse(json)
 
        commit('setUserSettingState', settingJSON)
        resolve(true)
      } else if (payload === null) {
        reject('Invalid Payload')
      } else {
        aws.get('/setting/' + payload).then(response => {
          // response.data => JSON object
          commit('setUserSettingState', response.data)
          resolve(true)
        }).catch(error => {
          console.log(error)
          resolve(false)
        })
      }
    })
  },
  saveUserPreferences({commit}, payload) {
    return new Promise((resolve, reject) => {
      aws.post('/setting/preferences/' + payload.email, payload).then(response => {
        commit('setUserSettingState', response.data)
        resolve(response.data)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}

export default actions
