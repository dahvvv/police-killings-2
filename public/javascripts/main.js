L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

function replaceProgram(choosers){
  var program = programs[choosers.displaySelector][choosers.filter][choosers.weight];
  $('#program').html(program);
};

function abbreviateRace(race,graphBarDirection){
  if (graphBarDirection === "horizontal"){
    race = race === "hispanic and/or latin" ? "hispanic" : race;
    race = race === "alaskan and/or pacific islander" ? "ak / p.i." : race;
    return race;
  } else if (graphBarDirection === "vertical"){
    race = race === "hispanic and/or latin" ? "hispanic/latin" : race;
    race = race === "alaskan and/or pacific islander" ? "alaskan/p.i." : race;
    return race;
  }; 
};

function expandRace(race,graphBarDirection){
  if (graphBarDirection === "horizontal"){
    race = race === "hispanic" ? "hispanic and/or latin" : race;
    race = race === "ak / p.i." ? "alaskan and/or pacific islander" : race;
    return race;
  } else if (graphBarDirection === "vertical"){
    race = race === "hispanic/latin" ? "hispanic and/or latin" : race;
    race = race === "alaskan/p.i." ? "alaskan and/or pacific islander" : race;
    return race;
  };
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
      var choosers = detectChoosers();
      updateDisplay(allKillings, choosers);
    }
  });

});
