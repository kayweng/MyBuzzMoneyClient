<template>
  <fade-render-transition :duration="200">
    <el-container direction="vertical">
      <el-main>
        <!-- Local Currency -->
        <el-row>
          <el-col :xs="24" :sm="12">
            <currency-select  ref="ddlCurrency"
                              v-model="model.localCurrency"
                              @changed="model.localCurrency = $event">
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
                            v-model="model.location.country"
                            @changed="model.location.country = $event">
              <span slot="label">
                <label for="ddlCountry" class="control-label medium">Country &nbsp;</label>
              </span>
            </simple-select>
          </el-col>
          
          <el-col :xs="24" :sm="12">
            <simple-select  :id="'ddlState'" 
                            :items="stateValues"
                            v-model="model.location.state"
                            @changed="model.location.state = $event">
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
                            v-model="model.location.city"
                            @changed="model.location.city = $event">
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
  .control-label {
    width: 100px;
  }

  h4{
    margin-top: 0;
  }
</style>

<script>
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
            message: 'Send me notification for a request is <strong class="strongbow">expired.</strong>'
          },
          {
            ref: 'chkAccepted',
            checked: false,
            message: 'Send me notification for a request is <strong class="green">accepted.</strong>'
          },
          {
            ref: 'chkDenied',
            checked: false,
            message: 'Send me notification for a request is <strong class="text-danger">denied.</strong>'
          }
        ]
      }
    },
    methods: {
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
            console.log(this.model)
          }
        })
      },
      savePreferences () {
        console.log(this.model)
      }
    },
    watch: {
      'value' (value) {
        this.model = clone(value)
      },
      'model.location.country' (value) {
        var states = this.getStates(value)
        this.stateValues = []
        this.citiValues = []
        this.model.location.state = null
        this.model.location.city = null
      
        if (states) {
          this.stateValues = states
        }
      },
      'model.location.state' (value) {
        var cities = this.getCities(this.model.location.country, value)
        this.citiValues = []
        this.model.location.city = null

        if (cities) {
          this.citiValues = cities
        }
      }
    }
  }
</script>
