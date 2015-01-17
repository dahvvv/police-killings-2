function updateHeatmapFilterRace(){
	$("#race-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterRaceWeight[weight]();
};

var selectHeatmapFilterRaceWeight = {
	"none" : function(){
		updateHeatmapFilterRaceWeightNone();
	},
};

function updateHeatmapFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
	var program = _.contains([null, "USA"], stateView) ? programs.heatmap.race.none : "";
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function updateHeatmapFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
};

function updateHeatmapFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
};
