function updateGraphFilterUspop(){
	readyWeightsToBeShown();
	$("#usPop-weight, #age-weight, #illness-weight").show();
	var weight = detectWeight();
	selectGraphFilterUspopWeight[weight]();
};

var selectGraphFilterUspopWeight = {
	"none" : function(){
		updateGraphFilterUspopWeightNone();
	},
	"usPop-weight" : function(){
		updateGraphFilterUspopWeightUspop();
	},
	"age-weight" : function(){
		updateGraphFilterUspopWeightAge();
	},
	"illness-weight" : function(){
		updateGraphFilterUspopWeightIllness();
	},
};

function capitaliseCity(city){
	if (city === "new york city"){
		return "NYC";
	} else if (city === "los angeles"){
		return "LA";
	} else if (city === "washington"){
		return "DC";
	} else if (city === "new orleans"){
		return "N Orleans";
	} else {
		return city.split(" ")
	  .map(function(string){
	  	return string.charAt(0)
	  	.toUpperCase() + string.slice(1);
	  })
	  .join(" ");
	};
};

function lowercaseCity(city){
	if (city === "NYC"){
		return "new york city";
	} else if (city === "LA"){
		return "los angeles";
	} else if (city === "DC"){
		return "washington";
	} else if (city === "N Orleans"){
		return "new orleans";
	} else {
		return city.toLowerCase();
	};
};

var topCities = [
	"Houston",
	"Baltimore",
	"Cleveland",
	"Oakland",
	"Portland",
	"Albuquerque",
	"Chicago",
	"LA",
	"Las Vegas",
	"NYC",
];

var populationByCity = {
	"Houston" 		: 2196000,
	"Baltimore"	 	: 622104,
	"Cleveland"		: 390113,
	"Oakland"			: 406253,
	"Portland"		: 609456,
	"Albuquerque" : 556495,
	"Chicago" 		: 2719000,
	"LA" 					: 3884000,
	"Las Vegas" 	: 603488,
	"NYC" 				: 8406000
};
