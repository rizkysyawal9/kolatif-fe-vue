<template>
  <v-footer padless>
    <v-col cols="12" class="pa-0">
      <v-card flat tile class="primary lighten-1 white--text text-center">
        <!-- <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider> -->

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Kolatif Valley</strong>
        </v-card-text>
      </v-card>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>
