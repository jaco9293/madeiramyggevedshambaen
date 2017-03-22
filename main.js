window.onload = function initMap() {}

// initMap

var map;
var image;

var data_korrekt = document.querySelector(".data_korrekt");
var data_svar1 = document.querySelector(".data_svar1");
var data_svar2 = document.querySelector(".data_svar2");
var data_svar3 = document.querySelector(".data_svar3");


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 55.679052,
            lng: 12.598767
        },
        zoom: 15
    });

    var bounds = {
        north: 55.69412309457315,
        south: 55.669984433006424,
        east: 12.62700028771994,
        west: 12.575857070178244



    }


    var overlay = new google.maps.GroundOverlay('img/overlayholmen-01.svg', bounds);
    overlay.setMap(map);


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
            icon: {
                scaledSize: new google.maps.Size(55, 55),
                url: sted.icon
            },
            title: sted.navn,
        });


        var infowindow = new google.maps.InfoWindow({});
        marker.addListener('click', function () {
            var klon = document.querySelector("#my_template").content.cloneNode(true);

            klon.querySelector(".data_overskrift").innerHTML = sted.navn;

            klon.querySelector(".data_billede").src = "img/" + sted.billede + ".jpg";
            klon.querySelector(".data_svar1").innerHTML = sted.svar1;
            klon.querySelector(".data_svar2").innerHTML = sted.svar2;
            klon.querySelector(".data_svar3").innerHTML = sted.svar3;
            klon.querySelector(".data_sporgsmal").innerHTML = sted.sporgsmal;

            infowindow.open(map, marker);
            infowindow.setContent(klon);

            // TRYKKER PÅ SVAR
            document.querySelector(".data_svar1").addEventListener("click", svar_1Valgt);
            document.querySelector(".data_svar2").addEventListener("click", svar_2Valgt);
            document.querySelector(".data_svar3").addEventListener("click", svar_3Valgt);

        });

        // ER SVARET RIGTIGT
        function svar_1Valgt() {
            if (sted.korrekt == "1") {
                //console.log("ja tak");


                document.querySelector(".data_sporgsmal").innerHTML = "Du svarede RIGTIGT!";


                if (typeof (Storage) !== "undefined") {
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                    } else {
                        localStorage.clickcount = 1;
                    }

                } else {
                    console.log("æv");
                    document.querySelector(".data_sporgsmal").innerHTML = "Du svarede FORKERT!";
                }
            }
        }

        function svar_2Valgt() {
            if (sted.korrekt == "2") {
                console.log("ja tak");
                document.querySelector(".data_sporgsmal").innerHTML = "Du svarede RIGTIGT!";
                if (typeof (Storage) !== "undefined") {
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                    } else {
                        localStorage.clickcount = 1;
                    }

                }
            } else {
                console.log("æv");
                document.querySelector(".data_sporgsmal").innerHTML = "Du svarede FORKERT!";
            }

        }

        function svar_3Valgt() {
            if (sted.korrekt == "3") {
                console.log("ja tak");
                document.querySelector(".data_sporgsmal").innerHTML = "Du svarede RIGTIGT!";
                if (typeof (Storage) !== "undefined") {
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                    } else {
                        localStorage.clickcount = 1;
                    }

                }

            } else {
                console.log("æv");
                document.querySelector(".data_sporgsmal").innerHTML = "Du svarede FORKERT!";
            }
        }

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
$(".menu_icon").on("click", topmove);
$(".menu_icon").on("click", botmove);

function drop() {
    console.log("menu drop down");


}

function topmove() {
    //console.log("topmove");
    //   e.classList.toggle("top");

    $(".dropmenu").slideToggle();

    if ($(".topline").hasClass("top") == false) {
        $(".topline").addClass("top");
        $(".topline").removeClass("top-reverse");
    } else {

        //
        $(".topline").removeClass("top");
        $(".topline").addClass("top-reverse");
    }

}


function botmove() {
    //console.log("botmove");
    //   e.classList.toggle("top");



    if ($(".botline").hasClass("bot") == false) {
        $(".botline").addClass("bot");
        $(".botline").removeClass("bot-reverse");
    } else {

        //
        $(".botline").removeClass("bot");
        $(".botline").addClass("bot-reverse");
    }

}

//document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
