function updateGraphFilterIllness(){
	readyWeightsToBeShown();
  $("#race-weight, #age-weight").show();
  var weight = detectWeight();
  selectGraphFilterIllnessWeight[weight]();
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
