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
	var program = programs.heatmap.race.none;
	var marginTop = _.contains([null, "USA"], stateView) ? "0" : "17%";
	$("#program").css({"margin-top":marginTop});
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
