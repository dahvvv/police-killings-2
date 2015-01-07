function updateMap(){
	$(".legend, .weight-legend").show();
	var filter = $(".filter-type").attr("id");
  selectMapFilter[filter]();
};

var selectMapFilter = {
  "usPop-filter" : function(){
    updateMapFilterUspop();
  },
  "race-filter" : function(){
    updateMapFilterRace();
  },
  "age-filter" : function(){
    updateMapFilterAge();
  },
  "gender-filter" : function(){
    updateMapFilterGender();
  },
  "unarmed-filter" : function(){
    updateMapFilterUnarmed();
  },
  "illness-filter" : function(){
    updateMapFilterIllness();
  },
  "shots-filter" : function(){
    updateMapFilterShots();
  },
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

function makeMap(geoData){
	removeExistingMaps();
	setMapView($("#state-filter").val());
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
	if ($("#map-one").css("display") === "none") {
    $("#display-container-canvaswidget").remove();
    $("#map-one").slideToggle(750, function(e){
      geoLayer.addTo(map);
    });
  } else {
    geoLayer.addTo(map);
  };
};
