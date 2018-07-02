<template>
  <div class="user">
    <div class="center" v-if="this.$loading.anyLoading">
      <v-loading loader='loadUserMenu'>
        <template slot='spinner'>
          <loading-spinner height='30px' width='30px' :spinColor="'white'" />
        </template>
      </v-loading>
    </div>
    <div v-else>
      <div class="photo" >
        <img :src="value.imageData === null ? value.imageUrl : value.imageData" alt="profile"/>
      </div>
      <div class="info">
        <a data-toggle="collapse" style="cursor:pointer;" :aria-expanded="!isClosed" @click.stop="toggleMenu">
          <span class="title" v-if="value.lastName">
            {{ value.lastName }}
            <b class="caret"></b>
          </span>
          <span class="subtitle" v-if="value.userTypeDescription">
            <small>{{ value.userTypeDescription }}</small>
          </span>
        </a>
        <div class="clearfix"></div>
        <div>
          <el-collapse-transition>
            <ul class="nav" v-show="!isClosed">
              <slot></slot>
            </ul>
          </el-collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .collapsed {
    transition: opacity 1s;
  }

  .user .photo {
    height: 60px;
    width: 60px;
    margin-left: 11px !important;
    border: 3px solid #922B21;
  }

  .subtitle {
    padding-top: 4px;
    font-size: medium;
    color: silver;
  }
  
  .nav {
    padding-top: 10px;
  }
</style>

<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'
  import { UserEventBus } from 'src/eventBus/userEventBus.js'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition,
      loadingSpinner
    },
    props: ['value'],
    data () {
      return {
        isClosed: true
      }
    },
    methods: {
      toggleMenu () {
        this.isClosed = !this.isClosed
      }
    },
    watch: {
      'value.lastName' (value) {
        if (value) {
          this.$loading.endLoading('loadUserMenu')
        }
      }
    },
    mounted () {
      this.$loading.startLoading('loadUserMenu')
    },
    created () {
      UserEventBus.$on('setUserImage', (data) => {
        if (data) {
          this.value.imageData = data
        }
      })
    },
    beforeDestroy () {
      UserEventBus.$off('setUserImage')
    }
  }
</script>
