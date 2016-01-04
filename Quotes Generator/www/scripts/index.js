// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        
        $(document).ready(function () {

            generate();

            function generate() {

                $.ajax({
                    type: "GET",
                    dataType: 'json',
                    url: "http://quotes.stormconsultancy.co.uk/random.json",
                })
                  .done(function (data) {
                      $('.saying').text(data['quote']);
                      $('.author').text(data['author']);
                  })
                  .fail(function (xhr, textStatus, errorThrown) {
                      alert(xhr.responseText);
                      alert(textStatus);
                  });
            }

            $(".button").on("click", function () {
                generate();
            });
        });
    };

    function onPause() {
        
    };

    function onResume() {
        
    };
} )();