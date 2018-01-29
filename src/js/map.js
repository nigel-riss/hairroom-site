window.initMap = function() {
    var mapStyles = new google.maps.StyledMapType(require('./modules/_mapStyles.js'));
    var LatLng = new google.maps.LatLng(54.718749, 20.505773);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(54.721500, 20.505773)
    });
    map.mapTypes.set('styled_map', mapStyles);
    map.setMapTypeId('styled_map');


    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.BOUNCE,
        title: "HairRoom"
    })

    var icon = "./img/marker.svg";
    marker.setIcon(icon);
}