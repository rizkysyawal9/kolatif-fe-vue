<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Book Mentor </v-btn>
    </template>
    <v-form v-model="valid">
      <v-card>
        <v-card-title>
          <span>Book a Mentor</span>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-container class="py-0">
            <v-row justify="center" align="center">
              <v-col cols="4">
                <v-img :src="require('~/assets/images/booking.png')"></v-img>
              </v-col>
              <v-col cols="8">
                <h2>Rules to Follow</h2>
                <ul class="mt-2">
                  <li>Always be on time</li>
                  <li>Have your own laptop</li>
                  <li>On camera always</li>
                  <li>If you need to reschedule, e-mail mentors</li>
                </ul>
              </v-col>
            </v-row>
            <h2 class="mt-2">Availability</h2>
            <p class="mt-2">
              {{ mentor.availability }}
            </p>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="book.date"
                  label="Date"
                  hint="YYYY/MM/DD format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  :rules="[required('date')]"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="book.date"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="book.time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="book.time"
                  label="Picker in menu"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  :rules="[required('time')]"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="book.time"
                full-width
                @click:minute="$refs.menu2.save(book.time)"
              ></v-time-picker>
            </v-menu>
          </v-container>
        </v-card-text>
        <v-card-actions class="pr-8 pb-6">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" outlined @click="closeDialog">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            class="white--text"
            :disabled="!valid"
            @click="bookMentor"
          >
            Book
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import validation from '~/utils/validation'
export default {
  props: {
    mentor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ...validation,
      valid: false,
      dialog: false,
      // dateFormatted: formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      book: {
        fromMenteeid: '',
        toMentorid: '',
        date: '',
        time: null,
      },
    }
  },
  methods: {
    closeDialog() {
      this.book.date = null
      this.book.time = null
      this.dialog = false
    },
    async bookMentor() {
      // TODO: Get Mentee ID
      this.book.fromMenteeid = 1
      this.book.toMentorid = this.mentor.id
      // eslint-disable-next-line no-console
      console.log(this.book)
      // TODO: API Call to Backend inputing book Object
      // const book = this.book
      const snackbar = {
        showing: true,
        text: 'Successfully Booked Mentor',
      }
      // await this.$store.dispatch('mentors/bookMentor', {
      //   book,
      //   snackbar,
      // })
      await this.$store.dispatch('snackbar/setSnackbar', {
        snackbar,
      })
      this.dialog = false
    },
  },
}
</script>

<style></style>
