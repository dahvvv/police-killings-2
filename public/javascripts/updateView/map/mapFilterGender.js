function updateMapFilterGender(){
	$("#gender-filter-form").show();
	readyWeightsToBeShown();
	$("#unarmed-weight, #illness-weight").show();
	var weight = detectWeight();
	selectMapFilterGenderWeight[weight]();
};

function updateMapFilterGenderWeightNone(){
	var data = dataFilterGenderWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: genderColors[obj.victim_gender],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text one-line'>Gender map.</p>";
	$("#program").html(program);
};

function updateMapFilterGenderWeightUnarmed(){
	var data = dataFilterGenderWeightUnarmed();
};

function updateMapFilterGenderWeightIllness(){
	var data = dataFilterGenderWeightIllness();
};

var selectMapFilterGenderWeight = {
	"none" : function(){
		updateMapFilterGenderWeightNone();
	},
	"unarmed" : function(){
		updateMapFilterGenderWeightUnarmed();
	},
	"illness" : function(){
		updateMapFilterGenderWeightIllness();
	},
};
