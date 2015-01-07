function updateHeatmapFilterAge(choosers){
	$("#age-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterAgeWeight[weight]();
};

function updateHeatmapFilterAgeWeightNone(){
	var data = filterByAge();
	makeHeatmap(data);
	var program = "<p class='program-text two-line'>This heatmap is scaled to show similar total heat for any age range,<br>in order to emphasize changes in locations.</p>";
	$('#program').html(program);
};

var selectHeatmapFilterAgeWeight = {
	"none" : function(){
		updateHeatmapFilterAgeWeightNone();
	},
};
