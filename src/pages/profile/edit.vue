<template>
  <div class="pb-12">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="2">
          <v-img
            :src="require('@/assets/images/sandbox.jpg')"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6" md="10" class="pl-12">
          <v-text-field v-model="userTemp.name" label="Name" outlined dense>
          </v-text-field>

          <v-btn class="mt-2 text-none" color="primary">Save</v-btn>

          <!-- <BookDialog :mentor="mentor" /> -->
        </v-col>
        <v-col cols="12" lg="4"></v-col>
      </v-row>

      <h2 class="mt-3">My Experience</h2>
      <div
        v-for="experience in userTemp.workExperience"
        :key="experience.id"
        class="mt-3"
      >
        <v-row>
          <v-col cols="12" lg="1" md="1">
            <v-img
              :src="require('../../assets/images/img-placeholder.jpg')"
              max-width="100"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="10" md="10">
            <p class="my-0">
              <v-text-field
                v-model="experience.jobTitle"
                label="Job Title"
                outlined
                dense
              >
              </v-text-field>
            </p>
            <v-text-field
              v-model="experience.company"
              label="Company/Organization"
              outlined
              dense
            >
            </v-text-field>
            <v-menu
              ref="menuStartDate"
              v-model="menuStartDate"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dura"
                  label="Date"
                  hint="YYYY/MM/DD format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="experience.startDate"
                no-title
                @input="menuStartDate = false"
              ></v-date-picker>
            </v-menu>
            <p class="my-0">{{ experience.company }}</p>
            <p class="my-0">{{ experience.startDate }}</p>
            <p class="my-0">{{ experience.endDate }}</p>
          </v-col>
        </v-row>
      </div>
      <h2 class="mt-3">My Education</h2>
      <div
        v-for="(education, index) in user.education"
        :key="index"
        class="mt-3"
      >
        <v-row>
          <v-col cols="12" lg="1" md="1">
            <v-img
              :src="require('../../assets/images/img-placeholder.jpg')"
              max-width="100"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="10" md="10">
            <p class="my-0">
              <b>{{ education.campus }}</b>
            </p>
            <p class="my-0">{{ education.major }}</p>
            <p class="my-0">{{ education.startDate }}</p>
            <p class="my-0">{{ education.endDate }}</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
export default {
  layout: 'dashboard',
  data() {
    return {
      userTemp: {},
      menuStartDate: '',
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user,
    }),
  },
  created() {
    this.userTemp = _.cloneDeep(this.user)
    // eslint-disable-next-line no-console
    console.log(this.userTemp)
    // eslint-disable-next-line no-console
    console.log(this.userTemp.name)
  },
}
</script>

<style></style>
