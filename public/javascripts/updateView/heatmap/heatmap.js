function updateHeatmap(){
  $(".weight-type").removeClass();
  $(".legend, .weight-legend, .graph-legend-container").hide();
  $(".weight, .weight-form").hide();
  var filter = $(".filter-type").attr("id");
  selectHeatmapFilter[filter]();
};

var selectHeatmapFilter = {
  "usPop-filter" : function(){
    updateHeatmapFilterUspop();
  },
  "age-filter" : function(){
    updateHeatmapFilterAge();
  },
  "race-filter" : function(){
    updateHeatmapFilterRace();
  },
  "gender-filter" : function(){
    updateHeatmapFilterGender();
  },
  "unarmed-filter" : function(){
    updateHeatmapFilterUnarmed();
  },
  "illness-filter" : function(){
    updateHeatmapFilterIllness();
  },
  "shots-filter" : function(){
    updateHeatmapFilterShots();
  },
};

function makeHeatmap(data, stateView){
	var coords = [];
	data.forEach(function(elem, i){
    var lat = elem.lat;
    var lng = elem.lng;
    coords.push([lat,lng]);
  });
  removeExistingMaps();
  heatLayer = L.heatLayer(coords, {
    radius: 27,
    gradient: selectGradient(stateView),
    maxZoom: setMaxZoom(data.length, stateView),
    max: 1
  });
  if ($('#map-one').css('display') === "none") {
    $('#display-container-canvaswidget').remove();
    $('#map-one').slideToggle(750, function(e){
      heatLayer.addTo(map);
    });
  } else {
    heatLayer.addTo(map);
  };
};

function selectGradient(stateView){
  if (stateView === null || stateView === "USA"){
    return gradientMain;
  } else {
    return gradientState;
  }
};

var gradientMain = {
  0: 'purple',
  0.15: 'blue',
  0.25: 'lightblue',
  0.35: 'green',
  0.85: 'yellow',
  0.995: 'orange',
  1: 'red'
};

var gradientState = {
  0: 'purple',
  0.15: 'blue',
  0.25: 'lightblue',
  0.35: 'green',
  0.75: 'yellow',
  0.995: 'orange',
  1: 'red'
};

var gradientAgeRange = {
  0: 'black',
  0.1: 'purple',
  0.25: 'blue',
  0.4: 'green',
  0.6: 'yellow',
  1: 'red'
};

function setMaxZoom(numDatapoints, stateView){
  var zoomLevels = _.contains([null,"USA"], stateView) ? zLevelsCountry : zLevelsState;
  var targetLevel = 0;
  $.each(zoomLevels, function(count,zoomLevel){
    if (numDatapoints > parseInt(count)){
      return true;
    } else {
      targetLevel += zoomLevel;
      return false;
    };
  });
  return targetLevel;
};

var zLevelsCountry = {
  10: 1,
  20: 4,
  130: 5,
  300: 6,
  500: 7,
  1300: 8,
  2600: 9,
  99999999: 10
};

var zLevelsState = {
  25: 3,
  30: 4,
  35: 5,
  40: 8,
  50: 8,
  99999999: 8
};
