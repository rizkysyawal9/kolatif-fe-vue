import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

export const mentors = {
  namespaced: true,
  state: {
    mentors: [],
  },

  getters: {
    allMentors: state => state.mentors,
    someMentors: state => (id = 1) => {
      const newState = []
      const filteredState = state.mentors.filter(mentor => {
        return mentor.id !== id
      })
      for (let i = 0; i < 3; i++) {
        if (filteredState[i] == undefined) break
        newState.push(filteredState[i])
      }
      return newState
    },
  },

  mutations: {
    SET_MENTORS(state, mentors) {
      state.mentors = mentors
    },
  },

  actions: {
    async loadMentors({ commit }) {
      let data = []
      await firebase
        .firestore()
        .collection('profiles')
        .where('role', '==', 'mentor')
        .get()
        .then(result => {
          result.forEach(doc => {
            data.push(doc.data())
          })
          //   data = result.data()
        })
        .catch(err => {
          console.log(err)
        })
      // TODO: API call to get mentors
      // TODO: commit to saveMentors method
      commit('SET_MENTORS', data)
      return Promise.resolve()
    },
    // bookMentor({commit}, book){
    //   //TODO: Add Book to the API
    //   // eslint-disable-next-line no-console
    //   console.log(book)

    // }
  },
}

export default mentors
