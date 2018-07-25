<template>
  <div class="landing-div">
    <i :class="iconClass" />
    <router-link to="/" tag="label" :class="titleClass">{{ title }}</router-link>
    <div class="button-inline" v-if="deviceType !== 'mobile'">
      <router-link to="/signup" tag="button" :class="signUpButtonClass">Sign Up</router-link>
      <router-link to="/login" tag="button" :class="signInButtonClass">Sign In</router-link>
    </div>
    <div class="button-inline" v-else>
      <router-link to="/signup" tag="button" class="btn btn-auth-circle">
        <span>S</span>
      </router-link>
      <router-link to="/login" tag="button" class="btn btn-auth-circle">
        <span>L</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .landing-div{
    min-height: 60px;
    width: 100%;
    margin-top: 16px;
    z-index: 100;
    position: relative;
  }

  .button-inline {
    float: right;
  }
</style>

<script>
  export default {
    name: 'landing-nav',
    props: {
      title: String,
      iconClass: {
        type: String,
        default: 'company-logo fa fa-forumbee'
      },
      titleClass: {
        type: String,
        default: 'company-label'
      },
      signUpButtonClass: {
        type: String,
        default: 'btn btn-signup'
      },
      signInButtonClass: {
        type: String,
        default: 'btn btn-login'
      }
    }
  }
</script>
