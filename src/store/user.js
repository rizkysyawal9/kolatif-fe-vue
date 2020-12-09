const user = {
  namespaced: true, 
  state: {
    user: {
      name: 'Joseph Joestar',
      role: 'mentee',
      workExperience: [
        {
          id: 1,
          jobTitle: 'Head of Education Division',
          company: 'Himpunan Mahasiswa Ilmu Komputer',
          startDate: 'September 2019',
          endDate: 'Present',
        },
      ],
      education: [
        {
          campus: 'IPB University',
          major: 'Computer Science',
          startDate: 'September 2015',
          endDate: 'September 2019',
        },
        {
          campus: 'SMAN 78 Jakarta',
          major: 'Natural Science',
          startDate: 'September 2012',
          endDate: 'September 2015',
        },
      ],
      expertise: [
        'Frontend Development',
        'Mobile Development',
        'UI Design',
        'Product Design',
      ],
      availability:
        'Monday to Friday above 8.00 P.M. If you want to reschedule please contact me at joseph@kolatif.com',
    },
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
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
