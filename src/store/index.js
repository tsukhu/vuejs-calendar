import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
Vue.use(Vuex);
moment.tz.setDefault('UTC');

export default new Vuex.Store( {
    state: {
      currentYear: 2018,
      currentMonth: 1,
      eventFormPosY:0,
      eventFormPosX: 0,
      eventFormActive: false,
      events: [
        { description: 'Ramdom event 1' , date: moment('2018-01-06','YYYY-MM-DD')},
        { description: 'Ramdom event 2', date: moment('2018-01-15','YYYY-MM-DD')},
        { description: 'Ramdom event 3', date: moment('2018-02-14','YYYY-MM-DD')}
    ]
    },
    mutations: {
        setCurrentMonth(state,payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state,payload) {
            state.currentYear = payload;
        },
        eventFormPos(state,payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state,payload) {
            state.eventFormActive = payload;
        }
    }
  }
);