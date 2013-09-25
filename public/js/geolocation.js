var current_latitude;
var current_longitude;

function get_location() {
  navigator.geolocation.getCurrentPosition(update_location);
}

function update_location(position) {
  current_latitude = position.coords.latitude;
  current_longitude = position.coords.longitude;
  // let's show a map or do something interesting!

  console.log(current_latitude, current_longitude);
  
  find_address(current_latitude, current_longitude);
}

function find_address(lat,lng) {
  location_result = "Location Unavailable";

  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        console.log("results", results, results[1].formatted_address);
        location_result = "Current Location: " + results[1].formatted_address;
      } else {
        console.log('No results found');
      }
    } else {
      console.log('Geocoder failed due to: ' + status);
    }

    $('#location').html(location_result);
    fetchClients();
  });
}