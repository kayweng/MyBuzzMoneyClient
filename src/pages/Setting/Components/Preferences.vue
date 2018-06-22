<template>
  <fade-render-transition :duration="200">
    <el-container>
      <el-main>
        <!-- Local Currency -->
        <el-row>
          <el-col :xs="24" :sm="12">
            <currency-select  ref="ddlCurrency"
                              v-model="value.localCurrency"
                              @changed="value.localCurrency = $event">
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
            <simple-select  :id="'ddlCountry'" 
                            :items="countries"
                            v-model="value.location.country"
                            @changed="value.location.country = $event">
              <span slot="label">
                <label for="ddlCountry" class="control-label medium">Country &nbsp;</label>
              </span>
            </simple-select>
          </el-col>
          <el-col :xs="24" :sm="12">
            <simple-select  :id="'ddlState'" 
                            :items="stateValues"
                            v-model="value.location.state"
                            @changed="value.location.state = $event">
              <span slot="label">
                <label for="ddlState" class="control-label medium">State &nbsp;</label>
              </span>
            </simple-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12">
            <simple-select  :id="'ddlCity'" 
                            :items="citiValues"
                            v-model="value.location.city"
                            @changed="value.location.city = $event">
              <span slot="label">
                <label for="ddlCity" class="control-label medium">City/Suburb &nbsp;</label>
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
            <check-box  :ref="message.ref" 
                        :checked="message.checked" 
                        :value="message.ref" 
                        @input="checkNotification">
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
    props: {
      value: Object
    },
    data () {
      return {
        stateValues: [],
        citiValues: [],
        messages : [
          {
            ref: 'chkExpired3Days',
            checked: false,
            message: 'Send me notification for an exchange will be <strong class="strongbow">expired in 3 days</strong>'
          },
          {
            ref: 'chkReceiveExchange',
            checked: false,
            message: 'Send me notification for an exchange is <strong class="strongbow">accepted</strong>'
          },
          {
            ref: 'chkDeniedExchange',
            checked: false,
            message: 'Send me notification for an exchange is <strong class="strongbow">denied</strong>'
          }
        ]
      }
    },
    methods: {
      checkNotification (checked, id) {
        switch (id) {
          case 'chkExpired3Days':
            this.value.notifications.expiredIn3Days = checked
            break
          case 'chkReceiveExchange':
            this.value.notifications.exchangeAccepted = checked
            break
          case 'chkDeniedExchange':
            this.value.notifications.exchangeDenied = checked
            break
        }
      }
    },
    watch: {
      'value.location.country' (value) {
        var states = this.getStates(value)
        this.stateValues = []
        this.citiValues = []
        this.value.location.state = null
        this.value.location.city = null

        if (states) {
          this.stateValues = states
        }
      },
      'value.location.state' (value) {
        var cities = this.getCities(this.value.location.country, value)
        this.citiValues = []
        this.value.location.city = null

        if (cities) {
          this.citiValues = cities
        }
      }
    }
  }
</script>
