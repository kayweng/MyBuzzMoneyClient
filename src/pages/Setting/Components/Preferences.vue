<template>
  <fade-render-transition :duration="200">
    <el-container direction="vertical">
      <el-main>
        <!-- Local Currency -->
        <el-row>
          <currency-select  ref="ddlCurrency"
                            :label="'Local Currency'"
                            v-model="model.localCurrency"
                            :class="{'input-error': $v.model.localCurrency.$error }"
                            @changed="model.localCurrency = $event">
          </currency-select>
          <div class="error-message">
            <span v-if="!$v.model.localCurrency.required">The Local currency field is required.</span>
          </div>
        </el-row>
        <hr/>
        <!-- Current Location -->
        <el-row>
          <h4>Current Location</h4>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12">
            <simple-select  :id="'ddlCountry'" 
                            :items="countries"
                            :label="'Country'"
                            v-model="model.location.country"
                            :class="{'input-error': $v.model.location.country.$error }"
                            @changed="model.location.country = $event">
            </simple-select>
            <div class="error-message">
              <span v-if="!$v.model.location.country.required">The Country field is required.</span>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12">
            <simple-select  :id="'ddlState'" 
                            :items="stateValues"
                            :label="'State'"
                            v-model="model.location.state"
                            :class="{'input-error': $v.model.location.state.$error }"
                            @changed="model.location.state = $event">
            </simple-select>
            <div class="error-message">
              <span v-if="!$v.model.location.state.required">The State field is required.</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12">
            <simple-select  :id="'ddlCity'" 
                            :items="citiValues"
                            :label="'City/Suburb'"
                            :class="{'input-error': $v.model.location.city.$error }"
                            v-model="model.location.city"
                            @changed="model.location.city = $event">
            </simple-select>
             <div class="error-message">
              <span v-if="!$v.model.location.city.required">The City field is required.</span>
            </div>
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
              <span class="standard-label none-transform" v-html="message.message"></span>
            </check-box>
          </div>
        </el-row>
        <!-- Buttons -->
        <el-row class="empty-row"></el-row>
        <el-row class="text-center">
          <div class="button-inline">
            <button type="button" @click="resetPreferences" class="btn btn-round btn-reset btn-wd">Reset</button>
            <button type="submit" @click.prevent="savePreferences" class="btn btn-round btn-submit btn-wd">Save</button>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </fade-render-transition>
</template>

<style scoped>
  .error-message{
    margin-left: 105px;
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import SettingModel from 'src/models/settingModel.js'
  import { FadeRenderTransition, CurrencySelect, SimpleSelect, Checkbox } from 'src/components/index'
  import clone from 'clone'
  import swal from 'sweetalert2'

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
        model: clone(this.value),
        stateValues: [],
        citiValues: [],
        messages: [
          {
            ref: 'chkExpired',
            checked: false,
            message: 'Get notified about an offer is <strong class="strongbow">expired.</strong>'
          },
          {
            ref: 'chkAccepted',
            checked: false,
            message: 'Get notified about an offer is <strong class="green">accepted.</strong>'
          },
          {
            ref: 'chkDenied',
            checked: false,
            message: 'Get notified about a request is <strong class="text-danger">denied.</strong>'
          }
        ]
      }
    },
    validations: {
      model: SettingModel.validationScheme()
    },
    computed: {
      ...mapGetters([
        'cognitoUserEmail'
      ])
    },
    methods: {
      ...mapActions([
        'saveUserPreferences'
      ]),
      checkNotification (checked, id) {
        switch (id) {
          case 'chkExpired':
            this.model.notifications.expired = checked
            break
          case 'chkAccepted':
            this.model.notifications.accepted = checked
            break
          case 'chkDenied':
            this.model.notifications.denied = checked
            break
        }
      },
      resetPreferences () {
        swal({
          type: 'warning',
          title: 'Discard Changes',
          html: '<small>Are you sure that you want to discard changes ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.model = clone(this.value)
          }
        })
      },
      savePreferences () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        swal({
          type: 'info',
          title: 'Save Preference',
          html: '<small>Are you confirm to save changes ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-primary btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            var preferences = {
              'email': this.cognitoUserEmail,
              'preferences': JSON.stringify(this.model),
              'verifications': JSON.stringify(this.$store.state.setting.userSetting.verifications),
              'modifiedOn': new Date().toString()
            }

            this.$loading.startLoading('loading')
            this.saveUserPreferences(preferences).then(response => {
              this.$loading.endLoading('loading')
            }, (error) => {
              console.log(error)
              this.$loading.endLoading('loading')
              return
            })
          }
        })
      }
    },
    watch: {
      'value' (value) {
        if (value !== undefined) {
          this.model = clone(value)

          if (this.model !== undefined) {
            this.messages[0].checked = this.model.notifications.expired
            this.messages[1].checked = this.model.notifications.accepted
            this.messages[2].checked = this.model.notifications.denied
          }
        }
      },
      'model.location.country' (value) {
        var states = this.getStates(value)
        this.stateValues = []
        this.citiValues = []
        
        if (states) {
          this.stateValues = states
        }
      },
      'model.location.state' (value) {
        var cities = this.getCities(this.model.location.country, value)
        this.citiValues = []

        if (cities) {
          this.citiValues = cities
        }

        if (!value) {
          this.model.location.city = null
        }
      }
    }
  }
</script>
