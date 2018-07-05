<template>
   <form method="#" action="#">
    <fade-render-transition :duration="200">
      <card>
        <div class="row">
          <div class="col-md-6 col- col-12">
            <fg-input type="password"
                      name="password"
                      label="Old Password"
                      @blur="$v.model.oldPassword.$touch()"
                      :class="{'input-error': $v.model.oldPassword.$error }"
                      v-model="model.oldPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.oldPassword.required" class="error-message">The old password field is required</span>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <fg-input type="password"
                      name="new password"
                      label="New Password"
                      @blur="$v.model.newPassword.$touch()"
                      :class="{'input-error': $v.model.newPassword.$error }"
                      v-model="model.newPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.newPassword.required" class="error-message">The new password field is required</span>
              <span v-if="$v.model.newPassword.required && !$v.model.newPassword.passwordPolicy" class="error-message">Passwords must be at least 8 characters and numbers in length</span>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <fg-input type="password"
                      name="confirm password"
                      label="Confirm New Password"
                      @blur="$v.model.confirmPassword.$touch()"
                      :class="{'input-error': $v.model.confirmPassword.$error }"
                      v-model="model.confirmPassword">
            </fg-input>
            <div class="error-message">
              <span v-if="!$v.model.confirmPassword.required" class="error-message">The confirm password field is required</span>
              <span v-if="$v.model.confirmPassword.required && !$v.model.confirmPassword.sameAs" class="error-message">The confirm password must be same as password</span>
            </div>
          </div>
        </div>
        <div class="empty-row"></div>
        <div class="row">
          <div class="text-center col-12">
            <div class="button-inline">
              <button type="button" @click="resetPassword" class="btn btn-round btn-reset btn-wd">Reset</button>
              <button type="submit" @click.prevent="requestPasswordChanged" class="btn btn-round btn-danger btn-wd">Confirm</button>
            </div>
          </div>
        </div>
      </card>
    </fade-render-transition>
   </form>
</template>

<script>
  import { mapActions } from 'vuex'
  import { FadeRenderTransition } from 'src/components/index'
  import { PasswordModel } from 'src/models/passwordModel'
  import swal from 'sweetalert2'

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
      model: PasswordModel.changePasswordValidationScheme()
    },
    methods: {
      ...mapActions([
        'changePassword'
      ]),
      requestPasswordChanged () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        swal({
          type: 'warning',
          title: 'Change Password',
          html: '<small>Are you sure that you want to changes password ?</small>',
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-warning btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            this.changePassword({ oldPassword: this.model.oldPassword, newPassword: this.model.newPassword })
            .then(() => {
              this.showNotifyMessage('Your password has been changed successfully.', 5000, 'primary', 'nc-icon nc-check-2')
              this.$router.push('Dashboard')
            }, (error) => {
              this.swalError(error.message)
              this.resetPassword()
            })
          }
        })
      },
      resetPassword () {
        this.model.resetState()
      }
    }
  }
</script>


