<template>
  <v-container class="fill-height grey lighten-4" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pl-8 pb-8 pr-8 pt-6">
          <v-img
            class="mx-12 mb-4"
            :src="require('~/assets/images/logo.png')"
            alt="atourin"
            contain
          />
          <div style="text-align: center" class="pb-4">
            <h2>Hello Future Member!</h2>
          </div>

          <v-btn
            block
            class="text-none primmary"
            color="primary"
            large
            outlined
            to="/register/mentee"
            >Create account as Mentee</v-btn
          >
          <v-btn
            block
            class="text-none primmary mt-3"
            color="primary"
            large
            to="/register/mentor"
            >Create account as Mentor</v-btn
          >
        </v-card>
      </v-col>
      <div></div>
    </v-row>
  </v-container>
</template>

<script>
import validation from '~/utils/validation'
export default {
  layout: 'normal',
  data() {
    return {
      rePassword: '',
      registerInfo: {
        name: '',
        email: '',
        password: '',
        campus: '',
      },
      showPassword: false,
      ...validation,
      valid: false,
    }
  },
  methods: {
    loginUser() {
      // TODO LOGIN FUNCTION
    },
  },
  head() {
    return {
      title: 'Register',
    }
  },
}
</script>
