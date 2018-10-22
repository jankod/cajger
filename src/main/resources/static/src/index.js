// ### FullCalnedar
require('moment');
require('fullcalendar');
require('fullcalendar-scheduler');
require('fullcalendar/dist/locale/hr');

require('./fullcalendar.scss');
// ###



require('./index.scss');



let conf = {
    defaultView: 'timelineDay',
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
            text: 'room 8 :) ',
            click: function () {
                $('#calendar').fullCalendar(
                    'addResource',
                    {title: 'Novo 1'},
                    true // scroll to the new resources?
                );
            }
        }
    },
    resourceLabelText: 'Sobe',
    resourceRender: function (resource, cell) {
        // console.log(cell);
        // cell.html( 'Ovo je ook <b> evo</b>');
        cell.on('click', function () {
            if (confirm('Are you sure you want to delete ' + resource.title + '?')) {
                $('#calendar').fullCalendar('removeResource', resource);
            }
        });
    },
    resources: [
        {id: 'a', title: 'Room AA'},
        {id: 'b', title: 'Room B'},
        {id: 'c', title: 'Room C'},
        {id: 'd', title: 'Room D'}
    ]
};

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#calendar').fullCalendar(conf);

    $("#demoClick").on('click', function () {
        $('#sidebar').toggleClass('active');
    })
});

console.log("calendar 2");