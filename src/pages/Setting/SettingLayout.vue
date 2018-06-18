<template>
  <el-tabs v-model="activeTab" @tab-click="handleClick">
    <el-tab-pane name="Preferences">
      <span slot="label"><i class="fa fa-cog"></i> Preferences</span>
      <preferences></preferences>
    </el-tab-pane>
    <el-tab-pane name="Accounts">
      <span slot="label"><i class="fa fa-cubes"></i> Accounts</span>
    </el-tab-pane>
  </el-tabs>
</template>

<script scoped>
  import SettingModel from 'src/models/settingModel.js'
  import Preferences from 'src/pages/Setting/Components/Preferences.vue'

  export default {
    components: {
      Preferences
    },
    data() {
      return {
        model: new SettingModel(),
        activeTab: 'Preferences'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>