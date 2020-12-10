<template>
  <v-container fluid class="fill-height grey lighten-4">
    <v-row align="center" justify="center" class="grey lighten-4">
      <v-col cols="12" sm="8" md="4">
        <v-container class="pa-8 logo">
          <router-link to="/">
            <v-img
              :src="require('../../assets/images/logo.png')"
              alt="atourin"
              contain
            />
          </router-link>
        </v-container>
        <v-card class="pl-8 pb-8 pr-8 pt-6">
          <div style="text-align: center" class="pb-2">
            <h2>Hello Future Mentee!</h2>
            <p class="mt-2">
              Want to sign up as a
              <router-link to="/register/mentor">mentor?</router-link>
            </p>
          </div>
          <v-form v-model="valid">
            <v-text-field
              v-model="registerInfo.email"
              prepend-inner-icon="mdi-email-outline"
              label="Email"
              :rules="[required('email')]"
              outlined
              dense
            />
            <v-text-field
              v-model="registerInfo.password"
              prepend-inner-icon="mdi-lock-outline"
              label="password"
              :rules="[required('password')]"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="registerInfo.name"
              prepend-inner-icon="mdi-account-outline"
              label="Name"
              :rules="[required('nama')]"
              outlined
              dense
            />

            <v-text-field
              v-model="registerInfo.campus"
              prepend-inner-icon="mdi-account-outline"
              label="Campus Name"
              :rules="[required('campus')]"
              outlined
              dense
            />

            <v-text-field
              v-model="registerInfo.major"
              prepend-inner-icon="mdi-account-outline"
              label="Major"
              :rules="[required('major')]"
              outlined
              dense
            />

            <v-btn
              block
              :disabled="!valid"
              class="text-none primmary"
              color="primary"
              @click="register"
              >Create a new Account</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
      <div></div>
    </v-row>
  </v-container>
</template>

<script>
import validation from '../../utils/validation'
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
        major: '',
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
      title: 'Register Mentee',
    }
  },
}
</script>
