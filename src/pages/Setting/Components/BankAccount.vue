<template>
  <el-container class="container-fluid" direction="vertical">
    <card>
      <el-row class="bank-image">
        <label for="">
          <img :src="'static/images/icons/bank.png'" alt="Bank Account">
        </label>
      </el-row>
      <el-row>
        <el-col :sm="11">
          <fg-input type="text"
                  name="bankName"
                  label="Bank Name"
                  v-model="model.bankName"
                  :class="{'input-error': $v.model.bankName.$error }"
                  placeholder= "ABC Bank">
          </fg-input>
          <div class="error-message">
            <span v-if="!$v.model.bankName.required">The Bank Name field is required</span>
          </div>
        </el-col>
        <el-col :sm="2">&nbsp;</el-col>
        <el-col :sm="11">
          <fg-input type="text"
                  name="bankAccount"
                  label="Bank Account Number"
                  v-model="model.value"
                  :class="{'input-error': $v.model.value.$error }"
                  placeholder= "1234567890">
          </fg-input>
          <div class="error-message">
            <span v-if="!$v.model.value.required">The Bank Account No. field is required</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="11">
          <fg-input type="text"
                  name="swiftCode"
                  label="Swift Code"
                  v-model="model.swiftCode"
                  :class="{'input-error': $v.model.swiftCode.$error }"
                  placeholder= "MBKKL">
          </fg-input>
          <div class="error-message">
            <span v-if="!$v.model.swiftCode.required">The Swift Code field is required</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="button-inline">
          <button type="button" @click="back" class="btn btn-round btn-reset btn-wd">Back</button>
          <button type="button" @click="addNewBankAccount" class="btn btn-round btn-submit btn-wd">Add</button>
        </div>
      </el-row>
    </card>
  </el-container>
</template>

<style scoped>
  div.card{
    border: 0;
  }
</style>

<script>
  import { bankAccount, mandatory } from 'src/validations/settingValidator.js'

  export default {
    name: 'bank-account',
    data () {
      return {
        model: {
          type: 'Bank Account',
          createdOn: null,
          value: null,        //bank account
          bankName: null,
          swiftCode: null
        }
      }
    },
    validations: {
      model: {
        value: bankAccount,
        bankName: mandatory,
        swiftCode: mandatory
      }
    },
    methods: {
      addNewBankAccount () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        this.model.createdOn = new Date().toLocaleDateString('dd-MMM-yyyy')
        this.$emit('add', this.model)
      },
      back () {
        this.$emit('back')
      }
    }
  }
</script>
