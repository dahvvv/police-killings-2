L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;
var geoLayer;
var heatLayer;
var graph;


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

$(function(){

  map = L.mapbox.map("map-one", "marpborxmarrrpborrrrrx.kg7bjg5l", {
    scrollWheelZoom: true,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

  // $("button").on("click", function(e){
  //   e.preventDefault();
  //   detectTypeOfButton();
  // })

  $(".filter").on("click", function(e){
    e.preventDefault();
    var filter = detectFilter();
    var display = detectDisplay();
    var weight = detectWeight();
    if (this.id != filter){
      $("button").removeClass("filter-type");
      $(this).addClass("filter-type");
    };
    $(".filter-form").hide();
    if (display != "graph-display" && 
      this.id != "usPop-filter"){
      $(this).next("form").show();
    };
    updateDisplay[display]();
  });

  $(".filter-form").find("input[type=submit]").on("click", function(e){
    e.preventDefault();
    var display = detectDisplay();
    updateDisplay[display]();
  });

  $(".display").on("click", function(e){
    e.preventDefault();
    var display = detectDisplay();
    if (this.id != display){
      $("button").removeClass("display-type weight-type");
      $(".filter-form,.weight-form").hide();
      $(this).addClass("display-type");
      updateDisplay[this.id]();
    };
  });

  $(".weight").on("click", function(e){
    e.preventDefault();
    var weight = detectWeight();
    var display = detectDisplay();
    $("button").removeClass("weight-type");
    $(".weight-form").hide();
    if (this.id != weight){
      $(this).addClass("weight-type");
      if (display != "graph-display" && 
      this.id != "usPop-weight"){
        $(this).next("form").show();
      };
    };
    updateDisplay[display]();
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
