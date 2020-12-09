<template>
  <v-row align="center" justify="center" class="mt-8 mb-12">
    <v-col cols="7">
      <v-card flat outlined>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div class="pl-3 pt-3 pb-3">
            <v-card-title class="headline mb-3"
              >Bergabung dengan newsletter kami</v-card-title
            >
            <v-card-subtitle
              >Berlangganan newsletter mingguan kami untuk mendapatkan informasi
              dan penawaran menarik kami lainnya.</v-card-subtitle
            >
            <v-text-field
              prepend-inner-icon="mdi-email-outline"
              label="Email"
              outlined
              dense
              class="mx-4 pb-0 mb-0"
            />
            <div class="mr-7">
              <v-btn class="ml-3 mr-6 mb-3 mt-0 pt-0" block color="primary"
                >Subscribe</v-btn
              >
            </div>
          </div>
          <v-avatar class="ma-3 mt-5" size="200" tile>
            <v-img :src="require('../../assets/images/email.webp')"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
<style></style>
