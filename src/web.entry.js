import './style.scss';


import VueApp from './entry';

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

VueApp().$mount('#app');
