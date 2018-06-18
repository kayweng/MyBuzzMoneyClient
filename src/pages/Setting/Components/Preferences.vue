<template>
  <fade-render-transition :duration="200">
    <el-container>
      <el-main>
        <!-- Local Currency -->
        <el-row>
          <el-col :xs="24" :sm="12">
            <currency-select ref="ddlCurrency">
              <span slot="label">
                <label for="ddlCurrency" class="control-label medium">Local Currency &nbsp;</label>
              </span>
            </currency-select>
          </el-col>
        </el-row>
        <el-row class="empty-row"></el-row>
        <hr/>
        <!-- Current Location -->
        <el-row>
          <h4>Current Location</h4>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12">
            <simple-select ref="ddlCountry" :items="countries">
              <span slot="label">
                <label for="ddlCountry" class="control-label medium">Country &nbsp;</label>
              </span>
            </simple-select>
          </el-col>
          <el-col :xs="24" :sm="12">
            <simple-select ref="ddlState">
              <span slot="label">
                <label for="ddlState" class="control-label medium">State &nbsp;</label>
              </span>
            </simple-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12">
            <simple-select ref="ddlCity">
              <span slot="label">
                <label for="ddlCity" class="control-label medium">City &nbsp;</label>
              </span>
            </simple-select>
          </el-col>
        </el-row>
        <hr/>
        <!-- Notifications -->
        <el-row>
          <h4>Notifications</h4>
        </el-row>
        <el-row>
          <div class="row" v-for="message in messages" :key="message.ref">
            <check-box :ref="message.ref">
              <span class="medium none-transform" v-html="message.message"></span>
            </check-box>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </fade-render-transition>
</template>

<style scoped>
  .control-label {
    width: 100px;
  }

  h4{
    margin-top: 0;
  }
</style>

<script>
  import { FadeRenderTransition, CurrencySelect, SimpleSelect, Checkbox } from 'src/components/index'

  export default {
    components: {
      FadeRenderTransition,
      [CurrencySelect.name]: CurrencySelect,
      [SimpleSelect.name]: SimpleSelect,
      checkBox: Checkbox
    },
    props:{
      preferences: Object
    },
    data () {
      return {
        messages : [
          {
            ref: 'chkExpired3Days',
            message: 'Send me notification for an exchange will be <strong>expired in 3 days</strong>'
          },
          {
            ref: 'chkReceiveExchange',
            message: 'Send me notification for an exchange is <strong>accepted</strong>'
          },
          {
            ref: 'chkDeniedExchange',
            message: 'Send me notification for an exchange is <strong>denied</strong>'
          }
        ]
      }
    }
  }
</script>
