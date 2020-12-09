<template>
  <v-card>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="require('~/assets/images/joseph.jpeg')"></v-img>

    <v-card-title class="pb-2">{{ mentorData.name }}</v-card-title>

    <v-card-text class="pb-2">
      <v-row align="center" class="mx-0">
        <v-rating
          :value="mentorData.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ mentorData.rating }} &nbsp; ({{ mentorData.reviews }})
        </div>
      </v-row>

      <div
        v-for="(work, index) in mentorData.workExperience"
        :key="index"
        class="mt-2 subtitle-1"
      >
        <div v-if="index == 0">{{ work.jobTitle }} at {{ work.company }}</div>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="pb-0 pt-2"> Expertise</v-card-title>

    <v-card-text class="pt-0 mt-0 pb-2">
      <v-chip-group column>
        <div v-for="expertise in mentorData.expertise" :key="expertise">
          <v-chip>{{ expertise }}</v-chip>
        </div>
        <v-chip draggable>teset</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-divider class="mx-4 mb-2"></v-divider>

    <v-card-actions class="pt-0">
      <v-btn color="primary " block text :to="`/mentors/${mentorData.id}`">
        View Mentor Profile
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    mentorData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
