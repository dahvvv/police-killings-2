function updateHeatmapFilterAge(){
	$("#age-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterAgeWeight[weight]();
};

function updateHeatmapFilterAgeWeightNone(){
	var stateView = $('#state-filter').val();
	var data = dataFilterAgeWeightNone();
	makeHeatmap(data, stateView);
	var program = programs.heatmap.age.none;
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

var selectHeatmapFilterAgeWeight = {
	"none" : function(){
		updateHeatmapFilterAgeWeightNone();
	},
};
