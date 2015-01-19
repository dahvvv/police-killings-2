function updateMapFilterAgeWeightNone(){
  var lowerBound = 0;
  var upperBound = 107;
  var lowStandDev = 27;
  var highStandDev = 42;
  var regR = 3;
  var maxR = 25;
  var regRGBArr = [113,26,139];
  var youngRGBArr = [255,255,0];
  var oldRGBArr = [255,255,255];
  var data = dataMapFilterAgeWeightNone(lowStandDev, highStandDev, lowerBound, upperBound);
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
	    color: 'black',
	    fillOpacity: 1,
	    opacity: 1,
		};
		if (obj.victim_age < lowStandDev){
			obj["geoStyle"]["fillColor"] = colorScale(obj.victim_age,lowStandDev,lowerBound,regRGBArr,youngRGBArr);
			obj["geoStyle"]["radius"] = rScale(obj.victim_age,lowStandDev,lowerBound,regR,maxR);
		} else if (obj.victim_age >= lowStandDev && obj.victim_age <= highStandDev){
			obj["geoStyle"]["fillColor"] = "rgb(" + regRGBArr[0] + "," + regRGBArr[1] + "," + regRGBArr[2] + ")";
			obj["geoStyle"]["radius"] = regR;
		} else if (obj.victim_age > highStandDev){
			obj["geoStyle"]["fillColor"] = colorScale(obj.victim_age,highStandDev,upperBound,regRGBArr,oldRGBArr);
			obj["geoStyle"]["radius"] = rScale(obj.victim_age,highStandDev,upperBound,regR,maxR);
		};
    var name = obj.victim_name;
    var age = obj.victim_age;
    var source = obj.source;
    var img = obj.url_victim_image;
    var description = obj.description;
    obj["template"] = img === null ? templateMapNoPic(name, age, source, description) : templateMap(name, age, source, img, description);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
  setMapView(stateView, addGeoLayer, geoData);
  var program = _.contains([null, "USA"], stateView) ? programs.map.age.none : "";
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataMapFilterAgeWeightNone(lowStandDev, highStandDev, lowerBound, upperBound){
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
    return ageFromStandDev(obj.victim_age, lowStandDev, highStandDev, lowerBound, upperBound);
  });
};
