<template>
  <el-container class="container-fluid ctn">
    <el-header>
      <h3 class="center bold">How It Works</h3>
    </el-header>
    <el-main>
      <el-row class="empty-row"></el-row>
      <el-row>
        <el-col :sm="9">
          <hr/>
        </el-col>
        <el-col :sm="6" class="center">
          <label for="">Offer Currency Exchange</label>
        </el-col>
        <el-col :sm="9">
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="6" :xs="24" v-for="(item, index) in offers" :key="index">
          <card>
            <div name="image" class="center">
              <label class="card-image">
                <img :src="'/static/images/' + item.img ">
              </label>
            </div>
            <div class="secondary">
              <h5 class="bold">{{item.title}}</h5>
              <hr/>
              <p class="medium">{{item.message}}</p>
            </div>
          </card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="9">
          <hr/>
        </el-col>
        <el-col :sm="6" class="center">
          <label for="">Accept Currency Exchange</label>
        </el-col>
        <el-col :sm="9">
          <hr/>
        </el-col>
      </el-row>
      <!-- Accept -->
      <el-row>
        <el-col :sm="6" :xs="24" v-for="(item, index) in accepts" :key="index">
          <card>
            <div name="image" class="center">
              <label class="card-image">
                <img :src="'/static/images/' + item.img ">
              </label>
            </div>
            <div class="secondary">
              <h5 class="bold">{{item.title}}</h5>
              <hr/>
              <p class="medium">{{item.message}}</p>
            </div>
          </card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
  .ctn{
    background-color: #0062cc;
    color: white;
  }

  .card-image{
    width: 100px;
    height: 100px;
  }

  .ctn > main{
    overflow: hidden;
  }

  .card{
    border-radius: 0;
    margin: 10px;
    -webkit-box-shadow: 0px 4px 4px 1px #343a40;
    -moz-box-shadow: 0px 4px 4px 1px #343a40;
    box-shadow: 0px 4px 4px 1px #343a40;
  }
  
  hr{
    background-color: silver;
  }

  p{
    min-height: 60px;
    max-height: 60px;
  }
</style>

<script>
  import { Card } from 'src/components/index'

  export default {
    name: 'app-works',
    components: {
      Card
    },
    data () {
      return {
        offers: [
          { img: 'benefits/genuine_user.png',
            title: '1. Create An Offer',
            message: 'Create an offer with your offer currency and accepted currency, best rate and meet up places, etc.'},
          { img: 'benefits/genuine_user.png',
            title: '2. Confirm the acceptance',
            message: 'Receive notification message about other accept your offer and confirm the deal.'},
          { img: 'benefits/genuine_user.png',
            title: '3. Meet up & Exchange',
            message: 'Meet up with the person involved at both agreed places and time.'},
          { img: 'benefits/genuine_user.png',
            title: '4. Update the deal',
            message: 'Remember update your offer status to gain reputations.'}
        ],
        accepts: [
          { img: 'benefits/genuine_user.png',
            title: '1. Accept An Offer',
            message: 'Search an offer from listing, accept your desire offer.'},
          { img: 'benefits/genuine_user.png',
            title: '2. Receive a confirmation',
            message: 'Platform will send you a notification if your request is accepted or denied.'},
          { img: 'benefits/genuine_user.png',
            title: '3. Meet up & Exchange',
            message: 'Meet up with the person involved at both agreed places and time.'},
          { img: 'benefits/genuine_user.png',
            title: '4. Rate the deal',
            message: 'Rate the host for the deal'}
        ]
      }
    }
  }
</script>

