import { store } from 'src/store/index'
import swal from 'sweetalert2'

let noAuthPage = ['Home', 'Login', 'SignUp', 'ResetPassword', 'ResendConfirmation', 'PageNotFound', 'Error']
 
async function loginRoute (to, from, next) {
  var _logged = localStorage.getItem('keepMeSignedIn')
  var rememberLoggedIn = _logged === undefined ? false : (_logged === 'true')
  if (!rememberLoggedIn || store.state.cognito.user === null) {
    store.dispatch('signOut')
    next()
  } else {
    await store.dispatch('getCurrentUser').then((_) => {
      next('Dashboard')
    }, (error) => {
      console.log(error)
      next('/login?s=true')
    })
  }
}

async function authRoute (to, from, next) {
  if (noAuthPage.indexOf(to.name) > -1) {
    next()
    return
  }

  if (store.state.cognito.user === null) {
    next('/login?s=true')
    return
  }
  
  await store.dispatch('getCurrentUser').catch((error) => {
    console.log(error)
    next('/login?s=true')
    return
  })
  
  await store.dispatch('getUserAttributes').catch((error) => {
    console.log(error)
    next('/login?s=true')
    return
  })

  if (to.path !== '/user-profile' && store.state.user !== null && store.state.user.profile !== null) {
    let profile = store.state.user.profile

    if (profile.firstName === null || profile.lastName === null || profile.gender === null || profile.mobile === null || profile.birthdate === null || profile.address === null || profile.country === null || profile.imageData === null) {
      swal({
        type: 'info',
        title: 'Complete Your Profile',
        html: '<small>Completing your profile helps us more understand you and improve online visibility.</small>',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info btn-round btn-wd'
      })
    
      next('/user-profile')
      return
    }
  }

  next()
}

export {
  loginRoute,
  authRoute
}
