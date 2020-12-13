<template>
  <v-app>
    <dashboard-nav />
    <v-main>
      <router-view class="grey lighten-4" style="height: 100%" />
    </v-main>
    <!-- <v-snackbar :v-model="snackbar.showing" timeout="6000">
            {{ snackbar.text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar> -->
    <footer />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '../components/Footer'
import DashboardNav from '../components/DashboardNav'
export default {
  components: {
    DashboardNav,
    Footer,
  },

  computed: {
    // ...mapState('user', {
    //   user: state => state.user,
    // }),
    ...mapGetters({
      user: 'user/user',
    }),
  },
  async mounted() {
    // TODO: dispatch api call to get mentors
    console.log(this.user)
    await this.$store.dispatch('mentors/loadMentors')
    if (this.user.role === 'mentee')
      this.$store.dispatch('sessions/loadMenteeSessions', this.user.id)
    else this.$store.dispatch('sessions/loadMentorSessions', this.user.id)
  },
}
</script>
