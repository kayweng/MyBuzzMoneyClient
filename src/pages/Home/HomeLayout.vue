<template>
  <div class="wrapper">
    <transition-group name="fade" mode="out-in">
      <app-header :key="1"></app-header>
      <app-features :key="2"></app-features>
      <app-Works :key="3"></app-Works>
      <app-get-started :key="4"></app-get-started>
      <app-site-map :key="5"></app-site-map>
      <app-footer :key="6"></app-footer>
    </transition-group>
  </div>
</template>

<script>
  import Header from './Components/Header.vue'
  import Features from './Components/Features.vue'
  import HowItWorks from './Components/HowItWorks.vue'
  import GetStarted from './Components/GetStarted.vue'
  import SiteMap from './Components/SiteMap.vue'
  import Footer from './Components/Footer.vue'
  
  export default {
    components: {
      'appHeader': Header,
      'appFeatures': Features,
      'appWorks': HowItWorks,
      'appGetStarted': GetStarted,
      'appSiteMap': SiteMap,
      'appFooter': Footer
    }
  }
</script>
