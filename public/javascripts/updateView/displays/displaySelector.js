function detectDisplay(){
  return $(".display-type").attr("id");
};

function removeExistingMaps(){
  while (map.hasLayer(geoLayer)) {
    map.removeLayer(geoLayer);
  };
  while (map.hasLayer(heatLayer)) {
    map.removeLayer(heatLayer);
  };
};

function setMapView(stateView, callback, arg){
  if (_.contains([null, "USA"], stateView)){
    map.setView([defaultLat, defaultLon],defaultZoom);
    $("#display-container").animate({"height":"63%"}, 200, function(){
      resizeMap(stateView, callback, arg);
    });
  } else {
    var view = stateViews[stateView];
    map.setView([view.lat, view.lon],view.zoom);
    $("#display-container").animate({"height":"73%"}, 200, function(){
      resizeMap(stateView, callback, arg);
    });
  };
};

function resizeMap(stateView, callback, arg){
  var callback = callback || detectDisplay;
  map.invalidateSize();
  removeExistingMaps();
  callback(arg, stateView);
};

// function setMapToStateView(data, stateView){
//   var view = stateViews[stateView];
  
//   map.whenReady(function(){
//     map.invalidateSize();
//     makeHeatmap(data, stateView);
//   });
// };
