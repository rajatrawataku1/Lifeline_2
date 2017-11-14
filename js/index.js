
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
      $('.modal').modal();
      $('ul.tabs').tabs();
      $(".button-collapse").sideNav();
      $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15, // Creates a dropdown of 15 years to control year,
       today: 'Today',
       clear: 'Clear',
       close: 'Ok',
       closeOnSelect: false // Close upon selecting a date,
     });

     initialize();

     document.getElementById('main_screen_1').setAttribute('style','display:block');


        console.log('Received Event: ' + id);
    }
};

app.initialize();
