import _ from 'lodash'

const sessions = {
    namespaced: true,
    state: {
        sessions: [
            {
                sessionId: 21,
                menteeId: 123,
                mentorId: 1,
                status: 'Accepted',
                date: '31 Oktober 2020',
                time: '17.30',
                googleMeet: 'https://meet.google.com',
                review: '',
            },
            {
                sessionId: 22,
                menteeId: 123,
                mentorId: 1,
                status: 'Pending',
                date: '31 Oktober 2020',
                time: '17.30',
                googleMeet: 'https://meet.google.com',
                review: '',
            },
            {
                sessionId: 22,
                menteeId: 123,
                mentorId: 2,
                status: 'Declined',
                date: '31 Oktober 2020',
                time: '17.30',
                googleMeet: 'https://meet.google.com',
                review: '',
            },
            {
                sessionId: 22,
                menteeId: 123,
                mentorId: 2,
                status: 'Completed',
                date: '31 Oktober 2020',
                time: '17.30',
                googleMeet: 'https://meet.google.com',
                review: '',
            },
        ],
        myMentors: [
            {
                id: 1,
                name: 'Joseph Joestar',
                role: 'mentor',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        id: 1,
                        jobTitle: 'Software Engineer',
                        company: 'PT. Kolaborasi dan Aktif Internasional',
                        duration: ['September 2019', 'Present'],
                    },
                    {
                        id: 2,
                        jobTitle: 'Software Engineer',
                        company: 'PT. HeyyOneNetwork',
                        duration: ['September 2018', 'September 2019'],
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        year: ['September 2015', 'September 2019'],
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
            {
                id: 2,
                name: 'Caesar Zepelli',
                role: 'mentor',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        id: 1,
                        jobTitle: 'Software Engineer',
                        company: 'PT. Kolaborasi dan Aktif Internasional',
                        duration: ['September 2019', 'Present'],
                    },
                    {
                        id: 2,
                        jobTitle: 'Software Engineer',
                        company: 'PT. HeyyOneNetwork',
                        duration: ['September 2018', 'September 2019'],
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        year: ['September 2015', 'September 2019'],
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
        ],
        myMentees: [],
    },

    getters: {
        allSessions: state => state.sessions,
        acceptedSessions: state =>
            state.sessions.filter(session => {
                return session.status === 'Accepted'
            }),
        pendingSessions: state =>
            state.sessions.filter(session => {
                return session.status === 'Pending'
            }),
        completedSessions: state =>
            state.sessions.filter(session => {
                return session.status === 'Completed'
            }),
        cancelledSessions: state =>
            state.sessions.filter(session => {
                return session.status === 'Cancelled'
            }),
    },

    mutations: {},
    actions: {
        // TODO: API Call to get menteeSessions
        // TODO: API Call to get myMentors
        // TODO: API Call to get myMentees
        getAllMentors({ commit }) {
            const allSession = _.cloneDeep(this.state.sessions)
            // eslint-disable-next-line no-console
            console.log(`allSessions Clones: ${allSession}`)
            const allMyMentorsId = allSession.map(session => {
                return session.mentorId
            })
            // eslint-disable-next-line no-console
            console.log(`myMentorsId: ${allMyMentorsId}`)
            const removedDuplicatesMentorId = allMyMentorsId.filter((a, b) => {
                return allMyMentorsId.indexOf(a === b)
            })
            // eslint-disable-next-line no-console
            console.log(`Remove Duplicates ${removedDuplicatesMentorId}`)
            // const myMentorData = removedDuplicatesMentorId.map((id) => {
            //   // API Call for each single mentor
            // })
            commit('GET_ALL_MENTORS')
        },
        //   getSingleMentor({ commit }, id) {

        //   },
    },
}

export default sessions
