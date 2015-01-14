function updateHeatmapFilterUnarmed(){
	$("#unarmed-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterUnarmedWeight[weight]();
};

function updateHeatmapFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	makeHeatmap(data);
	var stateView = $("#state-filter").val();
  var program = _.contains([null, "USA"], stateView) ? programs.heatmap.unarmed.none : "";
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

var selectHeatmapFilterUnarmedWeight = {
	"none" : function(){
		updateHeatmapFilterUnarmedWeightNone();
	},
};
