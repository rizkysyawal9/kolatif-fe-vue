<template>
  <v-row>
    <v-col v-for="item in workshop" :key="item.id" cols="12" lg="3">
      <v-card class="mx-auto" max-width="400" flat outlined>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>
          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-btn block outlined color="primary" class="text-none"
          >Lihat Semua Event dan Workshop</v-btn
        >
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      workshop: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    }
  },
}
</script>
