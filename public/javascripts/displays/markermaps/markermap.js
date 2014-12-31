function makeMarkermap(data, choosers){
	var geoFeatureArr = [];
	data.forEach(function(elem){
    var options = jsonElemToObjLiteral(elem,choosers);
    var geoFeature = featureToGeoFormat(options);
    geoFeatureArr.push(geoFeature);
  });
  var geoData = geoJSONify(geoFeatureArr);
  removeExistingMaps();
  var stateView = $('#state-filter').val();
  setMapView(stateView);
  addGeoLayer(geoData);
};

function jsonElemToObjLiteral(elem,choosers){
  var options = {
    filter: choosers.filter,
    displaySelector: choosers.displaySelector,
    weight: choosers.weight,
    lat: elem.lat,
    lng: elem.lng,
    address: elem.formatted_address,
    name: elem.victim_name,
    race: elem.victim_race,
    age: elem.victim_age,
    gender: elem.victim_gender,
    img: elem.url_victim_image,
    source: elem.source,
    description: elem.description,
    unarmed: elem.victim_unarmed,
    shots: elem.shots_fired,
    illness: elem.symptoms_of_mental_illness,
    popupContent: elem.popupContent,
  };
  return options;
};

function featureToGeoFormat(options){
  var geoFeature = 
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          options.lng,
          options.lat
        ]
      },
      "properties": {
        "marker-size": "small",
        "filter": options.filter,
        "displaySelector": options.displaySelector,
        "weight": options.weight,
        "name": options.name,
        "race": options.race,
        "age": options.age,
        "gender": options.gender,
        "unarmed": options.unarmed,
        "shots": options.shots,
        "illness": options.illness,
        "address": options.address,
        "description": options.description,
        "img": options.img,
        "source": options.source,
        "popupContent": options.popupContent,
      }
    };
  return geoFeature;
};

function geoJSONify(geoFeatureArr){
  return [
    {
      "type": "FeatureCollection",
      "features": geoFeatureArr
    }
  ]
};

function addGeoLayer(geoData){
  geoLayer = L.geoJson(geoData, {
    pointToLayer: function(feature, latlng){
      return L.circleMarker(latlng);
    },
    style: function(feature){
      if (feature.properties.filter === "usPop"){
        if (feature.properties.weight === "none"){
          return styleMarkerFilterPopWeightNone(feature);
        }
      } else if (feature.properties.filter === "race"){
        if (feature.properties.weight === "none"){
          return styleMarkerFilterRaceWeightNone(feature);
        } else if (feature.properties.weight === "usPop"){
          return styleMarkerFilterRaceWeightUspop(feature);
        }
      } else if (feature.properties.filter === "age"){
        if (feature.properties.weight === "none"){
          return styleMarkerFilterAgeWeightNone(feature);
        };
      } else if (feature.properties.filter === "gender"){
        if (feature.properties.weight === "none"){
          return styleMarkerFilterGenderWeightNone(feature);
        };
      } else if (feature.properties.filter === "unarmed"){
        if (feature.properties.weight === "none"){
          return styleMarkerFilterUnarmedWeightNone(feature);
        };
      }
    },
    onEachFeature: function(feature,layer){
      // var popupContent = feature.properties.popupContent;
      var template = _.template($('#popup-template').html());
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
  }
};
