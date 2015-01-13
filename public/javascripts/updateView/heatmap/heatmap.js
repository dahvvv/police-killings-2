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

function makeHeatmap(data){
	var coords = [];
	var numDatapoints = data.length;
	data.forEach(function(elem, i){
    var lat = elem.lat;
    var lng = elem.lng;
    coords.push([lat,lng]);
  });
  removeExistingMaps();
  var stateView = $('#state-filter').val();
  setMapView(stateView);
  heatLayer = L.heatLayer(coords, {
    radius: 27,
    gradient: selectGradient(stateView),
    maxZoom: setMaxZoom(numDatapoints,stateView),
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
    return gradientStateView;
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

var gradientStateView = {
  0: 'purple',
  0.1: 'blue',
  0.2: 'green',
  0.4: 'yellow',
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
  debugger;
  return targetLevel;
};

var zLevelsCountry = {
  10: 1,
  35: 4,
  130: 5,
  350: 6,
  750: 7,
  1750: 8,
  99999999: 10
};

var zLevelsState = {
  25: 10,
  30: 9,
  35: 8,
  40: 7,
  50: 5,
  99999999: 3
};
