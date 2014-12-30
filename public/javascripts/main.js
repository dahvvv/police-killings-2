L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

function replaceProgram(choosers){
  var program = programs[choosers.displaySelector][choosers.filter][choosers.weight];
  $('#program').html(program);
};

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
      var data = filterData(choosers);
      updateChooserListviews(choosers);
      updateWeightVisibility(choosers);
      updateDisplay(data, choosers);
      replaceProgram(choosers);
    })
  });

  $('#state-selector').on('change', function(e){
    e.preventDefault();
    var choosers = detectChoosers();
    var data = filterData(choosers);
    updateDisplay(data, choosers);
  });

  $.ajax({
    url: '/api',
    dataType: 'JSON',
    success: function(data){
      allKillings = data;
      var choosers = detectChoosers();
      updateDisplay(allKillings, choosers);
    }
  });

});
