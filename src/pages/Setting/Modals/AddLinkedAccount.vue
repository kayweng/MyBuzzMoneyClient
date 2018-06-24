<template>
  <modal  name="add-linked-account" transition="pop-out" 
          @before-close="beforeClose"
          height="auto" :scrollable="true"
          :minHeight="400"
          :width="modalWidth">
    <el-container direction="vertical" class="container-fluid center">
      <el-main v-if="selectedAccountType === null">
        <el-row class="text-center">
          <h4>Add Account</h4>
        </el-row>
        <el-row class="button-row text-center">
          <el-col :sm="12">
            <el-tooltip class="item" effect="dark" content="Add Your Bank Account" placement="top-start">
             <label for=""  @click="selectAccountType('Bank')" 
                            @mouseover="showInfo('Bank')" 
                            @mouseout="clearInfo">
               <img :src="'static/images/icons/bank.png'" alt="Bank">
            </label>
            </el-tooltip>
          </el-col>
          <el-col :sm="12">
            <el-tooltip class="item" effect="dark" content="Add Your PayPal.Me link" placement="top-start">
              <label for="" @click="selectAccountType('PayPal')" 
                            @mouseover="showInfo('PayPal')"
                            @mouseout="clearInfo">
                <img :src="'static/images/icons/paypal.png'" alt="PayPal">
              </label>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row class="empty-row"></el-row>
        <el-row>
          <fade-render-transition :duration="200">
            <div class="large gill-Sans text-center" v-html="selectedTypeInfo"></div>
          </fade-render-transition>
        </el-row>
      </el-main>
      <el-main v-if="selectedAccountType === 'Bank'">
        <bank-account @add="addNewBankAccount" @back="selectedAccountType = null"></bank-account>
      </el-main>
      <el-main v-if="selectedAccountType === 'PayPal'">
        <paypal-link @add="addNewPayPalLink" @back="selectedAccountType = null"></paypal-link>
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
  import PayPalLink from 'src/pages/Setting/Components/PayPalLink.vue'
  import BankAccount from 'src/pages/Setting/Components/BankAccount.vue'

  export default {
    components: {
      FadeRenderTransition,
      [PayPalLink.name]: PayPalLink,
      [BankAccount.name]: BankAccount
    },
    name: 'AddLinkedAccountModal',
    data () {
      return {
        modalWidth: "50%",
        modalHeight: "65%",
        selectedAccountType: null,
        selectedTypeInfo: null,
      }
    },
    methods:{
      addNewPayPalLink (val) {
        this.$emit('returnLinkedAccount', val)
        this.$modal.hide('AddLinkedAccountModal')
      },
      addNewBankAccount(val) {
        this.$emit('returnLinkedAccount', val)
        this.$modal.hide('AddLinkedAccountModal')
      },
      selectAccountType (val){
        this.selectedAccountType = val
      },
      beforeClose() {
        this.clearInfo()
        this.selectedAccountType = null
      },
      showInfo(val) {
        if (val === 'Bank') {
          this.selectedTypeInfo = 'You can add a verified bank account to your linked account. Money changer send/transfer money to your bank account.'
        } else if (val === 'PayPal') {
          this.selectedTypeInfo = 'You can add your PayPal.Me link to your linked account. Money changer send currency to your paypal account.'
        }
      },
      clearInfo() {
        this.selectedTypeInfo = '* Please select an account type<br/>&nbsp;'
      }
    },
    mounted (){
      this.clearInfo()
    },
    created () {
      this.modalWidth = window.innerWidth < 600 ? 600 / 2 : 600
    }
  }
</script>
