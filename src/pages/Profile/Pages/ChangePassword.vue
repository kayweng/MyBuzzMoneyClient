<template>
   <form method="#" action="#">
    <fade-render-transition :duration="200">
      <card>
        {{ $v.model }}
        <div class="row">
          <div class="col-md-6 col-12">
            <fg-input type="password"
                      name="old Password"
                      label="Old Password"
                      @blur="$v.model.oldPassword.$touch()"
                      :class="{'input-error': $v.model.oldPassword.$error }"
                      v-model="model.oldPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="$v.model.oldPassword.required" class="error-message">The old password field is required</span>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <fg-input type="password"
                      name="new Password"
                      label="New Password"
                      @blur="$v.model.newPassword.$touch()"
                      :class="{'input-error': $v.model.newPassword.$error }"
                      v-model="model.newPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="$v.model.newPassword.required" class="error-message">The new password field is required</span>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <fg-input type="password"
                      name="Confirm New Password"
                      label="Confirm New Password"
                      @blur="$v.model.confirmPassword.$touch()"
                      :class="{'input-error': $v.model.confirmPassword.$error }"
                      v-model="model.confirmPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="$v.model.confirmPassword.required" class="error-message">The confirm password field is required</span>
            </div>
          </div>
        </div>
        <div class="empty-row"></div>
        <div class="row">
          <div class="text-center col-12">
            <div class="button-inline">
              <button type="submit" @click.prevent="changePassword" class="btn btn-round btn-danger btn-wd">Confirm</button>
            </div>
          </div>
        </div>
      </card>
    </fade-render-transition>
   </form>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { FadeRenderTransition } from 'src/components/index'
  import { PasswordModel } from 'src/models/passwordModel'

  export default {
    components: {
      FadeRenderTransition
    },
    data () {
      return {
        model: new PasswordModel()
      }
    },
    validations: {
      model: PasswordModel.passwordValidationScheme()
    },
    methods: {
      changePassword () {

      }
    },
    beforeMount () {
      this.model.resetState()
    }
  }
</script>


