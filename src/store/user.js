import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const user = {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async setUser({ commit }, uid) {
      let data = null
      await firebase
        .firestore()
        .collection('profiles')
        .doc(uid)
        .get()
        .then(profile => {
          console.log(profile.data())
          data = profile.data()
        })
        .catch(err => {
          console.log(err)
        })
      commit('SET_USER', data)
      return Promise.resolve()
    },
  },
  getters: {
    user: state => state.user,
  },
}

// export const state = () => ({

// })

// export const mutations = {
//   // TODO: Edit User
//   // TODO: Set User to State
//   // TODO: Delete User from State
// }

// export const actions = {
//   // TODO: Edit User
//   // TODO: Set User to State
//   // TODO: Delete User from State
// }

export default user
