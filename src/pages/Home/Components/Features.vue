<template>
  <el-container direction="vertical" class="container-fluid">
    <el-row class="center">
      <h1>Features</h1>
    </el-row>
    <el-row>
      <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in items" :key="index">
        <info-card  :imgName="item.img" 
                    :title="item.title"
                    :message="item.message" ></info-card>
      </el-col>
    </el-row>
    <el-row class="empty-row"></el-row>
  </el-container>
</template>

<style scoped>

  .container-fluid{
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 25px;
    min-height: 100px;
  }

  .card-item {
    padding-top: 50px;
  }

</style>

<script>
  import { InfoCard } from 'src/components/index.js'

  export default {
    data () {
      return {
        items: [
          {img: 'benefits/genuine_user.png',
            title: 'Genuine User',
            message: 'Genuine user who has been identified by our team to ensure user is trustable in currency exchange.'},
          {img: 'benefits/cashflow.png',
            title: 'Offer & Accept',
            message: 'You can offers a competitive currency rate to everyone and even can accept great exchange rates offer from others.'},
          {img: 'benefits/meetup.png',
            title: 'Meetup',
            message: 'Users exchange currency with each other via meetup, choose a preferable & safety places.'},
          {img: 'benefits/aml.png',
            title: 'Anti Money Laundaring',
            message: 'All exchange currency deals are monitoring by our team to ensures we remain in compliance AML laws.'},
          {img: 'benefits/alert.png',
            title: 'Rate Alert',
            message: 'You can setup alerts for desire rates. We will send you an email alert.'},
          {img: 'benefits/24_hours.png',
            title: 'Anytime & Anywhere',
            message: 'You can query for exchange currency at anytime and anywhere'},
          {img: 'benefits/coworking.png',
            title: 'Co-op',
            message: 'Working with us to create a better currency exchange platform.'},
          {img: 'benefits/no_hidden_fee.png',
            title: 'No Fees',
            message: 'We promise no extra charge and hidden fees on all currency exchange activity.'}
        ]
      }
    },
    components: {
      infoCard: InfoCard
    }
  }
</script>

