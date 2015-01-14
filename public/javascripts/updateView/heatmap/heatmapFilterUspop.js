function updateHeatmapFilterUspop(){
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterUspopWeight[weight]();
};

function updateHeatmapFilterUspopWeightNone(){
	var stateView = $('#state-filter').val();
	if (_.contains([null,"USA"], stateView)){
		var data = allKillings;
	} else {
		var data = allKillings.filter(function(el){
			return el.location_of_killing_state === stateView;
		});
	};
	makeHeatmap(data);
	var stateView = $("#state-filter").val();
  var program = _.contains([null, "USA"], stateView) ? programs.heatmap.usPop.none : "";
	$("#program").html(program);
	$("#about-link").on("click", function(e){
    e.preventDefault();
    $("#page-container").html(pages[1]);
    $("#page-container").css({"opacity":"0"});
    $("#about").slideToggle(600, function(){
    	$("#page-container").animate({"opacity":"1"},400);
    });
  });
};

var selectHeatmapFilterUspopWeight = {
	"none" : function(){
		updateHeatmapFilterUspopWeightNone();
	},
};
