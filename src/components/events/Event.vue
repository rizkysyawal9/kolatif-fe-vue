<template>
  <v-card class="mx-auto">
    <v-img
      height="250"
      :src="require('../../assets/images/workshop.jpg')"
    ></v-img>

    <div class="px-3" style="text-align: center">
      <v-card-title>{{ eventData.name }}</v-card-title>

      <v-card-text class="my-0 pb-0">
        <div class="mb-2">{{ eventData.date }}</div>
        <div class="mb-2">{{ eventData.time }}</div>
        <div class="mb-4">{{ eventData.status }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="primary" text block @click="goToWebsite(eventData.link)">
          Get Free Ticket
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToWebsite(link) {
      window.location.href = link
    },
  },
}
</script>

<style scoped></style>
