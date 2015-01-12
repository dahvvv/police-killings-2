function updateMapFilterAge(){
	$("#age-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectMapFilterAgeWeight[weight]();
};

var selectMapFilterAgeWeight = {
	"none" : function(){
		updateMapFilterAgeWeightNone();
	},
};
