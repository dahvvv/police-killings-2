function updateHeatmapFilterShots(){
	$("#shots-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterShotsWeight[weight]();
};

function updateHeatmapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
  var program = _.contains([null, "USA"], stateView) ? programs.heatmap.shots.none : "";
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

var selectHeatmapFilterShotsWeight = {
	"none" : function(){
		updateHeatmapFilterShotsWeightNone();
	},
};
