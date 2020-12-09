<template>
  <v-container fluid class="fill-height grey lighten-4">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-container class="pa-8 logo">
          <nuxt-link to="/">
            <v-img
              :src="require('~/assets/images/logo.png')"
              alt="atourin"
              contain
            />
          </nuxt-link>
        </v-container>
        <v-card class="pl-8 pb-8 pr-8 pt-6">
          <div style="text-align: center" class="pb-2">
            <h2>Hello Future Mentor!</h2>
            <p class="mt-2">
              Want to sign up as a
              <nuxt-link to="/register/mentee">mentee?</nuxt-link>
            </p>
          </div>
          <v-form v-model="valid">
            <v-text-field
              v-model="registerInfo.name"
              prepend-inner-icon="mdi-account-outline"
              label="Name"
              :rules="[required('nama')]"
              outlined
              dense
            />

            <v-combobox
              v-model="registerInfo.experitse"
              :items="expertise"
              hide-selected
              hint="You can choose more than one expertise"
              label="Expertise"
              multiple
              persistent-hint
              small-chips
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-iframe-outline"
              :rules="[required('expertise')]"
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-combobox>
            <v-text-field
              v-model="registerInfo.jobTitle"
              prepend-inner-icon="mdi-briefcase-outline"
              label="Current job title"
              :rules="[required('Job title')]"
              outlined
              dense
            />
            <v-text-field
              v-model="registerInfo.company"
              prepend-inner-icon="mdi-file-table-box-outline"
              label="Company"
              :rules="[required('company')]"
              outlined
              dense
            />

            <v-btn
              block
              :disabled="!valid"
              class="text-none primmary"
              color="primary"
              @click="registerUser"
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
        experitse: [],
        jobTitle: '',
        company: '',
      },
      expertise: [
        'Software Engineering',
        'UI/UX Design',
        'Illustration Design',
        'Graphic Design',
        'Public Speaking',
        'Leadership',
        'Product Management',
        'Digital Marketing',
        'Human Resource',
      ],
      showPassword: false,
      ...validation,
      valid: false,
    }
  },
  methods: {
    registerUser() {
      // eslint-disable-next-line no-console
      console.log(this.registerInfo)
    },
  },
  head() {
    return {
      title: 'Register Mentor',
    }
  },
}
</script>
