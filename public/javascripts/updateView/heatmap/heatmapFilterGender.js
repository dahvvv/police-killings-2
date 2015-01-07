function updateHeatmapFilterGender(){
	$("#gender-filter-form").show();
	readyWeightsToBeShown();
	$("#unarmed-weight, #illness-weight").show();
	var weight = detectWeight();
	selectHeatmapFilterGenderWeight[weight]();
};

function updateHeatmapFilterGenderWeightNone(){
	var data = dataFilterGenderWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Gender Heatmap</p>";
	$('#program').html(program);
};

function updateHeatmapFilterGenderWeightUnarmed(){};

function updateHeatmapFilterGenderWeightIllness(){};

var selectHeatmapFilterGenderWeight = {
	"none" : function(){
		updateHeatmapFilterGenderWeightNone();
	},
	"unarmed" : function(){
		updateHeatmapFilterGenderWeightUnarmed();
	},
	"illness" : function(){
		updateHeatmapFilterGenderWeightIllness();
	},
};
