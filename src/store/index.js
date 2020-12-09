import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import mentors from './mentors'
import sessions from './sessions'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    mentors,
    sessions,
  },
})
