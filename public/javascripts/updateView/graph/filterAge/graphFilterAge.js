function updateGraphFilterAge(choosers){
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight, #race-weight, #illness-weight').css({'display':'block'});
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
  return hexScaler("#551A8B","#FF0000",9)
  .slice(0,8)
  .concat(hexScaler("#FF0000","#FF6600",7))
  .slice(0,14)
  .concat(hexScaler("#FF6600","#FFFF00",7))
  .slice(0,20)
  .concat(hexScaler("#FFFF00","#FFFFFF",7))
  .concat(hexScaler("#FFFFFF","#FFFFFF",14))
  .concat(hexScaler("#FFFFFF","#FFFF00",8))
  .slice(0,48)
  .concat(hexScaler("#FFFF00","#FF6600",7))
  .slice(0,54)
  .concat(hexScaler("#FF6600","#FF0000",8))
  .slice(0,61)
  .concat(hexScaler("#FF0000","#551A8B",46));
};
