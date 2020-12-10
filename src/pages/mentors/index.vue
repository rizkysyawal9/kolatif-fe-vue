<template>
  <div>
    <v-container>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-card class="pt-8 pr-8 pl-8">
            <v-text-field
              v-model="searchText"
              single-line
              label="Search mentors"
              outlined
              append-icon="mdi-magnify"
              @click:append="search"
            >
            </v-text-field>
          </v-card>
        </v-col>
        <v-col v-for="item in mentors" :key="item.id" cols="12" lg="4" md="4">
          <Mentors :mentor-data="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Mentors from '../../components/mentors/Mentors'
export default {
  layout: 'dashboard',
  components: {
    Mentors,
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    ...mapGetters({
      mentors: 'mentors/allMentors',
    }),
  },
  created() {
    // TODO: dispatch api call to get mentors
  },
  methods: {
    search() {
      // eslint-disable-next-line no-console
      console.log('It Works')
    },
  },
  head() {
    return {
      title: 'Mentors',
    }
  },
}
</script>

<style></style>
