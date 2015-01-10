function updateGraphFilterAge(){
  readyWeightsToBeShown();
  $("#usPop-weight, #arrests-weight, #race-weight, #illness-weight").show();
  var weight = detectWeight();
  selectGraphFilterAgeWeight[weight]();

	if (choosers.weight === "none"){
		updateGraphFilterAgeWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterAgeWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterAgeWeightArrests();
	} else if (choosers.weight === "race"){
		updateGraphFilterAgeWeightRace();
	} else if (choosers.weight === "illness"){
		updateGraphFilterAgeWeightIllness();
	}
};

var selectGraphFilterAgeWeight = {
  "none" : function(){
    updateGraphFilterAgeWeightNone();
  },
  "usPop-weight" : function(){
    updateGraphFilterAgeWeightUspop();
  },
  "arrests-weight" : function(){
    updateGraphFilterAgeWeightArrests();
  },
  "race-weight" : function(){
    updateGraphFilterAgeWeightRace();
  },
  "illness-weight" : function(){
    updateGraphFilterAgeWeightIllness();
  },
};

function ageFilterColorArr(){
  return hexScaler("#FFFFFF","#FFFF00",9)
  .slice(0,8)
  .concat(hexScaler("#FFFF00","#FF6600",7))
  .slice(0,14)
  .concat(hexScaler("#FF6600","#FF0000",7))
  .slice(0,20)
  .concat(hexScaler("#FF0000","#551A8B",7))
  .concat(hexScaler("#551A8B","#551A8B",14))
  .concat(hexScaler("#551A8B","#FF0000",8))
  .slice(0,48)
  .concat(hexScaler("#FF0000","#FF6600",7))
  .slice(0,54)
  .concat(hexScaler("#FF6600","#FFFF00",8))
  .slice(0,61)
  .concat(hexScaler("#FFFF00","#FFFFFF",46));
};

function ageFilterColorArr2(){
  return hexScaler("#FFFFFF","#FFFFAA",13)
  .slice(0,12)
  .concat(hexScaler("#FFFFAA","#FFFF00",5))
  .slice(0,16)
  .concat(hexScaler("#FFFF00","#FF0000",7,5))
  .slice(0,20)
  .concat(hexScaler("#FF0000","#551A8B",7))
  .concat(hexScaler("#551A8B","#551A8B",14))
  .concat(hexScaler("#551A8B","#FF0000",8))
  .slice(0,48)
  .concat(hexScaler("#FF0000","#FFFF00",7,2))
  .slice(0,54)
  .concat(hexScaler("#FFFF00","#FFFFAA",8))
  .slice(0,61)
  .concat(hexScaler("#FFFFAA","#FFFFFF",46));
};

var citiesByAge = [
  "N Orleans",
  "Orlando",
  "Oakland",
  "Houston",
  "DC",
  "Memphis",
  "Albuquerque",
  "Riverside",
  "Miami",
  "Henderson"
];
