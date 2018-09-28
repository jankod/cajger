window.$ = window.jQuery = require('jquery');

window.moment = require('moment');

require('fullcalendar');
require('fullcalendar-scheduler');
require('fullcalendar/dist/locale/hr');

require('./global.scss');
$(document).ready(function () {
    $('#calendar').fullCalendar({
        defaultView: 'agendaDay',
        editable: true,
        events: [
            // events go here
        ],
        header: {
            left: 'promptResource today prev,next',
            center: 'title',
            right: 'timelineDay,timelineThreeDays,agendaWeek,month'
        },
        customButtons: {
            promptResource: {
                text: 'room 6:) ',
                click: function () {
                    $('#calendar').fullCalendar(
                        'addResource',
                        {title: 'Novo 1'},
                        true // scroll to the new resource?
                    );
                }
            }
        },
        resourceLabelText: 'ResuRSI',
        resourceRender: function(resource, cellEls) {
            cellEls.on('click', function() {
                if (confirm('Are you sure you want to delete ' + resource.title + '?')) {
                    $('#calendar').fullCalendar('removeResource', resource);
                }
            });
        },
        resources: [
            {id: 'a', title: 'Room A'},
            {id: 'b', title: 'Room B'},
            {id: 'c', title: 'Room C'},
            {id: 'd', title: 'Room D'}
        ]
    });

});

console.log("calendar 2");