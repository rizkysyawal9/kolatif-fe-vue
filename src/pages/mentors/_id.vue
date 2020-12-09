<template>
  <!-- <nuxt-child :mentor="mentor"></nuxt-child> -->
  <div>
    <mentor-single :mentor="mentor" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MentorSingle from './_id/index'
export default {
  layout: 'dashboard',
  components: {
    MentorSingle,
  },
  computed: {
    ...mapGetters({
      allMentors: 'mentors/allMentors',
    }),
    mentor() {
      // eslint-disable-next-line eqeqeq
      return this.allMentors.find(v => v.id == this.$route.params.id)
    },
  },
}
</script>

<style></style>
