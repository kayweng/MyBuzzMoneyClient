<template>
  <div id="dashboardLayout" class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <side-bar>
      <user-menu v-model="model">
        <li :class="{ active: isActive, 'nav-item': true }">
          <a class="nav-link sidebar-menu-item" href="#/user-profile">
            <i class="fa fa-user-circle-o"></i>
            <p class="sidebar-normal">My Profile</p>
          </a>
        </li>
        <li class="nav-item" v-if="this.$sidebar.showSidebar">
          <a class="nav-link sidebar-menu-item" href="#/change-password">
            <i class="fa fa-key"></i>
            <p class="sidebar-normal">Change Password</p>
          </a>
        </li>
        <li class="nav-item" v-if="this.$sidebar.showSidebar">
          <a class="nav-link sidebar-menu-item text-danger" @click="logout">
            <i class="fa fa-power-off"></i>
            <p class="sidebar-normal text-danger">Logout</p>
          </a>
        </li>
      </user-menu>
      <template slot-scope="props" slot="links">
        <!-- dashboard: show summary info -->
        <sidebar-item :link="{name: 'Dashboard', icon: 'fa fa-tachometer', path: '/dashboard'}">
        </sidebar-item>
        <!-- new post: user create a new exchange request post -->
        <!-- <sidebar-item :link="{name: 'Exchange', icon: 'fa fa-exchange'}">
          <sidebar-item :link="{name: 'Request', path: '/exchange-request'}"></sidebar-item>
          <sidebar-item :link="{name: 'Offer', path: '/components/offer'}"></sidebar-item>
        </sidebar-item> -->
        <!-- map: show pin location of available post on map -->
        <!-- <sidebar-item :link="{name: 'Map', icon: 'fa fa-map-o', path: '/map'}">
        </sidebar-item> -->
        <!-- setting: maintain user preferables -->
        <sidebar-item :link="{name: 'Setting', icon: 'fa fa-cog', path: '/setting'}">
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"></dashboard-content>
      <content-footer></content-footer>
    </div>
    <v-loading v-if="$loading.isLoading('loading')" class="overlay" loader='loading'>
      <template slot='spinner'>
        <loading-spinner height='30px' width='30px' />
      </template>
    </v-loading>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import UserModel from 'src/models/userModel'
  import UserMenu from './Components/UserMenu.vue'
  import TopNavbar from './Layout/TopNavbar.vue'
  import ContentFooter from './Layout/ContentFooter.vue'
  import DashboardContent from './Layout/Content.vue'
  import loadingSpinner from 'vuex-loading/src/spinners/spinner.vue'
  import swal from 'sweetalert2'

  export default {
    components: {
      UserMenu,
      TopNavbar,
      ContentFooter,
      DashboardContent,
      loadingSpinner
    },
    data () {
      return {
        model: new UserModel(),
        timeoutIdleResponse: null,
        idleInterval: null,
        idleTime: 0
      }
    },
    computed: {
      ...mapGetters([
        'cognitoUserEmail',
        'cognitoUserName'
      ]),
      isActive () {
        return this.$route.name === "My Profile"
      }
    },
    methods: {
      ...mapActions([
        'getUserProfileInfo',
        'getUserSetting'
      ]),
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      logout () {
        this.logoutUser(false)
      },
      async retrieveUserInfo () {
        await this.getUserProfileInfo(this.cognitoUserEmail).then(response => {
          if (response) {
            this.model = this.$store.state.user.profile
          } else {
            this.logoutUser(true)
          }
        })
      },
      async retrieveUserSetting () {
        await this.getUserSetting(this.cognitoUserEmail)
      },
      increaseIdleTime (vm) {
        vm.idleTime = vm.idleTime + 1
        if (vm.idleTime > 19) {
          vm.prompIdleTimeout(vm)
        }
      },
      prompIdleTimeout (vm) {
        vm.timeoutIdleResponse = setTimeout(function () {
          swal.close()
          vm.logoutUser(true)
        }, 5000)

        //remove increament
        clearInterval(vm.idleInterval)
        vm.idleInterval = null

        swal({
          type: 'warning',
          title: 'Idle Timeout',
          html: `<small>You have idle for 20 minutes.<br/>Click Yes to continue or Cancel to logout.</small>`,
          buttonsStyling: false,
          showCancelButton: true,
          confirmButtonClass: 'btn btn-primary btn-round btn-wd',
          confirmButtonText: 'Yes'
        }).then((result) => {
          clearTimeout(vm.timeoutIdleResponse)

          if (result.value) {
            vm.resetIdleTime(vm)
            vm.initIdleIncreament(vm)
          } else {
            vm.logoutUser(true)
          }
        })
      },
      initIdleIncreament (vm) {
        if (vm.idleInterval === null) {
          vm.idleInterval = setInterval(function () {
            vm.increaseIdleTime(vm)
          }, 60000)
        }
      },
      resetIdleTime (vm) {
        vm.idleTime = 0
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.retrieveUserInfo()
        vm.retrieveUserSetting()
        vm.initIdleIncreament(vm)

        document.getElementById('dashboardLayout').addEventListener('mousemove', function () {
          vm.resetIdleTime(vm)
        })

         document.getElementById('dashboardLayout').addEventListener('keyup', function () {
          vm.resetIdleTime(vm)
        })
      })
    }
}
</script>
