function updateGraphFilterShots(){
	readyWeightsToBeShown();
  $("#race-weight, #unarmed-weight").show();
  var weight = detectWeight();
  selectGraphFilterShotsWeight[weight]();
};

var selectGraphFilterShotsWeight = {
  "none" : function(){
    updateGraphFilterShotsWeightNone();
  },
  "race-weight" : function(){
    updateGraphFilterShotsWeightRace();
  },
  "unarmed-weight" : function(){
    updateGraphFilterShotsWeightUnarmed();
  },
};
