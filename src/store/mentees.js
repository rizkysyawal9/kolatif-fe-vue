import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

export const mentees = {
  namespaced: true,
  state: {
    mentees: [],
  },
  getters: {
    allMentees: state => state.mentees,
  },

  mutations: {
    SET_MENTEES(state, mentee) {
      state.mentees = mentee
    },
  },

  actions: {
    async loadMentees({ commit }) {
      let data = []
      await firebase
        .firestore()
        .collection('profiles')
        .where('role', '==', 'mentee')
        .get()
        .then(result => {
          result.forEach(doc => {
            data.push(doc.data())
          })
        })
        .catch(err => {
          console.log(err)
        })
      commit('SET_MENTEES', data)
      return Promise.resolve()
    },
  },
}

export default mentees
