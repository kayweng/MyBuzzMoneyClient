<template>
  <fade-render-transition :duration="200">
    <div class="container-fluid">
      <div class="center" v-if="this.$loading.anyLoading">
        <v-loading loader='loadImage'>
          <template slot='spinner'>
            <loading-spinner height='30px' width='30px' />
          </template>
        </v-loading>
      </div>
      <label for="" v-else>
        <img :src="imagePath" :style="sizeStyle" alt="" />
        <slot name="title" v-if="$slots.title || title">
          <h5>{{ title }}</h5>
        </slot>
        <slide-render-transition :duration="200">
          <slot name="upload" v-if="$slots.upload || isUpload ">
            <div>
              <div class="camera" @click="$refs.fileUpload.click()">
                <i class="fa fa-camera"></i>
              </div>
              <input type="file" class="hidden" @change="uploadImage" name="file" ref="fileUpload" id="fileUpload" accept="image/x-jpg,image/jpeg"/>
            </div>
          </slot>
        </slide-render-transition>
      </label>
    </div>  
  </fade-render-transition>
</template>

<style scoped>
  .container-fluid{
    width: 100%;
  }

  label {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
  }

  img {
    border-radius: 50%;
    border: 0;
    vertical-align: middle;
  }

  .camera:hover {
    background: #2471A3;
    height: 100%;
    transition: height 0.25s ease-out;
  }

  .camera {
    cursor: pointer;
    position: absolute;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background: #5D6D7E;
    transition: height 0.25s ease-in;
    opacity: 0.7;
  }

  .fa-camera {
    color: white;
  }

</style>

<script>
  import { FadeRenderTransition, SlideRenderTransition } from 'src/components/index'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'

  export default {
    name: 'user-image',
    components: {
      FadeRenderTransition,
      SlideRenderTransition,
      loadingSpinner
    },
    props: {
      imagePath: {
        type: String
      },
      title: {
        type: String
      },
      sizeStyle: {
        type: String
      },
      isUpload: {
        type: Boolean,
        default: false
      },
      maxSize: {
        type: Number,
        default: 500000  // 500KB
      }
    },
    methods: {
      uploadImage () {
        var uploadControl = document.getElementById('fileUpload')

        if (uploadControl.files.length > 0) {
          var file = uploadControl.files[0]

          // check file size, 450KB
          if (file.size > this.maxSize) {
            this.swalError(`Selected file size of image exceeds ${this.maxSize / 1000} KB.`)
            return
          }

          // check image types
          if (file.type.substring(0, 5) !== 'image') {
            this.swalError('Accept only image file such as JPG/JPEG')
            return
          }

          // return image object
          this.$emit('change', file)
        }
      }
    },
    watch: {
      imagePath (val) {
        if (val) {
          this.$loading.endLoading('loadImage')
        } else {
          this.$loading.startLoading('loadImage')
        }
      }
    }
  }
</script>
