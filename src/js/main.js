import './nav.js';
import './footer.js';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import * as popper from 'popper.js'
window.popper = popper
import 'bootstrap';

import '@fortawesome/fontawesome-free/js/all.js';



var moment = require('moment-business-days');
moment.updateLocale('us', {
   workingWeekdays: [1, 2, 3, 4, 5]
});








