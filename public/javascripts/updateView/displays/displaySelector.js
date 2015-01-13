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

function setMapView(data, stateView){
  if (stateView === null || stateView === "USA"){
    $("#program").show();
    map.setView([defaultLat, defaultLon],defaultZoom);
    $("#display-container").animate({"height":"63%"}, 200, function(){
      map.invalidateSize();
      setTimeout(function(){
        makeHeatmap(data, stateView);
      }, 100);
    });
  } else {
    $("#program").hide();
    var view = stateViews[stateView];
    map.setView([view.lat, view.lon],view.zoom);
    $("#display-container").animate({"height":"91%"}, 200, function(){
      map.invalidateSize();
      setTimeout(function(){
        makeHeatmap(data, stateView);
      }, 100);
    });
  };
};

function setMapToStateView(data, stateView){
  var view = stateViews[stateView];
  
  map.whenReady(function(){
    map.invalidateSize();
    makeHeatmap(data, stateView);
  });
};
