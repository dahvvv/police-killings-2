L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;

$(function(){

  map = L.mapbox.map('map-one', 'marpborxmarrrpborrrrrx.kg7bjg5l', {
    scrollWheelZoom: true,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

  $('.chooser').on('click', function(){
    replaceChooser(this, function(){
      var choosers = detectChoosers();
    //     replaceDisplay().then(function(){
    //       replaceProgram();
    //     })
      console.log(choosers);
    })
  });

  var killingList = new KillingList();
  killingList.fetch();
});
