function updateGraphFilterUnarmed(){
	readyWeightsToBeShown();
  $("#shots-weight").show();
  var weight = detectWeight();
  selectGraphFilterUnarmedWeight[weight]();
};

var selectGraphFilterUnarmedWeight = {
  "none" : function(){
    updateGraphFilterUnarmedWeightNone();
  },
  "shots-weight" : function(){
    updateGraphFilterUnarmedWeightShots();
  },
};
