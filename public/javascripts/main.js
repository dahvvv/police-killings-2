L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;
var geoLayer;
var heatLayer;
var graph;

$(function(){

  map = L.mapbox.map('map-one', 'marpborxmarrrpborrrrrx.kg7bjg5l', {
    scrollWheelZoom: true,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

  $('.chooser').on('click', function(e){
    e.preventDefault();
    replaceChooser(this, function(){
      var choosers = detectChoosers();
      updateView(choosers);
      // updateChooserListviews(choosers);
      // updateWeightVisibility(choosers);
      // var data = filterData(choosers);
      // updateDisplay(data, choosers);
      // replaceProgram(data, choosers);
    })
  });

  $('#state-selector').on('change', function(e){
    e.preventDefault();
    var choosers = detectChoosers();
    var data = filterData(choosers);
    updateDisplay(data, choosers);
  });

  $('#about-link').on('click', function(e){
    e.preventDefault();
    $('#about').slideToggle(800);
  });

  $('#forward-button').on('click', function(e){
    e.preventDefault();
    nextPage();
  });

  $('#back-button').on('click', function(e){
    e.preventDefault();
    prevPage();
  });

  $.ajax({
    url: '/api',
    dataType: 'JSON',
    success: function(data){
      allKillings = data;
      updateHeatmapFilterUspopWeightNone();
    }
  });
});
