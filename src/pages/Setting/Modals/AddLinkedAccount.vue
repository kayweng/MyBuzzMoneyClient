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
            <button type="button" class="btn btn-link" @click="selectAccountType('BankAccount')">
              <i class="fa fa-university" />
            </button>
            <div class="gill-Sans">Bank Account</div>
          </el-col>
          <el-col :sm="12">
            <button type="button" class="btn btn-link" @click="selectAccountType('Paypal')">
              <i class="fa fa-paypal" />
            </button>
            <div class="gill-Sans">Paypal</div>
          </el-col>
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
  
  .container-fluid,
  .el-main{
    min-height: 100%;
    overflow: hidden;
  }

  .fa{
    font-size: 36px;
  }

  .fa-university{
    color: #138D75;
  }

  .fa-paypal{
    color: #003087;
  }

  .button-row{
    padding-top:50px;
  }
</style>

<script>
  export default {
    name: 'AddLinkedAccountModal',
    props: {
      modalHeight: String
    },
    data () {
      return {
        modalWidth: 600,
        selectedAccountType: null
      }
    },
    methods:{
      selectAccountType (val){
        this.selectedAccountType = val
      },
      beforeClose() {
        this.selectedAccountType = null
      }
    },
    created () {
      this.modalWidth = window.innerWidth < 600 ? 600 / 2 : 600
    }
  }
</script>
