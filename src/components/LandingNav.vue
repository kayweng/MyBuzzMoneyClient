<template>
    <div class="landing-div">
        <i :class="iconClass"></i>
        <router-link to="/" tag="label" :class="titleClass">{{ title }}</router-link>
        <div class="button-inline">
            <router-link to="/signup" tag="button" :class="signUpButtonClass">Sign Up</router-link>
            <router-link to="/login" tag="button" :class="signInButtonClass">Sign In</router-link>
        </div>
    </div>
</template>

<style scoped>
  
  .landing-div{
    min-height: 60px;
    width: 100%;
    padding: 10px 15px 10px 15px;
    z-index: 100;
    position: relative;
  }

  .button-inline {
    float: right;
  }

  label{
    padding-top: 8px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: medium;
    font-weight: 900;
  }
</style>

<script>
  export default {
    name: 'landing-nav',
    props: {
      title: String,
      iconClass: {
        type: String,
        default: 'fa fa-forumbee buzz-blue'
      },
      titleClass: {
        type: String,
        default: 'buzz-blue pointer'
      },
      signUpButtonClass: {
        type: String,
        default: 'btn btn-round btn-signup'
      },
      signInButtonClass: {
        type: String,
        default: 'btn btn-outline btn-round btn-login'
      }
    }
  }
</script>
