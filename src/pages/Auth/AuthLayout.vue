<template>
  <el-container direction="vertical" class="wrapper wrapper-full-page">
    <notifications></notifications>
    <landing-nav :title="'My Buzz Money'" 
      :iconClass="'fa fa-forumbee white'" :titleClass="'white pointer'"
      :signUpButtonClass="'btn btn-round btn-signup-auth'" :signInButtonClass="'btn btn-outline btn-round btn-login-auth'"></landing-nav>
    <el-container class="full-page" direction="vertical" :class="pageClass">
      <div class="content">
        <div class="container">
          <el-row class="row d-flex justify-content-center align-items-center">
            <div :class="contentClass">
              <slot></slot>
            </div>
          </el-row>
        </div>
      </div>
      <div class="full-page-background auth-background"></div>
    </el-container>
  </el-container>
</template>

<style scoped>
  .auth-background {
    background-image: url("/static/images/background/bg_auth.jpg")
  }
</style>

<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  import LandingNav from 'src/components/LandingNav.vue'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition,
      landingNav: LandingNav
    },
    props: {
      pageClass: {
        type: String,
        default: 'login-page'
      },
      contentClass: {
        type: String,
        default: 'col-lg-8 col-sm-10'
      },
      backgroundColor: {
        type: String,
        default: 'white'
      }
    },
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
