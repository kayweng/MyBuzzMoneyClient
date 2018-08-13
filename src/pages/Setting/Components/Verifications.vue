<template>
  <fade-render-transition :duration="200">
    <el-container>
      <el-main>
        <el-row>
          <el-col class="verification-col col-lg-4 col-md-4 col-sm-6 col-12" v-for="(item, index) in items" :key="'f_' + index">
            <feature-card :imgName="item.img" 
                          :title="item.title"
                          :message="item.message"
                          :cardClass="cardCss">
                <div slot="icon">
                  <el-row>
                    <el-tooltip class="item" effect="dark" :content="item.verified ? 'verifiy' : 'pending verifiy'" placement="top-start">
                      <img class="verification-icon" :src="'/static/images/icons/' + (!item.verified ? 'unverified.png' : 'verified.png')" />
                    </el-tooltip>
                  </el-row>
                </div>
                <div slot="action">
                  <button :class="{'verification-hidden': item.verified }" 
                          class="btn btn-round btn-verify"
                          @click="item.action">Verify Now</button>
                </div>
            </feature-card>
            <el-row class="empty-row"></el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </fade-render-transition>
</template>

<style>
  .verification-icon{
    float: left;
    height: 32px;
    width: 32px;
  }

  .verification-card{
    border-radius: 10px;
    padding: 10px;
    background-color: #ECF0F1;
  }

  .fc-message{
    max-width: 150px !important;
    min-width: 150px !important;
    min-height: 75px !important;
    max-height: 75px !important;
  }

  .verification-hidden{
    opacity: 0;
    pointer-events: none;
    cursor: none;
  }
</style>

<script>
  import { FadeRenderTransition, FeatureCard } from 'src/components/index'
  
  export default {
    name: 'verifications',
    components: {
      FadeRenderTransition,
      FeatureCard
    },
    props: ['value'],
    data () {
      return {
        items: [],
        cardCss: 'verification-card'
      }
    },
    methods: {
      onCompletedVerification () {

      },
      preventDefault () {},
      verifyIdentity () {
        this.$modal.show('verify-identity-modal')
      },
      verifyMobile () {
        console.log('verify mobile')
      },
      verifyAddress () {
        console.log('verify address')
      }
    },
    watch: {
      'value' (value) {
        if (value !== undefined) {
          this.items = []

          this.items.push(
            { img: 'features/email.png',
              title: 'Email',
              action: this.preventDefault,
              verified: value.emailVerified,
              message: value.emailVerified === true ? 'Your email address had been verified.' : 'pending verified'
            }
          )

          this.items.push(
            { img: 'features/identity.png',
              title: 'Identity',
              action: this.verifyIdentity,
              verified: value.identityVerified,
              message: value.identityVerified === true ? 'Your identity had been verified.' : 'pending verified'
            }
          )

          this.items.push(
            { img: 'features/mobile.png',
              title: 'Mobile',
              action: this.verifyMobile,
              verified: value.mobileVerified,
              message: value.mobileVerified === true ? 'Your mobile numbe had been verified.' : 'pending verified'
            }
          )

          this.items.push(
            { img: 'features/marker.png',
              title: 'Address',
              action: this.verifyAddress,
              verified: value.addressVerified,
              message: value.addressVerified === true ? 'Your premise address had been verified' : 'pending verified'
            }
          )
        }
      }
    }
  }
</script>
