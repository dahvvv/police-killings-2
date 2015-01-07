function updateMapFilterRace(){
	$("#race-filter-form").show();
	readyWeightsToBeShown();
	$("#usPop-weight, #arrests-weight").show();
	var weight = detectWeight();
	selectMapFilterRaceWeight[weight]();
};

function updateMapFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>The racial distribution of people killed by police<br>in the United States.</p>";
	$("#program").html(program);
};

function updateMapFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: 'black',
	    radius: racePopweightToRadius(obj.victim_race),
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>A map of police shootings by race,<br>scaled by US population.</p>";
	$('#program').html(program);
};

function updateMapFilterRaceWeightArrests(){
	alert('where the fuck did this method go?');
};

var selectMapFilterRaceWeight = {
	"none" : function(){
		updateMapFilterRaceWeightNone();
	},
	"usPop" : function(){
		updateMapFilterRaceWeightUspop();
	},
	"arrests" : function(){
		updateMapFilterRaceWeightArrests();
	},
};