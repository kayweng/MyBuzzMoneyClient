<template>
  <el-container direction="vertical" class="container-fluid ctn">
    <!-- title -->
    <el-header class="center">
      <h3 class="primary">Exchange With Everyone</h3>
    </el-header>
    <!-- content -->
    <el-container direction="vertical">
      <el-main>
        <el-row>
          <el-col :md="8" :sm="12" :xs="24" v-for="(item, index) in items" :key="'f_' + index">
            <feature-card :imgName="item.img" 
                          :title="item.title"
                          :message="item.message">
            </feature-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
  .ctn{
    min-height: 100px;
  }

  .fc-item {
    padding-top: 50px;
  }
</style>

<script>
  import { FeatureCard } from 'src/components/index.js'

  export default {
    data () {
      return {
        items: [
          {img: 'features/genuine_user.png',
            title: 'Genuine User',
            message: 'Genuine user who is verified using confirmed email address, mobile number & premise address.'},
          {img: 'features/cashflow.png',
            title: 'Offer & Accept',
            message: 'You could offers a competitive currency rate to everyone or accept an offer from someone near you.'},
          {img: 'features/meetup.png',
            title: 'Meet up',
            message: 'You are dealing with other person involved at both agreed right place and time.'},
          {img: 'features/aml.png',
            title: 'Anti Money Laundaring',
            message: 'All exchange currency deals are monitoring by our team to ensures we remain in compliance AML laws.'},
          {img: 'features/alert.png',
            title: 'Rate Alert',
            message: 'You could setup alerts for your desire rates. We will send you an email alert.'},
          {img: 'features/24_hours.png',
            title: 'Anytime & Anywhere',
            message: 'You could offer your deal where you are, at anytime.'},
          {img: 'features/coworking.png',
            title: 'Co-op',
            message: 'Working with us to make a better currency exchange way.'},
          {img: 'features/no_hidden_fee.png',
            title: 'No Charge/No Fees',
            message: 'We promise no extra charge and hidden fees on all currency exchange deals.'}
        ]
      }
    },
    components: {
      [FeatureCard.name]: FeatureCard
    }
  }
</script>

