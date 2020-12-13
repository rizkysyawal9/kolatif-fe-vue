<template>
  <div>
    <v-container>
      <v-row class="mx-5">
        <v-btn class="mr-2" text color="primary" @click="getAllSessions()"
          >All Session</v-btn
        >
        <!-- <v-btn class="mr-2" text color="primary" @click="getAcceptedSessions()"
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
        > -->
      </v-row>
      <div v-if="sessions.length > 0 && user.role == 'mentee'">
        <div v-for="(session, index) in sessions" :key="index">
          <SingleSession
            :session="session"
            :mentordata="filterMentor(session.toMentorId)"
          />
        </div>
      </div>
      <div v-else-if="sessions.length > 0 && user.role == 'mentor'">
        <div v-for="(session, index) in sessions" :key="index">
          <SingleSession
            :session="session"
            :menteedata="filterMentee(session.fromMenteeId)"
            @update="updateAll"
          />
        </div>
      </div>
      <div v-else class="center">
        <img
          src="@/assets/icons/loader.gif"
          alt=""
          style="max-width: 250px; margin-top: 60px"
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
import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

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
    // this.sessions = this.allSessions
  },
  async mounted() {
    this.$store.dispatch('mentees/loadMentees')
    console.log(this.$store.state.user.user)
    this.getAllSessions()
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapState('sessions', {
      // sessions: (state) => state.sessions,
      myMentors: state => state.myMentors,
    }),
    ...mapGetters({
      user: 'user/user',
      allMentors: 'mentors/allMentors',
      allMentees: 'mentees/allMentees',
      allMenteeSessions: 'sessions/allMenteeSessions',
      allMentorSessions: 'sessions/allMentorSessions',

      // acceptedSessions: 'sessions/acceptedSessions',
      // pendingSessions: 'sessions/pendingSessions',
      // completedSessions: 'sessions/completedSessions',
      // cancelledSessions: 'sessions/cancelledSessions',
    }),
  },
  watch: {
    allMenteeSessions: function(val) {
      console.log(val)
      this.getAllSessions()
    },
    allMentorSessions: function(val) {
      console.log(val)
      this.getAllSessions()
    },
    allMentees: function(val) {
      console.log(val)
      this.getAllSessions()
    },
  },
  methods: {
    updateAll() {
      this.$store.dispatch('mentees/loadMentees')
    },
    filterMentor(id) {
      // eslint-disable-next-line no-console
      console.log(`my Sessions: ${this.sessions}`)
      // eslint-disable-next-line no-console
      console.log(`my Mentors: ${this.myMentors}`)
      // const targetMentor = this.myMentors.find(mentor => {
      //   return mentor.id === id
      // })
      const targetMentor = this.allMentors.find(mentor => {
        return mentor.id == id
      })
      // eslint-disable-next-line no-console
      console.log(`target mentor: ${targetMentor}`)
      return targetMentor
    },
    filterMentee(id) {
      const targetMentor = this.allMentees.find(mentee => {
        return mentee.id == id
      })
      return targetMentor
    },
    getAcceptedSessions() {
      this.sessions = this.acceptedSessions
    },
    getAllSessions() {
      console.log('access')
      if (this.user.role == 'mentee') this.sessions = this.allMenteeSessions
      else this.sessions = this.allMentorSessions
      console.log(this.sessions.length)
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

<style>
.center {
  text-align: center;
}
</style>
