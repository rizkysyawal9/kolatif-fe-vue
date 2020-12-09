<template>
      <router-view></router-view>
</template>

<script>

import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
  },
  mounted(){
    console.log(this.$store.state.user.user )
  },
  data: () => ({
    //
  }),
};
</script>
