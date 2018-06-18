import { authRoute, loginRoute } from './routeActions'

// General pages
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue'

// Home pages
import Home from 'src/pages/Home/HomeLayout.vue'

// Auth pages
import Login from 'src/pages/Auth/Pages/Login.vue'
import SignUp from 'src/pages/Auth/Pages/SignUp.vue'
import ResendConfirmation from 'src/pages/Auth/Pages/ResendConfirmation.vue'
import ForgotPassword from 'src/pages/Auth/Pages/ForgotPassword.vue'
import ConfirmForgotPassword from 'src/pages/Auth/Pages/ConfirmForgotPassword.vue'
import ChangePassword from 'src/pages/Profile/Pages/ChangePassword.vue'

// Dashboard page
import DashboardLayout from 'src/pages/Dashboard/DashboardLayout.vue'
import UserProfile from 'src/pages/Profile/Pages/UserProfile.vue'

// Exchange page
import RequestExchange from 'src/pages/Exchange/Pages/RequestExchange.vue'
import OfferExchange from 'src/pages/Exchange/Pages/OfferExchange.vue'

import SettingLayout from 'src/pages/Setting/SettingLayout.vue'

// auth components
let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login,
  props: true,
  beforeEnter: loginRoute
}

let signUpPage = {
  path: '/signup',
  name: 'SignUp',
  component: SignUp,
  beforeEnter: loginRoute
}

let resendConfirmationPage = {
  path: '/resend-confirmation',
  name: 'Resend Confirmation',
  component: ResendConfirmation
}

let forgotPasswordPage = {
  path: '/reset-password',
  name: 'Reset Password',
  component: ForgotPassword
}

let confirmForgotPasswordPage = {
  path: '/confirm-password',
  name: 'Confirm Password',
  component: ConfirmForgotPassword
}

// dashboard components
let dashboardLayoutPage = {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardLayout,
  beforeEnter: authRoute
}

// profile components
let profileMenuPage = {
  path: '/profile',
  name: 'Profile',
  component: DashboardLayout,
  beforeEnter: authRoute,
  children: [
    {
      path: '/user-profile',
      name: 'My Profile',
      component: UserProfile
    }
  ]
}

let changePasswordPage = {
  path: '/changePassword',
  name: 'Change Password',
  component: DashboardLayout,
  beforeEnter: authRoute,
  children: [
    {
      path: '/change-password',
      name: 'Change Password',
      component: ChangePassword
    }
  ]
}

// exchange components
let exchangePage = {
  path: '/exchange',
  name: 'Exchange',
  component: DashboardLayout,
  beforeEnter: authRoute,
  children: [
    {
      path: '/exchange-request',
      name: 'Request Exchange',
      component: RequestExchange
    },
    {
      path: '/exchange-offer',
      name: 'Offer Exchange',
      component: OfferExchange
    }
  ]
}

// setting components
let settingPage = {
  path: '/setting',
  name: 'Setting',
  component: DashboardLayout,
  beforeEnter: authRoute,
  children: [
    {
      path: '/setting',
      name: 'Setting',
      component: SettingLayout
    }
  ]
}


const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  loginPage,
  signUpPage,
  resendConfirmationPage,
  forgotPasswordPage,
  confirmForgotPasswordPage,
  changePasswordPage,
  dashboardLayoutPage,
  profileMenuPage,
  exchangePage,
  settingPage,
  { path: '*', component: NotFound }
]

export default routes
