<template>
  <!-- <v-container class="fill-height" fluid> -->
  <div>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <!-- <div v-if="error.statusCode == 404">
      <v-row justify="center" align="center">
        <v-col cols="4"> Heyyo </v-col>
        <v-col cols="8"> Network </v-col>
      </v-row>
    </div> -->
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
  <!-- </v-container> -->
</template>

<script>
export default {
  layout: 'normal',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
