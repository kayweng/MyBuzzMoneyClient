import UserModel from 'src/models/userModel'
import { readImageUrlData } from 'src/js/image'

const mutations = {
  setUserProfileState (state, data) {
    state.profile = new UserModel(data)
    localStorage.setItem('user', JSON.stringify(state.profile))
  },
  
  async setUserProfileImageState (state, data) {
    state.profile.imageData = null
    
    if (state.profile !== null &&
      data !== '-' &&
      data !== 'static/img/faces/user.jpg') {
      await readImageUrlData(data).then(response => {
        state.profile.imageData = response
        localStorage.setItem('user', JSON.stringify(state.profile))
      })
    } else {
      localStorage.setItem('user', JSON.stringify(state.profile))
    }
  }
}

export default mutations
