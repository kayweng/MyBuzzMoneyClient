<template>
  <el-container direction="vertical" class="container-fluid">
    <landing-nav :title="'My Buzz Money'"></landing-nav>
    <el-container direction="vertical">
      <el-main class="container-body">
        <el-row class="container-body-row">
          <el-col>
            <h2>EASY EXCHANGE YOUR CURRENCY</h2>
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="default-row">
        <el-row class="no-padding">
          <el-col :md="12" :sm="12" :xs="24">
            <small class="italic">Congratulations, You found a better way of currency exchange.</small>
          </el-col>
          <el-col :md="12" :sm="12" :xs="24" class="hidden-xs-only">
            <div class="right">
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
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>

  .container-fluid{
    min-height: 100vh;
    width: 100%;
    background-image: url("/static/images/background/bg_home.jpg");
    background-size: cover;                      
    background-repeat: no-repeat;
    background-position: center center;
  }

  h2{
    background: -webkit-linear-gradient(to right, black, #808B96);
    background: linear-gradient(to right, black, #808B96);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .container-body {
    position: relative;
  }

  .container-body-row {
    position: absolute;
    bottom: 0%;
  }

  /* Large desktops and laptops */
  /* @media (min-width: 768px) {
    .container-fluid{
      min-height: 100vh;
    }
    .empty-row{
      height: 300px;
    }
  }*/
  
  /* Landscape tablets and medium desktops */
  /* @media (min-width: 992px) and (max-width: 1199px) {
    .empty-row{
      height: 250px;
    }
  } */

  /* Portrait tablets and small desktops */
  /* @media (min-width: 768px) and (max-width: 991px) {
    .empty-row{
      height: 200px;
    }
  } */

  /* Landscape phones and portrait tablets */
  /* @media (max-width: 768px) {
    .container-fluid{
      min-height: 90vh;
    }
  } */

  /* Portrait phones and smaller */
  @media (max-width: 480px) {
    .container-fluid{
      min-height: 50vh;
    }
  }
</style>

<script>
  import 'element-ui/lib/theme-chalk/display.css'
  import LandingNav from 'src/components/LandingNav.vue'
  import externalMixin from 'src/mixins/externalMixin'

  export default {
    components: {
      landingNav: LandingNav
    },
    mixins: [externalMixin]
  }
</script>
