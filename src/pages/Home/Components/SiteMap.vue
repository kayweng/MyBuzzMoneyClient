<template>
  <el-container direction="vertical" class="container-fluid ctn">
    <el-row>
      <el-col :sm="12" :xs="24">
        <el-row>
          <h4>Company</h4>
        </el-row>
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" v-for="item in companyItems" :key="item.title">
            <button class="btn btn-link">{{item.title}}</button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :sm="12" :xs="24">
        <el-row>
          <h4>Wiki</h4>
        </el-row>
        <el-row>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" v-for="item in wikiItems" :key="item.title">
            <button class="btn btn-link">{{item.title}}</button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="empty-row"></el-row>
    <el-row>
      <label class="right social" v-if="deviceType === 'mobile'">
        <el-tooltip class="item" effect="dark" content="Send Email To Us" placement="top-start">
          <button class="btn btn-social btn-round btn-outline btn-email white" @click="emailUs">
            <i class="fa fa-envelope-o"></i>
          </button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Visit Our Facebook" placement="top-start">
          <button class="btn btn-social btn-round btn-outline btn-facebook white" title="My Buzz Money Official Facebook Page" @click="openFacebookPage">
            <i class="fa fa-facebook"></i>
          </button>
        </el-tooltip>
      </label>
    </el-row>
  </el-container>
</template>

<style scoped>
  .ctn{
    min-height: 100px;
  }
</style>

<script>
  import externalMixin from 'src/mixins/externalMixin'

  export default {
    mixins: [externalMixin],
    data () {
      return {
        companyItems: [
          { title: 'About Us', link: '' },
          { title: 'Contact Us', link: '' },
          { title: 'Terms & Conditions', link: '' }
        ],
        wikiItems: [
          { title: 'Blog', link: '' },
          { title: 'FAQ', link: '' },
          { title: 'Currency Rates', link: '' }
        ]
      }
    }
  }
</script>
