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
  debugger;
  if (stateView === null || stateView === "USA"){
    $("#program").show();
    $("#display-container").animate({"height":"63%"}, 200, function(){
      map.setView([defaultLat, defaultLon],defaultZoom);
      setTimeout(function(){
        map.invalidateSize();
        makeHeatmap(data, stateView);
      }, 200);
    });
  } else {
    $("#program").hide();
    var view = stateViews[stateView];
    $("#display-container").animate({"height":"91%"}, 200, function(){
      map.setView([view.lat, view.lon],view.zoom);
      setTimeout(function(){
        map.invalidateSize();
        makeHeatmap(data, stateView);
      }, 120);
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
