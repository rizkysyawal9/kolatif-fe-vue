<template>
  <div class="pb-12">
    <v-container>
      <v-card class="py-6 px-4" outlined>
        <v-row justify="center" align="center">
          <v-col cols="12" lg="2">
            <v-img
              :src="require('../../assets/images/joseph.jpeg')"
              aspect-ratio="1"
              style="border-radius: 50%; max-width: 150px"
              class="ml-4"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="8" md="10" class="pl-12">
            <h2>
              {{ user.name }}
            </h2>
            <div v-for="(work, index) in user.workExperience" :key="index">
              <div v-if="index == 0">
                <p class="my-0">{{ work.jobTitle }}</p>
                <p class="py-0 my-0">{{ work.company }}</p>
              </div>
            </div>
            <v-btn class="mt-2 text-none" color="primary">Edit Profile</v-btn>
            <!-- <BookDialog :mentor="mentor" /> -->
          </v-col>
          <v-col cols="12" lg="2" md="10" class="pl-12">
            <v-btn to="/dashboard/profile/edit" color="primary"
              >Edit Profile</v-btn
            >
            <!-- <BookDialog :mentor="mentor" /> -->
          </v-col>
        </v-row>
      </v-card>

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
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'dashboard',
  computed: {
    ...mapState('user', {
      user: state => state.user,
    }),
  },
  head() {
    return {
      title: 'Profile',
    }
  },
}
</script>

<style></style>
