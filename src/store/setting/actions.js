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
          commit('setUserSettingState', response.data)
          resolve(true)
        }).catch(error => {
          console.log(error)
          resolve(false)
        })
      }
    })
  }
}

export default actions
