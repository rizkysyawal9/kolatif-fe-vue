<template>
  <v-container class="fill-height grey lighten-4" fluid>
    <v-row align="center" justify="center" class="grey lighten-4">
      <v-col cols="12" sm="8" md="4">
        <v-container class="pa-12 logo">
          <router-link to="/">
            <v-img
              :src="require('../assets/images/logo.png')"
              alt="atourin"
              contain
            />
          </router-link>
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
            <v-btn
              block
              :disabled="!valid"
              class="text-none"
              color="primary"
              @click="loginUser"
              :loading="isLoading"
              >Sign In</v-btn
            >
          </v-form>
          <div style="color: red; margin-top: 10px">{{ error }}</div>
        </v-card>
        <p class="mt-6 text-center">
          Don't have an account yet?
          <router-link to="/register/mentee">Sign Up</router-link>
        </p>
      </v-col>
      <div></div>
    </v-row>
  </v-container>
</template>

<script>
import validation from '../utils/validation'
import { firebase } from '@firebase/app'
import '@firebase/auth'
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
      error: '',
      isLoading: false,
    }
  },
  watch: {
    loginInfo: {
      handler(newValue) {
        this.error = ''
      },
      deep: true,
    },
  },
  methods: {
    async loginUser() {
      // TODO LOGIN FUNCTION
      try {
        this.isLoading = true
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(
            this.loginInfo.email,
            this.loginInfo.password
          )
        console.log(user)
        this.isLoading = false
        this.$router.replace({ name: 'mentors' })
      } catch (e) {
        console.log(e.message)
        this.isLoading = false
        this.error = e.message
      }
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
