function updateGraphFilterUspop(choosers){
	readyWeightsToBeShown();
	$("#usPop-weight, #arrests-weight, #age-weight, #illness-weight").css({"display":"block"});
	if (choosers.weight === "none"){
		updateGraphFilterUspopWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterUspopWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterUspopWeightArrests();
	} else if (choosers.weight === "age"){
		updateGraphFilterUspopWeightAge();
	} else if (choosers.weight === "illness"){
		updateGraphFilterUspopWeightIllness();
	};
};

function capitaliseCity(city){
	if (city === "new york city"){
		return "NYC";
	} else if (city === "los angeles"){
		return "LA";
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
