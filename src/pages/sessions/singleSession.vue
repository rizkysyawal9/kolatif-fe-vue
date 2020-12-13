<template>
  <v-card class="mx-5 mt-5 pa-3">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline pb-0">{{ profile.name }}</v-card-title>

        <v-card-text class="pb-0 pt-0">
          <div v-for="(work, index) in profile.workExperience" :key="index">
            <div v-if="index == 0" class="mt-2">
              {{ work.jobTitle }} at {{ work.company }}
            </div>
          </div>
          <div class="mt-1">
            Status:
            <span>
              <v-chip label :color="status" small style="color: white">
                {{ session.status }}
              </v-chip>
            </span>
          </div>
          <div class="mt-1">Date: {{ session.date }} at {{ session.time }}</div>
          <div
            v-if="session.status == 'Accepted' || session.status == 'Completed'"
            class="mt-1"
          >
            Google Meet: {{ session.gmeetLink }}
          </div>
        </v-card-text>

        <v-card-actions class="pb-0" v-if="menteedata == undefined">
          <v-btn
            v-if="session.status === 'Cancelled'"
            text
            color="red"
            @click="show_modal_decline = true"
            >View Reason</v-btn
          >
          <v-btn
            v-if="session.status === 'Cancelled'"
            text
            color="red"
            @click="deleteSession"
            >Delete</v-btn
          >
          <v-btn
            v-if="session.status === 'Accepted'"
            color="primary"
            text
            @click="completeMeeting"
          >
            Complete Meeting
          </v-btn>
          <v-btn
            v-else-if="session.status === 'Completed'"
            text
            color="primary"
          >
            Leave a Review
          </v-btn>
          <v-btn
            v-else
            text
            color="primary"
            :to="`/dashboard/mentors/${profile.id}`"
            >Mentor Detail</v-btn
          >
        </v-card-actions>
        <v-card-actions class="pb-0" v-else-if="mentordata == undefined">
          <v-btn text color="primary" @click="showModalGmeet">Accept</v-btn>
          <v-btn text style="color: red" @click="showModalMessage">
            Decline
          </v-btn>
        </v-card-actions>
      </div>
      <v-dialog v-model="show_modal_gmeet" max-width="500px">
        <v-card>
          <v-card-title> Accept Session with {{ profile.name }}? </v-card-title>
          <v-card-text class="pb-0 mb-0">
            <v-text-field
              label="Google Meet Link"
              single-line
              outlined
              dense
              class="mt-3"
              v-model="gmeetLink"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              color="primary"
              text
              @click="sendGmeetLink"
              class="ml-auto"
              :loading="isLoading"
            >
              Send
            </v-btn>
            <v-btn color="primary" text @click="show_modal_gmeet = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="show_modal_message" max-width="500px">
        <v-card>
          <v-card-title>
            Decline Session with {{ profile.name }}?
          </v-card-title>
          <v-card-text class="pb-0 mb-0">
            <v-textarea
              label="Send Decline Message"
              single-line
              outlined
              class="mt-3"
              v-model="message"
            ></v-textarea>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              color="primary"
              text
              @click="sendMessage"
              class="ml-auto"
              :loading="isLoading"
            >
              Send
            </v-btn>
            <v-btn color="primary" text @click="show_modal_message = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="show_modal_decline" max-width="500px">
        <v-card>
          <v-card-title>
            Reason of Decline
          </v-card-title>
          <v-card-text class="pb-0 mb-0">
            <p>{{ session.message }}</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn color="primary" text @click="show_modal_decline = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-avatar class="ma-3" size="180" tile>
        <v-img :src="require('@/assets/images/sandbox.jpg')"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import { mapGetters } from 'vuex'
export default {
  props: {
    session: {
      type: Object,
      default: {},
    },
    mentordata: {
      type: Object,
    },
    menteedata: {
      type: Object,
    },
  },
  data() {
    return {
      profile: {},
      show_modal_gmeet: false,
      show_modal_message: false,
      show_modal_decline: false,
      gmeetLink: '',
      message: '',
      isLoading: false,
    }
  },
  mounted() {
    if (this.menteedata != undefined) this.profile = this.menteedata
    else if (this.mentordata != undefined) this.profile = this.mentordata
  },
  watch: {
    mentordata: function(val) {
      this.profile = this.mentordata
      console.log(this.profile)
    },
    menteedata: function(val) {
      this.profile = this.menteedata
      console.log(this.profile)
    },
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
    }),
    status() {
      if (this.session.status === 'Pending') return 'orange'
      else if (this.session.status === 'Accepted') return 'green'
      else if (this.session.status === 'Cancelled') return 'red'
      else return 'black'
    },
  },
  methods: {
    async completeMeeting() {
      //TODO Give Review
      await this.deleteSession()
    },
    async deleteSession() {
      console.log(this.mentordata)
      console.log(this.user)
      const sessionId = `${this.user.id}-${this.mentordata.id}`
      await firebase
        .firestore()
        .collection('sessions')
        .doc(sessionId)
        .delete()
      this.show_modal_decline = false
      window.location.reload()
    },
    showModalGmeet() {
      console.log('gmeet')
      this.show_modal_gmeet = true
    },
    showModalMessage() {
      console.log('message')
      this.show_modal_message = true
    },
    async sendGmeetLink() {
      this.isLoading = true
      console.log(this.menteedata)
      const sessionId = `${this.menteedata.id}-${this.user.id}`
      console.log(sessionId)
      await firebase
        .firestore()
        .collection('sessions')
        .doc(sessionId)
        .update({
          status: 'Accepted',
          gmeetLink: this.gmeetLink,
        })
      this.isLoading = false
      this.$emit('update')
      this.show_modal_gmeet = false
      window.location.reload()
    },
    async sendMessage() {
      this.isLoading = true
      console.log(this.menteedata)
      const sessionId = `${this.menteedata.id}-${this.user.id}`
      console.log(sessionId)
      await firebase
        .firestore()
        .collection('sessions')
        .doc(sessionId)
        .update({
          status: 'Cancelled',
          gmeetLink: '',
          message: this.message,
        })
      this.isLoading = false
      this.$emit('update')
      this.show_modal_message = false
      window.location.reload()
    },
  },
}
</script>

<style></style>
