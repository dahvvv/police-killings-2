// function replaceSelector(selector, callback){
//   $('.display-selector').removeClass('display-type');
//   $(selector).addClass('display-type');
//   callback();
// };

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
    $("#display-and-selectors").animate({"height":"31em"},100);
    $("#program").animate({"height":"17%"},100);   
    map.setView([defaultLat,defaultLon],defaultZoom);
  } else {
    $("#display-and-selectors").animate({"height":"31em"},100);
    $("#program").animate({"height":"17%"},500);   
    setMapToStateView(stateView);
  };
};

function setMapToStateView(state){
  var view = stateViews[state];
  map.setView([view.lat, view.lon],view.zoom);
};
