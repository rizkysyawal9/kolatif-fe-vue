<template>
  <router-view></router-view>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  computed: {},
  async mounted() {
    // console.log(this.$store.state.user.user)
    await firebase.auth().onAuthStateChanged(user => {
      console.log(user.uid)
      this.$store.dispatch('user/setUser', user.uid)
    })
  },
  data: () => ({
    //
  }),
}
</script>
