<template>
  <modal  name="verify-identity-modal" transition="pop-out" 
          @before-close="reset"
          height="auto" :scrollable="true"
          :minHeight="380"
          :width="modalWidth">
    <el-container direction="vertical" class="container-fluid center">
      <el-main>
        <h4>Verify Identity</h4>
        <el-row class="verification-content">
          <el-col class="col-4">
            <div>
              <img src="/static/images/common/verify_identity.jpg" alt="verify identity">
            </div>
          </el-col>
          <el-col class="col-8">
            <div>
              <el-input ref="txtIdentityDocument" 
                  v-model="model.fileName" 
                  :class="{'input-error': $v.model.fileName.$error }"
                  placeholder="Upload Identity Document" readonly>
                <el-button slot="prepend" icon="fa fa-camera" @click="$refs.webcam.click()"></el-button>
                <el-button slot="append" icon="el-icon-search" @click="$refs.fileUpload.click()"></el-button>
              </el-input>
              <div class="error-message">
                <span v-if="model.identityDocument === null || model.fileName == null" class="left error-message">Please upload your identity document</span>
              </div>
              <input type="file" class="hidden" name="file" ref="webcam" accept="image/*;capture=camera">
              <input type="file" class="hidden" @change="uploadIdenityDocument" name="file" ref="fileUpload" id="fileUpload" accept="image/x-jpg,image/jpeg"/>
            </div>
            <div class="empty-row"></div>
            <div>
              <small class="left note-message">*Max file size is 500 KB</small>
              <br/>
              <small class="left note-message">*You can upload JPEG file only</small>
              <br/>
              <small class="left note-message"><a href="" target="_blank">View Sample</a></small>
            </div>
          </el-col>
        </el-row>
        <el-row class="button-inline">
          <button type="button" class="btn btn-round btn-submit btn-wd" @click="submit">Submit</button>
        </el-row>
        <div class="empty-row"></div>
      </el-main>
    </el-container>
  </modal>
</template>

<style scoped>
  .verification-content{
    padding-top: 25px;
    padding-bottom: 25px;
    height: 200px;
    max-height: 200px;
  }

  .verification-content img {
    max-width: 150px;
    max-height: 200px;
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'verify-identity-modal',
    data () {
      return {
        model: {
          identityDocument: null,
          fileName: null
        },
        modalWidth: '50%',
        modalHeight: '65%'
      }
    },
    validations: {
      model: {
        identityDocument: { required },
        fileName: { required }
      }
    },
    computed: {
      maxSize () {
        return 500000// 500KB
      },
      ...mapGetters([
        'cognitoUserEmail'
      ])
    },
    methods: {
      ...mapActions([
        'uploadVerificationDocument'
      ]),
      reset () {
        document.getElementById('fileUpload').value = ''
        this.model.fileName = null
        this.model.identityDocument = null
      },
      submit () {
        if (this.$v.model.$invalid || this.$v.model.$error) {
          this.$v.model.$touch()
          return
        }

        let verificationDetail = { 'username': this.cognitoUserEmail, 'type': 'identity', 'image': this.model.identityDocument }
         
        this.swalConfirmation('info', 'Verify Identity', 'Are you confirm to submit identity document ?').then((response) => {
          if (response) {
            this.uploadVerificationDocument(verificationDetail).then((response) => {
              console.log(response)
            }, (error) => {
              console.log(error)
              this.$loading.endLoading('loading')
              return
            })
          }
        })
      },
      uploadIdenityDocument () {
        var uploadControl = document.getElementById('fileUpload')
        
        if (uploadControl.files.length > 0) {
          var file = uploadControl.files[0]

          // check file size, 500kb
          if (file.size > this.maxSize) {
            this.swalError(`Selected file size of image exceeds ${this.maxSize / 1000} KB.`)
            uploadControl.value = ''
            return
          }

          // check image types
          if (file.type.substring(0, 5) !== 'image') {
            this.swalError('Accept only image file such as JPG/JPEG')
            uploadControl.value = ''
            return
          }

          if (file !== undefined) {
            this.model.identityDocument = file
            this.model.fileName = file.name
          } else {
            this.model.identityDocument = null
            this.model.fileName = null
          }
        }
      }
    },
    created () {
      this.modalWidth = window.innerWidth < 600 ? 600 / 2 : 600
    }
  }
</script>