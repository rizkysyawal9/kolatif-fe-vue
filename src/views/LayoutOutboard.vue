<template>
  <v-app>
    <div
      v-if="
        this.$route.name.includes('register') |
          this.$route.name.includes('login')
      "
    ></div>
    <navbar v-else />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
  },
  mounted() {
    console.log(this.$route.name)
  },
}
</script>

<style></style>
