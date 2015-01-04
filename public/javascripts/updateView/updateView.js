function readyWeightsToBeShown(){
	$(".button-header").css({"display":"block"});
	$(".button-weight").css({"display":"none"});
};

function removeAllWeights(){
	$('.button-header, .button-weight').css({'display':'none'});
};

function updateView(choosers){
	if (choosers.displaySelector === "heatmap"){
		updateHeatmap(choosers);
	} else if (choosers.displaySelector === "marker"){
		updateMarkermap(choosers);
	} else if (choosers.displaySelector === "graph"){
		updateGraph(choosers);
	};
};


function updateHeatmap(choosers){};



function updateMarkermapFilterUspop(choosers){
	if (choosers.weight === "none"){
		updateMarkermapFilterUspopWeightNone();
	};
};



function updateMarkermapFilterUspopWeightNone(){
	var data = allKillings;
	var geoData = dataToGeoData(data);
	// var geoStyle = geoStyleFilterUspopWeightNone()
	removeExistingMaps();
	setMapView($('#state-filter').val());
	addGeoLayer(geoData);
};


// function dataFilterAgeWeightNone(choosers){
//   if (choosers.displaySelector === "heatmap"){
//     return filterByAge();
//   } else {
//     return filterAgeNotNil();
//   }
// };

