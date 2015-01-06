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
