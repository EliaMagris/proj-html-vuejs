import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import specific icons /
import {faMagnifyingGlass, faChevronRight, faArrowRight, faFileLines, faMugSaucer, faCubes, faLaptop, faWrench} from '@fortawesome/free-solid-svg-icons';

import {faApple, faWindows, faAndroid} from '@fortawesome/free-brands-svg-icons'

// Import icone regular /
import {} from '@fortawesome/free-regular-svg-icons';

// add icons to the library /
library.add(faMagnifyingGlass, faChevronRight, faApple, faWindows, faAndroid, faArrowRight, faFileLines, faMugSaucer, faCubes, faLaptop, faWrench);

// add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
