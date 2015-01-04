function updateMarkermapFilterAge(choosers){
	if ($('#age-range').css('display') === "none"){
		$('#age-range').css({"display":"block"});
	};
	removeAllWeights();
	if (choosers.weight === "none"){
		updateMarkermapFilterAgeWeightNone();
	};
};

function updateMarkermapFilterAgeWeightNone(){
	var data = filterByAge();
  var lowerBound = 0;
  var upperBound = 107;
  var lowStandDev = 21;
  var highStandDev = 48;
  var regR = 3;
  var maxR = 25;
  var regRGBArr = [0,76,153];
  var maxRGBArr = [255,255,0];
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
	    color: 'black',
	    fillOpacity: 1,
	    opacity: 1,
		};
		if (obj.victim_age < lowStandDev){
			obj["geoStyle"]["fillColor"] = colorScale(obj.victim_age,lowStandDev,lowerBound,regRGBArr,maxRGBArr);
			obj["geoStyle"]["radius"] = rScale(obj.victim_age,lowStandDev,lowerBound,regR,maxR);
		} else if (obj.victim_age >= lowStandDev && obj.victim_age <= highStandDev){
			obj["geoStyle"]["fillColor"] = "rgb(" + regRGBArr[0] + "," + regRGBArr[1] + "," + regRGBArr[2] + ")";
			obj["geoStyle"]["radius"] = regR;
		} else if (obj.victim_age > highStandDev){
			obj["geoStyle"]["fillColor"] = colorScale(obj.victim_age,highStandDev,upperBound,regRGBArr,maxRGBArr);
			obj["geoStyle"]["radius"] = rScale(obj.victim_age,highStandDev,upperBound,regR,maxR);
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMarkermap(geoData);
	var program = "<p class='program-text four-line'>The larger and brighter the dot,<br>the farther that person was from average victim age-range.<br>An unusual amount of very young, or very old people<br>have been killed in Texas, Oklahoma, and Arkansas.</p>";
	$('#program').html(program);
};
