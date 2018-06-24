<template>
  <el-container class="container-fluid" direction="vertical">
    <card>
      <el-row class="paypal-image">
        <label for="">
          <img :src="'static/images/icons/paypal.png'" alt="PayPal">
        </label>
      </el-row>
      <el-row>
        <fg-input type="text"
                  name="paypalLink"
                  label="Enter Your PayPal.Me Link"
                  v-model="model.value"
                  :class="{'input-error': $v.model.value.$error }"
                  placeholder= "https://www.paypal.me/xxxxxx">
        </fg-input>
        <div class="error-message">
          <span v-if="!$v.model.value.required">The PayPal.Me link field is required</span>
          <span v-if="$v.model.value.required && !$v.model.value.paypalLink">The PayPal.Me link is invalid</span>
        </div>
      </el-row>
      <el-row>
      <div class="button-inline">
        <button type="button" @click="back" class="btn btn-round btn-reset btn-wd">Back</button>
        <button type="button" @click="addNewPayPal" class="btn btn-round btn-submit btn-wd">Add</button>
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
  import { paypalMeLink } from 'src/validations/settingValidator.js'

  export default {
    name: 'paypal-link',
    data () {
      return {
        model: {
          type: 'PayPal',
          createdOn: null,
          value: 'https://www.paypal.me/'
        }
      }
    },
    validations: {
      model: {
        value: paypalMeLink
      }
    },
    methods: {
      addNewPayPal () {
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
