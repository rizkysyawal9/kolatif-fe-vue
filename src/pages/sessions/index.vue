<template>
  <div>
    <v-container>
      <v-row class="mx-5">
        <v-btn class="mr-2" text color="primary" @click="getAllSessions()"
          >All Session</v-btn
        >
        <v-btn class="mr-2" text color="primary" @click="getAcceptedSessions()"
          >Accepted</v-btn
        >
        <v-btn class="mr-2" text color="primary" @click="getPendingSessions()"
          >Pending</v-btn
        >
        <v-btn class="mr-2" text color="primary" @click="getCompletedSessions()"
          >Completed</v-btn
        >
        <v-btn class="mr-2" text color="primary" @click="getCancelledSessions()"
          >Cancelled</v-btn
        >
      </v-row>
      <div v-for="(session, index) in sessions" :key="index">
        <SingleSession
          :session="session"
          :mentordata="filterMentor(session.mentorId)"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import _ from 'lodash'
// import _ from 'lodash'
import SingleSession from '../sessions/singleSession'

export default {
  layout: 'dashboard',
  components: {
    SingleSession,
  },
  data() {
    return {
      sessions: '',
    }
  },
  // // TODO: Get Session data and data to state
  created() {
    // this.$store.dispatch('sessions/getSessionData')
    this.sessions = this.allSessions
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapState('sessions', {
      // sessions: (state) => state.sessions,
      myMentors: (state) => state.myMentors,
    }),
    ...mapGetters({
      allSessions: 'sessions/allSessions',
      acceptedSessions: 'sessions/acceptedSessions',
      pendingSessions: 'sessions/pendingSessions',
      completedSessions: 'sessions/completedSessions',
      cancelledSessions: 'sessions/cancelledSessions',
    }),
  },
  methods: {
    filterMentor(id) {
      // eslint-disable-next-line no-console
      console.log(`my Sessions: ${this.sessions}`)
      // eslint-disable-next-line no-console
      console.log(`my Mentors: ${this.myMentors}`)
      const targetMentor = this.myMentors.find((mentor) => {
        return mentor.id === id
      })
      // eslint-disable-next-line no-console
      console.log(`target mentor: ${targetMentor}`)
      return targetMentor
    },
    getAcceptedSessions() {
      this.sessions = this.acceptedSessions
    },
    getAllSessions() {
      this.sessions = this.allSessions
    },
    getPendingSessions() {
      this.sessions = this.pendingSessions
    },
    getCompletedSessions() {
      this.sessions = this.completedSessions
    },
    getCancelledSessions() {
      this.sessions = this.cancelledSessions
    },
  },
  head() {
    return {
      title: 'Sessions',
    }
  },
  // methods: {
  //   getSessions() {},
  //   getMentors() {},
  // },
}
</script>

<style></style>
