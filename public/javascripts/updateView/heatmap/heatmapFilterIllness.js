function updateHeatmapFilterIllness(){
	$("#illness-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterIllnessWeight[weight]();
};

function updateHeatmapFilterIllnessWeightNone(){
	var data = dataFilterIllnessWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
  var program = _.contains([null, "USA"], stateView) ? programs.heatmap.illness.none : "";
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

var selectHeatmapFilterIllnessWeight = {
	"none" : function(){
		updateHeatmapFilterIllnessWeightNone();
	},
};
