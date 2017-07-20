// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  function getQuakes() {
    $.ajax({
      method: 'GET',
      url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
      dataType: 'json',
      success: onSuccess
    });
  }

  function onSuccess(responseData) {
    console.log(responseData);
  }

});
