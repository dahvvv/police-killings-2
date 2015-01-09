function updateMapFilterUspop(){
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectMapFilterUspopWeight[weight]();
};

var selectMapFilterUspopWeight = {
	"none" : function(){
		updateMapFilterUspopWeightNone();
	},
};
