<template>
  <transition-group name="slideleft" 
                    tag="div"
                    mode="out-in"
                    appear>
    <slot></slot>
  </transition-group>
</template>

<style scoped>
  .slideleft-enter, .slideleft-to{
    opacity: 0;
  }

  .slideleft-enter-to, .slideleft-leave{
    opacity: 1;
  }

  .slideleft-enter-active {
    animation: slidex-in 1s ease;
  }
  
  .slideleft-leave-active {
    animation: slidex-out 1s ease;
  }

  @keyframes slidex-in {
    100%{
      transform: translateX(0px);
    }
    0%{
      transform: translateX(120px);
    }
  }

  @keyframes slidex-out {
    0%{
      transform: translateX(120px);
    }
    100%{
      transform: translateX(0px);
    }
}
</style>

<script>
  export default {
    name: 'slidex-render-transition',
    props: {
      slideDirection: {
        type: String,
        default: 'slideleft'
      }
    }
  }
</script>
