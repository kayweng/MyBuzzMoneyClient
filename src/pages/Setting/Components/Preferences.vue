<template>
  <fade-render-transition :duration="200">
    <el-container>
      <el-main>
        <!-- Base Currency -->
        <el-row>
          <currency-select>
            <span slot="label" style="display:inline;">
              <label for="" class="medium">Base Currency &nbsp;</label>
            </span>
          </currency-select>
        </el-row>
        <el-row class="empty-row"></el-row>
        <hr/>
        <!-- Notifications -->
        <el-row>
          <h4>Notifications</h4>
        </el-row>
        <el-row>
          <div class="row">
            <check-box ref="chkExpired3Days">
              <span class="medium"> Alert me when exchange request/offer expire in 3 days </span>
            </check-box>
          </div>
          <div class="row">
            <check-box ref="chkReceiveExchange">
              <span class="medium"> Send me exchange offer </span>
            </check-box>
          </div>
          <div class="row">
            <check-box ref="chkDeniedExchange">
              <span class="medium"> Send me update about exchange is denied</span>
            </check-box>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </fade-render-transition>
</template>

<script>
  import { FadeRenderTransition, CurrencySelect, Checkbox } from 'src/components/index'

  export default {
    components: {
      FadeRenderTransition,
      CurrencySelect,
      checkBox: Checkbox
    }
  }
</script>
