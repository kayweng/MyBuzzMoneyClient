<template>
  <el-tabs v-model="activeTab" @tab-click="handleClick">
    <el-tab-pane name="Preferences">
      <span slot="label"><i class="fa fa-cog"></i> Preferences</span>
      <preferences v-model="model.preferences"></preferences>
    </el-tab-pane>
    <el-tab-pane name="Verification">
      <span slot="label"><i class="fa fa-certificate"></i> Verifications</span>
      <verifications v-model="model.verifications"></verifications>
    </el-tab-pane>
  </el-tabs>
</template>

<script scoped>
  import SettingModel from 'src/models/settingModel.js'
  import Preferences from 'src/pages/Setting/Components/Preferences.vue'
  import Verifications from 'src/pages/Setting/Components/Verifications.vue'

  export default {
    components: {
      Preferences,
      Verifications
    },
    data () {
      return {
        model: new SettingModel(),
        activeTab: 'Preferences'
      }
    },
    methods: {
      handleClick (tab, event) {
       
      }
    },
    watch: {
      '$store.state.setting.userSetting' (val) {
        if (val) {
          this.model = val
        }

        this.$loading.endLoading('loading')
      }
    },
    mounted () {
      if (this.$store.state.setting.userSetting.preferences === undefined) {
        this.$loading.startLoading('loading')
      }
      
      if (this.model.preferences.localCurrency === null) {
        this.model = this.$store.state.setting.userSetting
      }
    }
  }
</script>