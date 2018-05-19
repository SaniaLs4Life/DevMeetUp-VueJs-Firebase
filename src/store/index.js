import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
                id: '1', 
                title: 'Meetup in New York',
                date: '2018-07-17'
            },
            {
                imageUrl: 'https://cdn3.i-scmp.com/sites/default/files/styles/2000x792/public/images/methode/2017/09/28/936dd694-9f60-11e7-9b91-f74e36ea6345_4000x1584_010803.JPG?itok=NNeLcPfc', 
                id: '2', 
                title: 'Meetup in Istanbul',
                date: '2018-07-23'
            },             
        ],
        users: {
            id: '123',
            registeredMeetups: ['12312312asds']
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})