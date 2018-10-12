

$(document).ready(function () {
    $('#calendar').fullCalendar({
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
                text: 'room 7 :) ',
                click: function () {
                    $('#calendar').fullCalendar(
                        'addResource',
                        {title: 'Novo 1'},
                        true // scroll to the new resource?
                    );
                }
            }
        },
        resourceLabelText: 'Sobe',
        resourceRender: function (resource, cell) {
            // console.log(cell);
            cell.html( 'Ovo je ook <b> evo</b>');
            cell.on('click', function () {
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