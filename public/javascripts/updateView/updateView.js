function readyWeightsToBeShown(){
	$(".button-header").css({"display":"block"});
	$(".button-weight").css({"display":"none"});
};

function updateView(choosers){
	if (choosers.displaySelector === "heatmap"){
		updateHeatmap(choosers);
	} else if (choosers.displaySelector === "marker"){
		updateMarkermap(choosers);
	} else if (choosers.displaySelector === "graph"){
		updateGraph(choosers);
	};
};

//  new routing for the display types


function updateHeatmap(choosers){};

function updateMarkermap(choosers){
	if ($('#age-range').css('display') != "none"){
		$('#age-range').css({"display":"none"});
	};
	$('.legend').css({"display":"inline-block"});
	selectMarkermapFilter(choosers);
};

function selectMarkermapFilter(choosers){
	if (choosers.filter === "usPop"){
		updateMarkermapFilterUspop(choosers);
	} else if (choosers.filter === "race"){
		updateMarkermapFilterRace(choosers);
	} else if (choosers.filter === "age"){
		updateMarkermapFilterAge(choosers);
	} else if (choosers.filter === "gender"){
		updateMarkermapFilterGender(choosers);
	} else if (choosers.filter === "unarmed"){
		updateMarkermapFilterUnarmed(choosers);
	} else if (choosers.filter === "illness"){
		updateMarkermapFilterIllness(choosers);
	} else if (choosers.filter === "shots"){
		updateMarkermapFilterShots(choosers);
	};
};



function updateMarkermapFilterUspop(choosers){
	if (choosers.weight === "none"){
		updateMarkermapFilterUspopWeightNone();
	};
};

function updateMarkermapFilterRace(choosers){
	if (choosers.weight === "none"){
		updateMarkermapFilterRaceWeightNone();
	};
};



function updateMarkermapFilterUspopWeightNone(){
	var data = allKillings;
	var geoData = dataToGeoData(data);
	// var geoStyle = geoStyleFilterUspopWeightNone()
	removeExistingMaps();
	setMapView($('#state-filter').val());
	addGeoLayer(geoData);
};

function updateMarkermapFilterRaceWeightNone(){
	if ($('#race-selection').css('display') === "none"){
		$('#race-selection').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight').css({'display':'block'});
	var data = dataFilterRaceWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: 'black',
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	removeExistingMaps();
	setMapView($('#state-filter').val());
	addGeoLayer(geoData);
	var program = "<p class='program-text two-line'>The racial distribution of people killed by police<br>in the United States.</p>";
	$('#program').html(program);
};

var raceColors = {
  "alaskan and/or pacific islander" : "crimson",
  "asian"                           : "darkorange",
  "black"                           : "yellow",
  "hispanic and/or latin"           : "limegreen",
  "white"                           : "royalblue",
};

function dataToGeoData(data){
	var geoArr = $.map(data, function(obj,i){
		return {
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [obj.lng, obj.lat]
			},
			"properties": {
				"marker-size": "small",
				"name": obj.victim_name,
				"race": obj.victim_race,
        "age": obj.victim_age,
        "gender": obj.victim_gender,
        "unarmed": obj.victim_unarmed,
        "shots": obj.shots_fired,
        "illness": obj.symptoms_of_mental_illness,
        "address": obj.formatted_address,
        "description": obj.description,
        "img": obj.url_victim_image,
        "source": obj.source,
        "style": obj.geoStyle,
        "template": obj.template
			}
		}
	});
	var geoData = [{
		"type": "FeatureCollection",
		"features": geoArr
	}];
	return geoData;
};

function addGeoLayer(geoData){
	geoLayer = L.geoJson(geoData, {
		pointToLayer: function(feature, latlng){
			return L.circleMarker(latlng);
		},
		style: function(feature){
			return feature.properties.style;
		},
		onEachFeature: function(feature,layer){
			var template = feature.properties.template;
			var popupContent = template(feature.properties);
			layer.bindPopup(popupContent, {
        maxHeight: 400,
        maxWidth: 700
      });
		}
	});
	if ($('#map-one').css('display') === "none") {
    $('#display-container-canvaswidget').remove();
    $('#map-one').slideToggle(750, function(e){
      geoLayer.addTo(map);
    });
  } else {
    geoLayer.addTo(map);
  };
};

function makeGraph(data, style){
	var graph = new $jit.BarChart(style);
	graph.loadJSON(data);
};


// function dataFilterAgeWeightNone(choosers){
//   if (choosers.displaySelector === "heatmap"){
//     return filterByAge();
//   } else {
//     return filterAgeNotNil();
//   }
// };

