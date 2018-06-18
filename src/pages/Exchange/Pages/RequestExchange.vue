<template>
  <form method="#" action="#">
    <fade-render-transition :duration="200">
      <card>
        <div class="row">
          <div class="col-md-6 col-12 form-group">
            <label class="control-label">Exchange Currency</label>
              <el-select size="large"
                          placeholder="Select Gender">
                <el-option v-for="option in genders"
                            :value="option.value"
                            :label="option.label"
                            :key="option.value">
                </el-option>
              </el-select>
          </div>
        </div>
      </card>
   </fade-render-transition>
  </form>
</template>

<style scoped>

</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { FadeRenderTransition } from 'src/components/index'
  import { ExchangeModel } from 'src/models/exchangeModel.js'

  export default {
    components: {
      FadeRenderTransition
    },
    data () {
      return {
        model: new ExchangeModel()
      }
    }
  }
</script>
