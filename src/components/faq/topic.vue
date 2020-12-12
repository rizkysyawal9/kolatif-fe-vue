<template>
  <v-col cols="12" lg="3" md="3">
    <v-card>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-0">
            {{ topic.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ topic.description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile :size="size">
          <img :src="image" alt="" />
          <!-- <img src="@/assets/icons/account.svg" alt="" /> -->
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      default: {},
    },
    size: {
      type: Number,
      default: 80,
    },
  },
  mounted() {
    // console.log(this.topic.image)
    // console.log(this.image)
  },
  computed: {
    image() {
      return require(`@/assets/icons/${this.topic.image}.svg`)
    },
  },
}
</script>

<style></style>
