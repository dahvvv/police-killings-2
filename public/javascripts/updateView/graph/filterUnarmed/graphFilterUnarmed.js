function updateGraphFilterUnarmed(){
	readyWeightsToBeShown();
  $("#shots-weight").show();
  var weight = detectWeight();
  selectGraphFilterUnarmedWeight[weight]();


	if (choosers.weight === "none"){
		updateGraphFilterUnarmedWeightNone();
	} else if (choosers.weight === "shots"){
		updateGraphFilterUnarmedWeightShots();
	}
};

var selectGraphFilterUnarmedWeight = {
  "none" : function(){
    updateGraphFilterUnarmedWeightNone();
  },
  "shots-weight" : function(){
    updateGraphFilterUnarmedWeightShots();
  },
};
