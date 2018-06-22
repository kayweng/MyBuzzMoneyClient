<template>
  <modal  name="add-linked-account" transition="pop-out" 
          @before-close="beforeClose"
          :width="modalWidth" :height="modalHeight">
    <el-container class="container-fluid">
      <el-main v-if="selectedAccountType === null">
        <el-row class="text-center">
          <h4>Add Account</h4>
        </el-row>
        <el-row class="button-row text-center">
          <el-col :sm="12">
            <el-tooltip class="item" effect="dark" content="Add Your Bank Account" placement="top-start">
             <label for="" @mouseover="showInfo('Bank')" @mouseout="clearInfo">
               <img :src="'static/images/icons/bank.png'" alt="Bank">
            </label>
            </el-tooltip>
          </el-col>
          <el-col :sm="12">
            <el-tooltip class="item" effect="dark" content="Add Your PayPal.Me" placement="top-start">
              <label for="" @mouseover="showInfo('Paypal')" @mouseout="clearInfo">
               <img :src="'static/images/icons/paypal.png'" alt="Paypal">
              </label>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row class="empty-row"></el-row>
        <el-row>
          <fade-render-transition :duration="2000" :delay="3000">
            <div class="large gill-Sans" v-html="selectedTypeInfo"></div>
          </fade-render-transition>
        </el-row>
      </el-main>
      <el-main v-if="selectedAccountType === 'BankAccount'">
        Bank-Account
      </el-main>
      <el-main v-if="selectedAccountType === 'Paypal'">
        Paypal
      </el-main>
    </el-container>
  </modal>
</template>

<style scoped>
  h4{
    margin-top:0;
  }

  label {
    border-radius: 50%;
    vertical-align: middle;
    width: 96px;
    height: 96px;
    cursor: pointer;
  }

  img {
    width: 96px;
    height: 96px;
  }
  
  .container-fluid,
  .el-main{
    min-height: 100%;
    overflow: hidden;
  }

  .button-row{
    padding-top:50px;
  }
</style>

<script>
  import { FadeRenderTransition } from 'src/components/index'
  import 'element-ui/lib/theme-chalk/display.css'

  export default {
    components: {
      FadeRenderTransition
    },
    name: 'AddLinkedAccountModal',
    props: {
      modalHeight: String
    },
    data () {
      return {
        modalWidth: 600,
        selectedAccountType: null,
        selectedTypeInfo: 'Please select an account type'
      }
    },
    methods:{
      selectAccountType (val){
        this.selectedAccountType = val
      },
      beforeClose() {
        this.selectedAccountType = null
      },
      showInfo(val) {
        if (val === 'Bank') {
          this.selectedTypeInfo = 'You can add a verified bank account to your account. You can start the verification process at the verification tab.'
        } else if (val === 'Paypal') {
          this.selectedTypeInfo = 'You can add a verified Paypal.Me link to your account. Share your own Paypal.Me link to receive currency from others.'
        }
      },
      clearInfo() {
        this.selectedTypeInfo = null
      }
    },
    created () {
      this.modalWidth = window.innerWidth < 600 ? 600 / 2 : 600
    }
  }
</script>
