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
}
