export const mentors = {
    namespaced: true,
    state: {
        mentors: [
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
                        startDate: 'September 2019',
                        endDate: 'present',
                    },
                    {
                        id: 2,
                        jobTitle: 'Software Engineer',
                        company: 'PT. HeyyOneNetwork',
                        startDate: 'September 2018',
                        endDate: 'September 2019',
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        startDate: 'September 2015',
                        endDate: 'September 2019',
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
                name: 'Farhan Abbas',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        jobTitle: 'Product Manager',
                        company: 'Kolatif',
                        startDate: 'September 2019',
                        endDate: 'present',
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        startDate: 'September 2015',
                        endDate: 'September 2019',
                    },
                ],
                expertise: [
                    'Project Management',
                    'Product Design',
                    'Leadership',
                    'Programming',
                ],
            },
            {
                id: 3,
                name: 'Ayuning Raharjo',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        jobTitle: 'System Analyst',
                        company: 'Kolatif',
                        startDate: 'September 2019',
                        endDate: 'present',
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        startDate: 'September 2015',
                        endDate: 'September 2019',
                    },
                ],
                expertise: [
                    'System Analysis',
                    'Requirement Analysis',
                    'Database Design',
                    'Java',
                ],
            },
            {
                id: 4,
                name: 'Annisa Valent',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        jobTitle: 'UI/UX',
                        company: 'IPB University',
                        startDate: 'September 2019',
                        endDate: 'present',
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        startDate: 'September 2015',
                        endDate: 'September 2019',
                    },
                ],
                expertise: [
                    'User Interface Design',
                    'User Experience Design',
                    'Wireframing',
                    'Prototyping',
                ],
            },
            {
                id: 5,
                name: 'Joko Halim',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        jobTitle: 'Backend Engineer',
                        company: 'PT Transisi Indonesia',
                        startDate: 'September 2019',
                        endDate: 'present',
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        startDate: 'September 2015',
                        endDate: 'September 2019',
                    },
                ],
                expertise: [
                    'System Design',
                    'Object Oriented Programming',
                    'Competitive Programming',
                    'Data Structures & Algorithims',
                ],
            },
            {
                id: 6,
                name: 'Charles Mason',
                rating: 5,
                reviews: 150,
                workExperience: [
                    {
                        jobTitle: 'Digital Marketing Associate',
                        company: 'PT Teknologi Turis Global',
                        startDate: 'September 2019',
                        endDate: 'present',
                    },
                ],
                education: [
                    {
                        campus: 'IPB University',
                        major: 'Computer Science',
                        startDate: 'September 2015',
                        endDate: 'September 2019',
                    },
                ],
                expertise: [
                    'Digital Marketing',
                    'Customer Experience',
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                ],
            },
        ],
    },

    getters: {
        allMentors: state => state.mentors,
        someMentors: state => (id = 1) => {
            const newState = []
            const filteredState = state.mentors.filter(mentor => {
                return mentor.id !== id
            })
            for (let i = 0; i < 3; i++) {
                newState.push(filteredState[i])
            }
            return newState
        },
    },

    mutations: {
        saveMentors(state, mentors) {
            state.mentors = mentors
        },
    },

    actions: {
        loadMentors({ commit }) {
            // TODO: API call to get mentors
            // TODO: commit to saveMentors method
        },
        // bookMentor({commit}, book){
        //   //TODO: Add Book to the API
        //   // eslint-disable-next-line no-console
        //   console.log(book)

        // }
    },
}

export default mentors
