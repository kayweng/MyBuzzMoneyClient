<template>
  <el-container direction="vertical" class="container-fluid ctn">
    <el-header class="center">
      <h2 class="primary">Read All Features</h2>
    </el-header>
    <el-container direction="vertical">
      <el-row>
        <el-col :lg="8" :md="8" :sm="12" :xs="24" v-for="(item, index) in items" :key="index">
          <feature-card  :imgName="item.img" 
                      :title="item.title"
                      :message="item.message">
          </feature-card>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<style scoped>
  .ctn{
    padding: 0px 50px 50px 50px;
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
          {img: 'benefits/genuine_user.png',
            title: 'Genuine User',
            message: 'Genuine user who is verified using confirmed email address, mobile number & premise address.'},
          {img: 'benefits/cashflow.png',
            title: 'Offer & Accept',
            message: 'You could offers a competitive currency rate to everyone or accept an offer from someone near you.'},
          {img: 'benefits/meetup.png',
            title: 'Meet up',
            message: 'You are dealing with other person involved at right place and best time you both agreed.'},
          {img: 'benefits/aml.png',
            title: 'Anti Money Laundaring',
            message: 'All exchange currency deals are monitoring by our team to ensures we remain in compliance AML laws.'},
          {img: 'benefits/alert.png',
            title: 'Rate Alert',
            message: 'You could setup alerts for desire rates. We will send you an email alert.'},
          {img: 'benefits/24_hours.png',
            title: 'Anytime & Anywhere',
            message: 'You could offer your deal where you are and anytime.'},
          {img: 'benefits/coworking.png',
            title: 'Co-op',
            message: 'Working with us to make a better currency exchange way.'},
          {img: 'benefits/no_hidden_fee.png',
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

