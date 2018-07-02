import SettingModel from 'src/models/settingModel'

const mutations = {
  setUserSettingState (state, data) {
    state.userSetting = new SettingModel(data)
    localStorage.setItem('setting', JSON.stringify(state.userSetting))
  }
}

export default mutations
