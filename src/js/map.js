window.initMap = function() {
    var mapStyles = new google.maps.StyledMapType(require('./modules/_mapStyles.js'));
    var LatLng = new google.maps.LatLng(54.718749, 20.505773);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
        center: new google.maps.LatLng(54.722500, 20.505773)
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
    var content = `
        <div class="map-label__infowindow">
            <img src="./img/hair_room_logo_map.png" alt="logo map"/>
            <div class="map-label__infowindow-content">
                <p class="map-label__infowindow-title">Hair Room</p>
                <p class="map-label__infowindow-description">
                    Салон красоты
                </p>
                <p class="map-label__infowindow-address">
                    ул. Иванникова, д.12
                </p>
            </div>
        </div>
        
    `
    var infowindow = new google.maps.InfoWindow({
        content: content
    })

    infowindow.open(map, marker);
    var icon = "./img/marker.svg";
    marker.setIcon(icon);
}