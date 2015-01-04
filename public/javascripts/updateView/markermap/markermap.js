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

function makeMarkermap(geoData){
	removeExistingMaps();
	setMapView($('#state-filter').val());
	addGeoLayer(geoData);
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
