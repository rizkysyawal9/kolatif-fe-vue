<template>
  <div>
    <v-carousel :show-arrows="false" cycle hide-delimiters height="550">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img
          :src="item.src"
          aspect-ratio="2.6"
          gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row align="center">
        <v-col cols="7">
          <v-img :src="require('../assets/images/banner.webp')"></v-img>
        </v-col>
        <v-col cols="5">
          <h1>What Kolatif Valley is all about</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            adipisci error odio consectetur consequuntur vel illo maxime nam ut
            porro harum accusamus, incidunt possimus voluptate facilis quibusdam
            debitis corporis minima.
          </p>
        </v-col>
      </v-row>
      <div class="center">
        <v-row align="center" justify="center">
          <v-col class="white--text text-center" tag="h1">
            <span
              class="font-weight-black bigFont"
              style="line-height: 0.5"
              :class="[$vuetify.breakpoint.smAndDown ? 'small' : 'large']"
              >Connecting mentees and mentors anywhere, anytime.
            </span>
            <br class="my-0" />
            <div
              style="line-height: 1.3"
              class="font-weight-light smallFont mt-3"
              :class="[$vuetify.breakpoint.smAndDown ? 'small2' : 'large2']"
            >
              Mentors exist to help guide people in finding answers needed to
              navigate challenges and progress.
            </div>
            <div class="mt-4">
              <v-btn color="primary" to="/dashboard/mentors" class="mr-3"
                >Find your mentor!</v-btn
              >
              <v-btn
                class="primary--text"
                to="/register/mentor"
                v-if="!loggedIn"
                >Become a Mentor!</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </div>
      <v-divider class="mb-8"></v-divider>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1>Featured by Kolatif</h1>
          <!-- <Featured /> -->
          <featured />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="text-center">
          <h1>Events & Workshop</h1>
          <!-- <Events /> -->
          <events />
        </v-col>
      </v-row>

      <!-- NEWSLETTER -->
      <v-divider class="my-8"></v-divider>
      <!-- <Newsletter /> -->
      <newsletter />
    </v-container>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import 'firebase/auth'
import Events from '../components/index/Events'
import Featured from '../components/index/Featured'
import Newsletter from '../components/index/Newsletter'
export default {
  components: {
    Newsletter,
    Featured,
    Events,
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user
      console.log(user)
    })
  },
  data() {
    return {
      loggedIn: false,
      items: [
        {
          src: require('../assets/images/header-1.webp'),
        },
        {
          src: require('../assets/images/header-2.webp'),
        },
        {
          src: require('../assets/images/header-3.webp'),
        },
      ],
    }
  },
  head() {
    return {
      title: 'Kolatif',
      titleTemplate: '%s - Connecting mentors and mentees everywhere',
    }
  },
}
</script>

<style scoped>
.center {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
