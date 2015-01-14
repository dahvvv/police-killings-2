function updateMapFilterIllness(){
	readyWeightsToBeShown();
	$("#age-weight").show();
	var weight = detectWeight();
	selectMapFilterIllnessWeight[weight]();
};

var selectMapFilterIllnessWeight = {
	"none" : function(){
		updateMapFilterIllnessWeightNone();
	},
	"age-weight" : function(){
		updateMapFilterIllnessWeightAge();
	},
};

function filterIllnessLegendRegStyle(){
	var legend = $("#illness-filter-form").children(".legend");
	$.each(legend, function(i,el){
		var color = el.id === "ill" ? illnessColors["yes"] : illnessColors["no"];
		$(el).css({"width":"11px","height":"11px","background-color":color});
	});
};

function filterIllnessLegendAltStyle(legend){
	var illR = Math.ceil(illnessRadius["yes"]*1.5) + "px";
	var notIllR = Math.ceil(illnessRadius["no"]*1.5) + "px";
	legend.css({"background":"transparent"});
	$(legend[0]).css({"width":illR,"height":illR});
	$(legend[1]).css({"width":notIllR,"height":notIllR});
};

var illnessRadius = {
  "yes" : 14,
  "no"  : 6, 
};
