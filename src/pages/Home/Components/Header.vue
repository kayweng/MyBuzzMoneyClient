<template>
  <el-container direction="vertical" class="wrapper wrapper-full-page ctn">
    <!-- navigation landing bar -->
    <landing-nav :title="'My Buzz Money'"></landing-nav>
    <!-- content -->
    <el-container direction="vertical">
      <el-main class="ctn-body">
        <el-row class="bottom">
          <h2 class="company-slogan">EASY EXCHANGE YOUR CURRENCY</h2>
        </el-row>
      </el-main>
    </el-container>
    <!-- footer -->
    <el-footer>
      <el-row class="no-padding">
        <!-- message -->
        <el-col :sm="16" :xs="24">
          <small class="italic note dim-black" v-html="'Congratulations, You have found a great way to exchange your currency. <br/> - My Buzz Money Team'"></small>
        </el-col>
        <!-- socials -->
        <el-col :sm="8" :xs="24" v-if="deviceType !== 'mobile'">
          <div class="right">
            <el-tooltip class="item" effect="dark" content="Send Email To Us" placement="top-start">
              <button class="btn btn-email" @click="emailUs">
                <i class="fa fa-envelope-o"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Visit Our Facebook" placement="top-start">
              <button class="btn btn-facebook" title="My Buzz Money Official Facebook Page" @click="openFacebookPage">
                <i class="fa fa-facebook"></i>
              </button>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<style scoped>
  footer {
    height: 100px!important;
  }

  .ctn{
    min-height: 100vh;
    background-image: url("/static/images/background/bg_home.jpg");
    background-size: auto;                      
    background-repeat: no-repeat;
    background-position: center center;
    background-color: lightgrey;
  }

  .ctn-body {
    position: relative;
  }
</style>

<script>
  import LandingNav from 'src/components/LandingNav.vue'
  import externalMixin from 'src/mixins/externalMixin'

  export default {
    components: {
      landingNav: LandingNav
    },
    mixins: [externalMixin]
  }
</script>
