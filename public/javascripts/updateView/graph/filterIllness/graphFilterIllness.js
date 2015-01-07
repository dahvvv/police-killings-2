function updateGraphFilterIllness(){
	readyWeightsToBeShown();
  $("#race-weight, #age-weight").show();
  var weight = detectWeight();
  selectGraphFilterIllnessWeight[weight]();

	if (choosers.weight === "none"){
		updateGraphFilterIllnessWeightNone();
	} else if (choosers.weight === "race"){
		updateGraphFilterIllnessWeightRace();
	} else if (choosers.weight === "age"){
		updateGraphFilterIllnessWeightAge();
	}
};

var selectGraphFilterIllnessWeight = {
  "none" : function(){
    updateGraphFilterIllnessWeightNone();
  },
  "race-weight" : function(){
    updateGraphFilterIllnessWeightRace();
  },
  "age-weight" : function(){
    updateGraphFilterIllnessWeightAge();
  },
};

var citiesByIllness = [
	"Seattle",
	"Albuquerque",
	"Reno",
	"Spokane",
	"Riverside",
	"Henderson",
	"LA",
	"Portland",
	"Las Vegas",
	"NYC"
];
