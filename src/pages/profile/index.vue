<template>
  <div class="pb-12">
    <v-container>
      <v-card class="py-6 px-4" outlined>
        <v-row justify="center" align="center">
          <v-col cols="12" lg="2">
            <v-img
              :src="require('@/assets/images/sandbox.jpg')"
              aspect-ratio="1"
              style="border-radius: 50%; max-width: 150px"
              class="ml-4"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="6" md="10" class="pl-12">
            <h2 style="color: primary">
              {{ user.name }}
            </h2>
            <div v-for="(work, index) in user.workExperience" :key="index">
              <div v-if="index == 0">
                <p class="my-0">{{ work.jobTitle }}</p>
                <p class="py-0 my-0">{{ work.company }}</p>
              </div>
            </div>
            <!-- <BookDialog :mentor="mentor" /> -->
          </v-col>
          <v-col cols="12" lg="4" md="10">
            <div class="text-center">
              <v-btn to="/dashboard/profile/edit" color="primary" class="mr-3"
                >Edit Profile</v-btn
              >
              <v-btn
                color="primary"
                class="mr-auto"
                outlined
                @click="signOut"
                :loading="isLoading"
                >Sign Out</v-btn
              >
            </div>
            <!-- <BookDialog :mentor="mentor" /> -->
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-2">
            <v-card-text>
              <div v-if="user.role == 'mentor'">
                <h2>Expertise</h2>
                <v-chip-group class="mt-3">
                  <div
                    v-for="(expertise, index) in user.expertise"
                    :key="index"
                  >
                    <v-chip class="mr-2" color="primary ">{{
                      expertise
                    }}</v-chip>
                  </div>
                </v-chip-group>
              </div>
              <h2 class="mt-3">My Experience</h2>
              <div
                v-for="experience in user.workExperience"
                :key="experience.id"
                class="mt-3"
              >
                <v-row>
                  <v-col cols="12" lg="1" md="1">
                    <v-img
                      :src="require('../../assets/images/company.webp')"
                      max-width="100"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" lg="10" md="10">
                    <p class="my-0">
                      <b>{{ experience.jobTitle }}</b>
                    </p>
                    <p class="my-0">{{ experience.company }}</p>
                    <p class="my-0">
                      {{ experience.startDate }} - {{ experience.endDate }}
                    </p>
                  </v-col>
                </v-row>
              </div>
              <h2 class="mt-3">My Education</h2>
              <div
                v-for="(education, index) in user.education"
                :key="index"
                class="mt-3"
              >
                <v-row align="center">
                  <v-col cols="12" lg="1" md="1">
                    <v-img
                      :src="require('../../assets/images/education.png')"
                      class="ml-4"
                      max-width="50"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" lg="10" md="10">
                    <p class="my-0">
                      <b>{{ education.campus }}</b>
                    </p>
                    <p class="my-0">{{ education.major }}</p>
                    <p class="my-0">
                      {{ education.startDate }} - {{ education.endDate }}
                    </p>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import 'firebase/auth'
import { mapState } from 'vuex'
export default {
  layout: 'dashboard',
  head() {
    return {
      title: 'Profile',
    }
  },
  data() {
    return {
      isLoading: false,
      // user: {},
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user,
    }),
  },
  methods: {
    async signOut() {
      try {
        this.isLoading = true
        await firebase.auth().signOut()
        this.isLoading = false
        this.$router.replace({ name: 'landing' })
      } catch (e) {
        console.log(e.message)
      }
    },
  },
}
</script>

<style></style>
