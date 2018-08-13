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
  saveUserPreferences ({commit}, payload) {
    return new Promise((resolve, reject) => {
      aws.post('/setting/preferences/' + payload.email, payload).then(response => {
        commit('setUserSettingState', response.data)
        resolve(response.data)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },
  uploadVerificationDocument ({commit}, payload) {
    var config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      reader.readAsDataURL(payload.image)

      reader.onload = (upload) => {
        aws.post('/setting/verification/' + payload.type + '/' + payload.username, { data: upload.target.result }, config).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      }
    })
  }
}

export default actions
