L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;
var geoLayer;
var heatLayer;
var graph;

function detectScene(){
  var filter = $(".filter-type").attr("id")
  .split("-filter")[0];
  var display = $(".display-type").attr("id")
  .split("-display")[0];
  if ($(".weight-type").length === 0){
    var weight = "none";
  } else {
    var weight = $(".weight-type").attr("id")
    .split("-weight")[0];
  };
  return {
    filter: filter,
    display: display,
    weight: weight
  };
};

var updateDisplay = {
  "heatmap" : function(){
    updateHeatmap();
  },
  "map" : function(){
    updateMap();
  },
  "graph" : function(){
    updateGraph();
  },
};

$(function(){

  map = L.mapbox.map("map-one", "marpborxmarrrpborrrrrx.kg7bjg5l", {
    scrollWheelZoom: true,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

  $(".filter").on("click", function(e){
    e.preventDefault();
    var scene = detectScene();
    if (this.id != scene.filter + "-filter"){
      $("button").removeClass("filter-type");
      $(this).addClass("filter-type");
      scene.filter = this.id.split("-")[0];
    };
    $(".filter-form").hide();
    if (scene.display != "graph" && 
      this.id != "usPop-filter"){
      $(this).next("form").show();
    };
    updateDisplay[scene.display]();
  });

  $(".filter-form").find("input[type=submit]").on("click", function(e){
    e.preventDefault();
    alert('u hit enter!');
  });

  // $(".chooser").on("click", function(e){
  //   e.preventDefault();
  //   replaceChooser(this, function(){
  //     var choosers = detectChoosers();
  //     updateView(choosers);
  //   })
  // });

  // $(".button-weight").on("click", function(e){
  //   e.preventDefault();
  //   if (this.tagName != "INPUT" && this.id != "usPop-weight"){
  //     removeAllWeightListviews();
  //     if ($(this).hasClass("weight-type")){
  //       $(this).next("form").css({"display":"block"})
  //       .find("input[type=submit]")
  //       .css({"display":"block"});
  //     };
  //   };
  // });

  $("#state-selector").on("change", function(e){
    e.preventDefault();
    var choosers = detectChoosers();
    var data = filterData(choosers);
    updateDisplay(data, choosers);
  });

  $("#about-link").on("click", function(e){
    e.preventDefault();
    $("#about").slideToggle(800);
  });

  $("#forward-button").on("click", function(e){
    e.preventDefault();
    nextPage();
  });

  $("#back-button").on("click", function(e){
    e.preventDefault();
    prevPage();
  });

  $.ajax({
    url: "/api",
    dataType: "JSON",
    success: function(data){
      allKillings = data;
      updateHeatmapFilterUspopWeightNone();
    }
  });
});
