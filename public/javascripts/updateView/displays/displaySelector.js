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

function setMapView(stateView){
  if (stateView === null || stateView === "USA"){
    $("#display-container").animate({"height":"63%"},100);
    map.setView([defaultLat,defaultLon],defaultZoom);
  } else {
    $("#display-container").animate({"height":"73%"},100);
    setMapToStateView(stateView);
  };
};

function setMapToStateView(state){
  var view = stateViews[state];
  map.setView([view.lat, view.lon],view.zoom);
};
