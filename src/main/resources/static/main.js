
//const $ = require('jquery');
//import './main.scss';
//require('./dist/main.css');

//require('bootstrap');

window.$ = window.jQuery = require('jquery');

window.moment = require('moment');

require('fullcalendar');
require('fullcalendar-scheduler');
require('fullcalendar/dist/locale/hr');

require('./global.scss');
$(document).ready(function () {
    $('#calendar').fullCalendar({
        defaultView: 'agendaDay',
        events: [
            // events go here
        ],
        resources: [
            { id: 'a', title: 'Room A' },
            { id: 'b', title: 'Room B' },
            { id: 'c', title: 'Room C' },
            { id: 'd', title: 'Room D' }
        ]
    });

});

console.log("calendar 2");