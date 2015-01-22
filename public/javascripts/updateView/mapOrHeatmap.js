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
  if ($("#map-one").css("display") === "none") {
    $("#display-container-canvaswidget").remove();
    $("#map-one").show();
    map.invalidateSize();
  };
};

function setMapView(stateView, callback, arg){
  removeExistingMaps();
  if (_.contains([null, "USA"], stateView)){
    map.setView([defaultLat, defaultLon],defaultZoom);
    $("#display-container").animate({"height":"63%"}, 100, function(){
      resizeMap(stateView, callback, arg);
    });
  } else {
    var view = stateViews[stateView];
    map.setView([view.lat, view.lon],view.zoom);
    $("#display-container").animate({"height":"80%"}, 200, function(){
      resizeMap(stateView, callback, arg);
    });
  };
};

function resizeMap(stateView, callback, arg){
  var callback = callback || detectDisplay;
  map.invalidateSize();
  callback(arg, stateView);
};
