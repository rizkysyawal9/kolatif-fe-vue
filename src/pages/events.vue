<template>
  <div>
    <v-img
      max-height="400"
      :src="require('../assets/images/event-banner.webp')"
      gradient="to top right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)"
    >
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-col class="white--text text-center" cols="12" tag="h1">
            <span
              class="font-weight-black bigFont"
              :class="[$vuetify.breakpoint.smAndDown ? 'small' : 'large']"
              >Free Online Workshop and Seminars</span
            >
            <br class="my-0" />
            <span
              class="font-weight-light smallFont"
              :class="[$vuetify.breakpoint.smAndDown ? 'small2' : 'large2']"
              >We host live webinars and interviews with leading mentors in the
              industry</span
            >
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container>
      <v-row>
        <v-col v-for="(event, index) in events" :key="index" cols="12" lg="3">
          <Event :event-data="event" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Event from '../components/events/Event'
export default {
  layout: 'dashboard',
  components: {
    Event,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
        {
          id: 1,
          name: 'Product Management Live Chat by Google PM',
          date: 'Thursday, November 5th, 2020',
          time: '9:00AM - 2:00PM',
          status: 'online',
          link: 'https://www.eventbrite.com/',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Events',
    }
  },
}
</script>

<style scoped>
.large {
  font-size: 40px;
}

.small {
  font-size: 40px;
}

.large2 {
  font-size: 25px;
}

.small2 {
  font-size: 20px;
}
</style>
