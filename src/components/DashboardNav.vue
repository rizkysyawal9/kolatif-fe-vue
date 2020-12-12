<template>
  <nav>
    <v-app-bar color="white" elevate-on-scroll class="px-12" fixed app>
      <v-toolbar-title>
        <router-link to="/mentors">
          <img
            src="../assets/images/logo.png"
            alt="image"
            style="max-width: 100px"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="user.role != 'mentor'"
        text
        class="text-none mr-2"
        color="primary"
        to="/dashboard/mentors"
        >Mentors</v-btn
      >
      <v-btn
        text
        color="primary"
        class="text-none mr-2"
        to="/dashboard/sessions"
        >Sessions</v-btn
      >
      <v-btn text color="primary" class="text-none mr-2" to="/dashboard/events"
        >Events</v-btn
      >
      <v-btn text color="primary" class="text-none mr-2" to="/dashboard/faq"
        >FAQ</v-btn
      >
      <v-btn
        class="text-none"
        text
        color="primary"
        fab
        small
        to="/dashboard/profile"
      >
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', {
      user: state => state.user,
    }),
  },
  mounted() {
    console.log(this.user)
  },
}
</script>

<style></style>
