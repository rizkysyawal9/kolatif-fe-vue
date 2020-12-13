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
              :rules="[required('email'), emailFormat()]"
              outlined
              dense
            />
            <v-text-field
              v-model="registerInfo.password"
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
              prepend-inner-icon="mdi-school-outline"
              label="Campus Name"
              :rules="[required('campus')]"
              outlined
              dense
            />

            <v-text-field
              v-model="registerInfo.major"
              prepend-inner-icon="mdi-book-open-outline"
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
              @click="registerUser"
              :loading="isLoading"
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
import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
export default {
  layout: 'normal',
  data() {
    return {
      uid: '',
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
      isLoading: false,
    }
  },
  methods: {
    async registerUser() {
      this.isLoading = true
      // eslint-disable-next-line no-console
      // console.log(this.registerInfo)
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.registerInfo.email,
            this.registerInfo.password
          )
          .then(user => {
            console.log(user.user.uid)
            this.uid = user.user.uid.toString()
          })

        await firebase
          .firestore()
          .collection('profiles')
          .doc(this.uid)
          .set({
            id: this.uid,
            name: this.registerInfo.name,
            role: 'mentee',
            rating: null,
            reviews: null,
            workExperience: [
              {
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: '',
              },
            ],
            education: [
              {
                campus: this.registerInfo.campus,
                major: this.registerInfo.major,
                startDate: '',
                endDate: '',
              },
            ],
            expertise: '',
            availability: '',
          })
        this.$store.dispatch('user/setUser', this.uid)
        this.isLoading = false
        this.$router.replace({ name: 'mentors' })
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  head() {
    return {
      title: 'Register Mentee',
    }
  },
}
</script>
