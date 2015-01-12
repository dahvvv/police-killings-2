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

var graphLegendShots = "<span class='graph-legend' style='background-color:#FF0000'></span><span class='legend-text'>20+ shots fired</span><br /><span class='graph-legend' style='background-color:#0000B2'></span><span class='legend-text'>1 shot fired</span><br />";
