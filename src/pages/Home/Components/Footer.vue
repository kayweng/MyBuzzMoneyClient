<template>
  <el-footer class="container-fluid">
    <el-row>
      <label for="" class="copyright white left">© My Buzz Money 2018</label>
      <label for="" class="right hidden-sm-only hidden-md-only hidden-lg-only">
        <el-tooltip class="item" effect="dark" content="Send Email To Us" placement="top-start">
          <button class="btn btn-social btn-round btn-outline btn-email white" @click="emailUs">
            <i class="fa fa-envelope-o"></i>
          </button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Visit Our Facebook" placement="top-start">
          <button class="btn btn-social btn-round btn-outline btn-facebook white" title="My Buzz Money Official Facebook Page" @click="openFacebookPage">
            <i class="fa fa-facebook"></i>
          </button>
        </el-tooltip>
      </label>
    </el-row>
  </el-footer>
</template>

<style scoped>

  .container-fluid{
    vertical-align: middle;
    background: linear-gradient(to right, #2980B9, #5DADE2);
  }

  .copyright{
    margin-top: 14px;
  }
</style>

<script>
  import externalMixin from 'src/mixins/externalMixin'

  export default {
    mixins: [externalMixin]
  }
</script>
