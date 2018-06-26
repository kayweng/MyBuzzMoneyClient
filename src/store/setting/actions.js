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
          var settingJSON = JSON.parse(response.data)
          
          commit('setUserSettingState', settingJSON)
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
