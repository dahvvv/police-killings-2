function updateDisplay(data, choosers){
	if (choosers.displaySelector === "heatmap") {
		makeHeatmap(data, choosers);
	} else if (choosers.displaySelector === "marker") {
		makeMarkermap(data, choosers);
	} else if (choosers.displaySelector === "graph") {
		emptyGraph(choosers);
	};
};

function setMaxZoom(numDatapoints, stateView){
  if (stateView === null || stateView === "USA") {
    switch (true) {
      case (numDatapoints <= 10): return 1;
      case (numDatapoints > 10 && numDatapoints <= 35): return 4;
      case (numDatapoints > 35 && numDatapoints <= 130): return 5;
      case (numDatapoints > 130 && numDatapoints <= 350) : return 6;
      case (numDatapoints > 350 && numDatapoints <= 750): return 7;
      case (numDatapoints > 750 && numDatapoints <= 1750): return 8;
      default: return 10
    }
  } else {
    if (numDatapoints > 25) {
      return 10;
    } else if (numDatapoints <= 25 && numDatapoints > 30) {
      return 9;
    } else if (numDatapoints <= 30 && numDatapoints > 35) {
      return 8;
    } else if (numDatapoints <= 35 && numDatapoints > 40) {
      return 7;
    } else if (numDatapoints <= 40 && numDatapoints > 50) {
      return 5;
    } else {
      return 3;
    }
  }
  
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
    $('#display-and-selectors').animate({"height":"31em"},100);
    $('#program').animate({"height":"17%"},100);   
    map.setView([defaultLat,defaultLon],defaultZoom);
  } else {
    $('#display-and-selectors').animate({"height":"31em"},100);
    $('#program').animate({"height":"17%"},500);   
    setMapToStateView(stateView);
  };
};

function setMapToStateView(state){
  var view = stateViews[state];
  map.setView([view.lat, view.lon],view.zoom);
};

var stateViews = {
  AK: {lat: 63.03503931552975, lon: -153.28125, zoom: 4},
  AL: {lat: 32.722598604044066, lon: -86.46240234375, zoom: 7},
  AR: {lat: 34.732584206123626, lon: -92.48291015625, zoom: 7},
  AZ: {lat: 34.17999758688084, lon: -112.30224609374999, zoom: 6},
  CA: {lat: 36.932330061503144, lon: -117.1142578125, zoom: 6},
  CO: {lat: 39.00211029922512, lon: -105.64453124999999, zoom: 7},
  CT: {lat: 41.537366035503794, lon: -72.78167724609375, zoom: 9},
  DC: {lat: 38.85147291406818, lon: -77.12539672851561, zoom: 10},
  DE: {lat: 39.16839998800284, lon: -75.3607177734375, zoom: 8},
  FL: {lat: 28.613459424004414, lon: -83.82568359375, zoom: 6},
  GA: {lat: 32.85190345738802, lon: -83.56201171875, zoom: 7},
  HI: {lat: 20.406420474920278, lon: -157.67578125, zoom: 7},
  IA: {lat: 42.00848901572399, lon: -93.4716796875, zoom: 7},
  ID: {lat: 45.359865333959746, lon: -113.37890625, zoom: 6},
  IL: {lat: 40.16208338164619, lon: -88.0224609375, zoom: 6},
  IN: {lat: 39.85915479295669, lon: -85.75927734375, zoom: 7},
  KS: {lat: 38.53097889440026, lon: -98.316650390625, zoom: 7},
  KY: {lat: 37.70989935485515, lon: -85.53955078125, zoom: 7},
  LA: {lat: 31.23159167205059, lon: -92.59277343749999, zoom: 7},
  MA: {lat: 42.1104489601222, lon: -71.7572021484375, zoom: 8},
  MD: {lat: 38.81403111409755, lon: -76.80541992187499, zoom: 8},
  ME: {lat: 44.94924926661151, lon: -70.0048828125, zoom: 6},
  MI: {lat: 44.213709909702054, lon: -86.0009765625, zoom: 6},
  MN: {lat: 46.55130547880643, lon: -92.83447265624999, zoom: 6},
  MO: {lat: 38.51378825951165, lon: -92.6806640625, zoom: 7},
  MS: {lat: 32.75032260780972, lon: -89.18701171875, zoom: 7},
  MT: {lat: 47.092565552235705, lon: -109.599609375, zoom: 6},
  NC: {lat: 35.24561909420681, lon: -80.31005859375, zoom: 7},
  ND: {lat: 47.535746978239125, lon: -99.95361328125, zoom: 7},
  NE: {lat: 41.53325414281322, lon: -99.580078125, zoom: 7},
  NH: {lat: 43.810747313446996, lon: -71.3671875, zoom: 7},
  NJ: {lat: 40.26276066437183, lon: -75.0311279296875, zoom: 8},
  NM: {lat: 34.298068350990846, lon: -106.029052734375, zoom: 7},
  NV: {lat: 38.92522904714054, lon: -116.82861328125001, zoom: 6},
  NY: {lat: 42.36666166373274, lon: -75.750732421875, zoom: 7},
  OH: {lat: 40.34654412118006, lon: -82.9248046875, zoom: 7},
  OK: {lat: 35.47856499535729, lon: -98.61328125, zoom: 7},
  OR: {lat: 44.03232064275084, lon: -120.4541015625, zoom: 7},
  PA: {lat: 41.07935114946899, lon: -77.816162109375, zoom: 7},
  RI: {lat: 41.75389768415882, lon: -71.55807495117188, zoom: 10},
  SC: {lat: 33.696922692957685, lon: -81.15600585937499, zoom: 7},
  SD: {lat: 44.382765762252404, lon: -100.535888671875, zoom: 7},
  TN: {lat: 35.4159149234562, lon: -86.451416015625, zoom: 7},
  TX: {lat: 31.259769987394286, lon: -99.0966796875, zoom: 6},
  UT: {lat: 39.9434364619742, lon: -111.104736328125, zoom: 7},
  VA: {lat: 37.77071473849609, lon: -79.2333984375, zoom: 7},
  VT: {lat: 43.9058083561574, lon: -72.24609375, zoom: 7},
  WA: {lat: 47.253135632244216, lon: -120.80566406250001, zoom: 7},
  WI: {lat: 44.465151013519616, lon: -88.9892578125, zoom: 7},
  WV: {lat: 38.93377552819722, lon: -80.068359375, zoom: 7},
  WY: {lat: 43.052833917627936, lon: -107.6550292968749, zoom: 7}
};
