<template>
  <el-container direction="vertical" class="container-fluid ctn-header">
    <!-- navigation landing bar -->
    <el-header>
      <landing-nav :title="'My Buzz Money'"></landing-nav>
    </el-header>
    <!-- content -->
    <el-container direction="vertical">
      <el-main class="ctn-body">
        <el-row class="bottom">
          <h1 class="company-slogan">EASY EXCHANGE YOUR CURRENCY</h1>
        </el-row>
      </el-main>
    </el-container>
    <!-- footer -->
    <el-footer class="default-row">
      <el-row class="no-padding">
        <el-col :sm="12" :xs="24">
          <small class="italic note dim-black" v-html="'Congratulations, You found a better way of currency exchange. <br/>--- My Buzz Money Team'"></small>
        </el-col>
        <el-col :sm="12" :xs="24" class="hidden-xs-only">
          <div class="right">
            <el-tooltip class="item" effect="dark" content="Send Email To Us" placement="top-start">
              <button class="btn btn-round btn-email" @click="emailUs">
                <i class="fa fa-envelope-o"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Visit Our Facebook" placement="top-start">
              <button class="btn btn-social btn-round btn-outline btn-facebook white" title="My Buzz Money Official Facebook Page" @click="openFacebookPage">
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

  .ctn-header{
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

  /* Portrait phones and smaller */
  @media (max-width: 480px) {
    .container-fluid{
      min-height: 50vh;
    }
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
