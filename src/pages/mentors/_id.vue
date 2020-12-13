<template>
  <!-- <nuxt-child :mentor="mentor"></nuxt-child> -->
  <div>
    <!-- <mentor-single :mentor="mentor" /> -->
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
            <v-col cols="12" lg="8" md="10" class="pl-12">
              <h2 style="color: primary">
                {{ mentor.name }}
              </h2>
              <div v-for="(work, index) in mentor.workExperience" :key="index">
                <div v-if="index == 0">
                  <p class="my-0">{{ work.jobTitle }}</p>
                  <p class="py-0 my-0">{{ work.company }}</p>
                </div>
              </div>
              <v-row class="ml-0">
                <v-rating
                  :value="mentor.rating"
                  color="primary"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <span> &nbsp; {{ mentor.rating }} </span>
                <span> &nbsp;({{ mentor.reviews }}) </span>
              </v-row>
              <p></p>
            </v-col>
            <v-col cols="12" lg="2">
              <BookDialog :mentor="mentor" />
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          <v-col cols="12" lg="9">
            <v-card class="pa-2" outlined>
              <v-card-text>
                <h2>Expertise</h2>
                <v-chip-group class="mt-3">
                  <div
                    v-for="(expertise, index) in mentor.expertise"
                    :key="index"
                  >
                    <v-chip class="mr-2" color="primary ">{{
                      expertise
                    }}</v-chip>
                  </div>
                </v-chip-group>
                <v-divider class="mt-3 mb-5"></v-divider>
                <h2 class="mt-3">My Working Experience</h2>
                <div
                  v-for="(experience, index) in mentor.workExperience"
                  :key="index"
                  class="mt-3"
                >
                  <v-row>
                    <v-col cols="12" lg="1" md="1">
                      <v-img
                        :src="require('@/assets/images/company.webp')"
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
                <v-divider class="mt-3 mb-5"></v-divider>
                <h2 class="mt-3">My Education</h2>
                <div
                  v-for="(education, index) in mentor.education"
                  :key="index"
                  class="mt-3"
                >
                  <v-row>
                    <v-col cols="12" lg="1" md="1">
                      <v-img
                        :src="require('@/assets/images/education.png')"
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
          <v-col cols="12" lg="3" v-if="mentors($route.params.id)">
            <v-card class="pa-4" outlined>
              <v-card-text>
                <h3 class="mb-4">Other Top Rated Mentors</h3>

                <div
                  v-for="(teacher, index) in mentors($route.params.id)"
                  :key="index"
                >
                  <router-link
                    :to="`/dashboard/mentors/${teacher.id}`"
                    class="links"
                  >
                    <h3 style="color: black">
                      {{ teacher.name }}
                    </h3>
                    <p style="line-height: 18px" class="mt-1">
                      {{ teacher.workExperience[0].jobTitle }} at
                      {{ teacher.workExperience[0].company }}
                    </p>
                  </router-link>
                  <v-divider class="mb-3"></v-divider>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MentorSingle from './_id/index'
import BookDialog from '@/components/mentors/BookDialog'
import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

export default {
  layout: 'dashboard',
  components: {
    MentorSingle,
    BookDialog,
  },
  head() {
    return {
      title: this.mentor.name,
    }
  },

  computed: {
    ...mapGetters({
      allMentors: 'mentors/allMentors',
      mentors: 'mentors/someMentors',
    }),
    mentor() {
      return this.allMentors.find(v => v.id == this.$route.params.id)
    },
  },
}
</script>

<style>
.links {
  text-decoration: none;
  color: black;
}

.links:hover {
  text-decoration: underline;
}
</style>
