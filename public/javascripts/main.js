L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;
var geoLayer;
var heatLayer;
var graph;

function filterData(choosers){
  return [1,2,3,4,5,"hooray!"];
};

$(function(){

  map = L.mapbox.map('map-one', 'marpborxmarrrpborrrrrx.kg7bjg5l', {
    scrollWheelZoom: true,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

  $('.chooser').on('click', function(){
    replaceChooser(this, function(){
      var choosers = detectChoosers();
      var data = filterData(choosers);
      updateDisplay(data, choosers);
    //     replaceDisplay().then(function(){
    //       replaceProgram();
    //     })
    })
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

  var killingList = new KillingList();
  killingList.fetch();
});
