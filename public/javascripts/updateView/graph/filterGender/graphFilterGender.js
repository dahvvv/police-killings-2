function updateGraphFilterGender(){
	readyWeightsToBeShown();
  $("#unarmed-weight, #illness-weight").show();
  var weight = detectWeight();
  selectGraphFilterGenderWeight[weight]();
};

var selectGraphFilterGenderWeight = {
  "none" : function(){
    updateGraphFilterGenderWeightNone();
  },
  "unarmed-weight" : function(){
    updateGraphFilterGenderWeightUnarmed();
  },
  "illness-weight" : function(){
    updateGraphFilterGenderWeightIllness();
  },
};
