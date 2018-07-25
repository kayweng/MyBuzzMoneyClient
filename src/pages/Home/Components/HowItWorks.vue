<template>
  <el-container direction="vertical" class="container-fluid ctn">
    <el-header class="center">
      <h3 class="white">How It Works</h3>
    </el-header>
    <el-main v-if="deviceType !== 'mobile'">
      <!-- Left Steps : Offer Your Currency -->
      <el-col :sm="12" :xs="24" v-if="!isRight || imageSource === null">
        <label ref="leftSteps" class="step-label" @mouseover="isLeft = true" @mouseleave="isLeft = false">
          <vertical-steps @mouseover="leftStepOver" @mouseleave="imageSource = null"
                  :prefixChar="'l_'"
                  :title="'Offer Your Currency'" 
                  :items="offers"></vertical-steps>
        </label>
      </el-col>
      <!-- Images Detail -->
      <el-col :sm="12" :xs="24" v-show="imageSource !== null" :style="{ 'background-color': '#5DADE2', 'height': imageHeight}">
        <transition name="fade" mode="out-in">
          <label class="step-label" :key="'/static/images/' + imageSource">
            <img class="step-image" :src=" imageSource === null ? '/static/images/icons/transparent.png' : '/static/images/' + imageSource">
          </label>
        </transition>
      </el-col>
      <!-- Right Steps : Accept An Offer -->
      <el-col :sm="12" :xs="24" v-if="!isLeft || imageSource === null">
        <label ref="rightSteps" class="step-label" @mouseover="isRight = true" @mouseleave="isRight = false">
          <vertical-steps @mouseover="rightStepOver" @mouseleave="imageSource = null"
                  :prefixChar="'r_'"
                  :title="'Accept An Offer'" 
                  :items="accepts"></vertical-steps>
        </label>
      </el-col>
    </el-main>
    <el-main v-else>
      <el-col :xs="24" :style="{ 'height':'450px'}">
        <el-carousel style="height:100%;">
          <el-carousel-item>
            <label ref="m_leftSteps">
              <vertical-steps 
                      :prefixChar="'l_'"
                      :title="'Offer Your Currency'" 
                      :items="offers"></vertical-steps>
            </label>
          </el-carousel-item>
          <el-carousel-item>
            <label ref="m_rightSteps" class="step-label">
              <vertical-steps 
                      :prefixChar="'r_'"
                      :title="'Accept An Offer'" 
                      :items="accepts"></vertical-steps>
            </label>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-main>
  </el-container>
</template>

<style scoped>
  .ctn{
    background-color: #3498DB;
    background: linear-gradient(to bottom, #3498DB, #5DADE2);
    color: #000;
    min-height: 100px;
  }

  .el-main{
    padding-top: 50px;
    height: 100%;
    z-index: 100;
  }
  
  label{
    padding-top: 16px;
  }

  .step-label{
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }

  .step-label:hover{
    background-color: #5DADE2;
  }

  .step-image{
    height: 100%;
    width: 100%;
    border: 0;
  }
</style>

<script>
  import { VerticalSteps } from 'src/components/index'

  export default {
    name: 'app-works',
    components: {
      [VerticalSteps.name]: VerticalSteps
    },
    data () {
      return {
        isLeft: false,
        isRight: false,
        imageHeight: {},
        imageSource: null,
        offers: [
          { img: 'works/work_1.jpg',
            title: 'Create An Offer',
            message: 'Create an offer with your offer currency and accepted currency, best rate and meet up places, etc.'},
          { img: 'works/work_2.jpg',
            title: 'Confirm Or Reject',
            message: 'Receive notification message about other accept your offer and you can confirm or reject the deal.'},
          { img: 'works/work_3.jpg',
            title: 'Meet up & Exchange',
            message: 'Meet up with the person involved at both agreed places and time.'}
        ],
        accepts: [
          { img: 'works/work_1.jpg',
            title: 'Accept An Offer',
            message: 'Search your preference offer and send accept offer request to host.'},
          { img: 'works/work_2.jpg',
            title: 'Receive a confirmation',
            message: 'Receive a notification message about your request is accepted or denied.'},
          { img: 'works/work_3.jpg',
            title: 'Meet up & Exchange',
            message: 'Meet up with the person involved at both agreed places and time.'}
        ]
      }
    },
    methods: {
      leftStepOver (val) {
        this.imageSource = this.offers[val].img
      },
      rightStepOver (val) {
        this.imageSource = this.accepts[val].img
      }
    },
    mounted () {
      this.imageHeight = this.$refs.leftSteps.clientHeight + 'px'
    }
  }
</script>

