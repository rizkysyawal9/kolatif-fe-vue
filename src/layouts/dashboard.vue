<template>
  <v-app>
    <DashboardNav />
    <v-main>
      <nuxt class="grey lighten-4" />
    </v-main>
    <v-snackbar :v-model="snackbar.showing" timeout="6000">
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <Footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '../components/Footer'
import DashboardNav from '../components/DashboardNav'
export default {
  components: {
    DashboardNav,
    Footer,
  },

  computed: {
    ...mapState('snackbar', {
      snackbar: (state) => state.snackbar,
    }),
  },
}
</script>
