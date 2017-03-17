// initMap

var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 55.679052,
            lng: 12.598767
        },
        zoom: 17
    });


    // watch Position

    /* if (navigator.geolocation) {
         navigator.geolocation.watchPosition(function (position) {
             var minPos = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
             };
             map.setCenter(minPos);
             var mig = new google.maps.Marker({
                 position: minPos,
                 map: map,
             });
         });
     } */

    // Get JSON

    $.getJSON("kbhture.json", visListe);


    //Opdel liste
    function visListe(infoOmSteder) {
        console.table(infoOmSteder);
        infoOmSteder.forEach(visSteder);
    }
    //Lav klon
    function visSteder(sted) {

        var marker = new google.maps.Marker({
            position: sted.position,
            map: map,
            title: sted.navn,
        });


        var infowindow = new google.maps.InfoWindow({});
        marker.addListener('click', function () {
            infowindow.open(map, marker);
            infowindow.setContent(klon);


        });
        var klon = document.querySelector("#my_template").content.cloneNode(true);

        klon.querySelector(".data_overskrift").innerHTML = sted.navn;
        klon.querySelector(".data_beskrivelse").innerHTML = sted.beskrivelse;
        klon.querySelector(".data_billede").src = "img/" + sted.billede + ".jpg";


        console.log(sted.position);

    }

    // infowindow

    // var klon = document.querySelector("#my_template").content.cloneNode(true);

    //klon.querySelector(".data_overskrift").innerHTML = sted.navn;
    //klon.querySelector(".data_beskrivelse").innerHTML = sted.beskrivelse;
    //klon.querySelector(".data_billede").src = "img/" + sted.billede + ".jpg";


    //console.log(sted.position);

}

// Menu
$(".arrow").on("click", drop);

function drop() {
    console.log("menu drop down");
    $(".arrowright").toggleClass("dropdownright");
    $(".arrowleft").toggleClass("dropdownleft");
    $(".dropmenu").slideToggle();
}
