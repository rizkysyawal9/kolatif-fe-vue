<template>
  <v-row align="center" justify="center" class="grey lighten-4">
    <v-col cols="12" sm="8" md="4">
      <v-container class="pa-12 logo">
        <nuxt-link to="/">
          <v-img
            :src="require('../assets/images/logo.png')"
            alt="atourin"
            contain
          />
        </nuxt-link>
      </v-container>
      <v-card class="pa-8">
        <div>
          <strong>Login to your account</strong>
        </div>
        <br />
        <v-form v-model="valid">
          <v-text-field
            v-model="loginInfo.email"
            prepend-inner-icon="mdi-email-outline"
            label="Email"
            :rules="[required('email'), emailFormat()]"
            outlined
            dense
            class="mb-2"
          />
          <v-text-field
            v-model="loginInfo.password"
            prepend-inner-icon="mdi-lock-outline"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            counter="true"
            :rules="[required('password'), minLength('password', 8)]"
            outlined
            dense
            @click:append="showPassword = !showPassword"
          />
          <v-checkbox
            v-model="rememberMe"
            label="Remember Me"
            class="rememberMe"
          ></v-checkbox>

          <v-btn
            block
            :disabled="!valid"
            class="text-none"
            color="primary"
            @click="loginUser"
            >Sign In</v-btn
          >
        </v-form>
      </v-card>
      <p class="mt-6 text-center">
        Don't have an account yet?
        <nuxt-link to="/register/mentee">Sign Up</nuxt-link>
      </p>
    </v-col>
    <div></div>
  </v-row>
</template>

<script>
import validation from '~/utils/validation'
export default {
  layout: 'normal',
  data() {
    return {
      loginInfo: {
        email: '',
        password: '',
      },
      showPassword: false,
      ...validation,
      valid: false,
      rememberMe: false,
    }
  },
  methods: {
    loginUser() {
      // TODO LOGIN FUNCTION
    },
  },
}
</script>

<style scoped>
/* .title {
  margin-bottom: 20px;
} */
.rememberMe {
  margin-top: 0;
}
.logo {
  margin-bottom: -20px;
}
</style>
