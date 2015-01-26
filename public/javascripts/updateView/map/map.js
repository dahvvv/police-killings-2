function updateMap(){
  $("#state-filter-form").show();
	$(".legend, .weight-legend").css({"display":"inline-block"});
  $(".graph-legend-container").hide();
	var filter = $(".filter-type").attr("id");
  createSpinner();
  $("#about-fixed").show();
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

function addGeoLayer(geoData){
  // if ($("#map-one").css("display") === "none") {
  //   $("#display-container-canvaswidget").remove();
  //   $("#map-one").show();
  // };
  // map.invalidateSize();
	geoLayer = L.geoJson(geoData, {
		pointToLayer: function(feature, latlng){
			return L.circleMarker(latlng);
		},
		style: function(feature){
			return feature.properties.style;
		},
		onEachFeature: function(feature,layer){
      var popupContent = feature.properties.template;
      var divNode = document.createElement("DIV");
      divNode.innerHTML = popupContent;
      layer.bindPopup(divNode, {
        maxHeight: 500,
        maxWidth: 700,
        autoPan: true,
      });
		}
	});
    // Fix this!!  this is the more attractive slide-to-map view, but it's buggy for some reason

    // $("#map-one").slideToggle(750, function(e){
    //   map.invalidateSize();
    //   setTimeout(function(){
    //     geoLayer.addTo(map);
    //   },20);
    // });
  geoLayer.addTo(map);
  map.whenReady(function(){
    spinner.stop();
  });
};

function basicRadius(){
  if ($("#state-filter").val() === null || $("#state-filter").val() === "USA"){
    return 7;
  } else {
    return 10;
  };
};

function rScale(val,valMin,valMax,rMin,rMax){
  var multiplier = (val - valMin) / (valMax - valMin);
  return Math.ceil(rMin + ((rMax - rMin) * multiplier));
};

function colorScale(val,valMin,valMax,minRGBArr,maxRGBArr){
  var newRGB = $.map(minRGBArr, function(minColor,i){
    var multiplier = (val - valMin) / (valMax - valMin);
    return Math.floor(minColor + ((maxRGBArr[i] - minColor) * multiplier));
  });
  return "rgb(" + newRGB[0] + "," + newRGB[1] + "," + newRGB[2] + ")";
};

function dataMapFilterAgeWeightNone(){
  var stateView = $("#state-filter").val();
  var arr = allKillings.filter(function(el){
    if (stateView === null || stateView === "USA"){
      return el.victim_age >= enteredAgeRange().min 
      && el.victim_age <= enteredAgeRange().max;
    } else {
      return el.victim_age >= enteredAgeRange().min 
      && el.victim_age <= enteredAgeRange().max 
      && el.location_of_killing_state === stateView;
    };
  });
  return _.sortBy(arr, function(obj){
    return ageFromStandDev(obj.victim_age, 27, 42)
  });
};

function ageFromStandDev(age, lowStandDev, highStandDev, lowerBound, upperBound){
  if (age < lowStandDev){
    return rScale(age,lowStandDev,lowerBound,0,1000)
  } else if (age <= highStandDev){
    return 0;
  } else {
    return rScale(age,highStandDev,upperBound,0,1000);
  };
};

function setMapTemplate(obj){
  var name = obj.victim_name;
  var age = obj.victim_age;
  var source = obj.source;
  var img = obj.url_victim_image;
  var description = obj.description;
  var nameHTML = name === null ? "<h4><em>No Name Given</hr>" : "<h4>" + name + "</h4>";
  var ageHTML = age === null ? "" : "<h4>Age:  " + age + "</h4>";
  var sourceHTML = source === null ? "" : "<h4><a href='" + source + "' target=_blank>Source</a></h4>";
  var imgHTML = img === null ? "" : "<img class='popup-img' src='" + img + "' alt=''>";
  var descriptionHTML = description === null ? "" : "<p><strong>" + description + "</strong></p>";
  return "<div class='popup-container'>" + nameHTML + ageHTML + sourceHTML + imgHTML + descriptionHTML + "</div>";
};
