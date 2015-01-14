function updateMapFilterAgeWeightNone(){
	var data = dataFilterAgeWeightNone();
  var lowerBound = 0;
  var upperBound = 107;
  var lowStandDev = 21;
  var highStandDev = 48;
  var regR = 3;
  var maxR = 25;
  var regRGBArr = [85,26,139];
  var youngRGBArr = [255,255,0];
  var oldRGBArr = [255,0,0];
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
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var stateView = $("#state-filter").val();
  var program = _.contains([null, "USA"], stateView) ? programs.map.age.none : "";
	$('#program').html(program);
};