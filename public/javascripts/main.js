L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;
var geoLayer;
var heatLayer;
var graph;
var spinner;


var updateDisplay = {
  "heatmap-display" : function(){
    updateHeatmap();
  },
  "map-display" : function(){
    updateMap();
  },
  "graph-display" : function(){
    updateGraph();
  },
};

function capitalize(str){
  str = str.replace(/\b[a-z]/g, function(letter){
    return letter.toUpperCase();
  });
  return str;
};

$(function(){
  onload.eventListeners();

  $(".weight, .filter-form, .weight-form, .graph-legend-container").hide();

  map = L.mapbox.map("map-one", "marpborxmarrrpborrrrrx.kg7bjg5l", {
    scrollWheelZoom: false,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

  $.ajax({
    url: "/api",
    dataType: "JSON",
    beforeSend: function(){
      createSpinner();
    },
    success: function(data){
      allKillings = data;
      updateHeatmap();
    }
  });
});
