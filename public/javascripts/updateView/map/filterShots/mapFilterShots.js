function updateMapFilterShots(){
	$("#shots-filter-form").show();
	readyWeightsToBeShown();
	$('#race-weight').show();
	var weight = detectWeight();
	selectMapFilterShotsWeight[weight]();
};

var selectMapFilterShotsWeight = {
	"none" : function(){
		updateMapFilterShotsWeightNone();
	},
	"race-weight" : function(){
		updateMapFilterShotsWeightRace();
	},
	"unarmed-weight" : function(){
		updateMapFilterShotsWeightUnarmed();
	},
};

function programIntroMapShots(data){
	var min = shotsRange().min;
	var max = shotsRange().max;
	var timeTimes = max === 1 ? "time" : "times";
	if (min === 0){
		if (max === 999){
			return "<p>All cases in which the number of shots fired by police was recorded.</p>";
		} else {
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting " + max + " " + timeTimes + " or fewer<br />in " + data.length + " recorded cases.</p>";
		};
	} else {
		if (max === 999){
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting " + min + " or more times<br />in " + data.length + " recorded cases.</p>";
		} else {
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting between " + min + " and " + max + " times<br />in " + data.length + " recorded cases.</p>";
		};
	};
};

function templateMapShots(name,age,source,img,description,shots){
  return "<div class='popup-container'><h4>" + name + "</h4><h4>Shots Fired:  " + shots + "</h4><h4>Age:  " + age + "</h4><h4><a href='" + source + "' target=_blank>Source</a></h4><img class='popup-img' src='" + img + "' alt=''><p><strong>" + description + "</strong></p></div>"
};

function templateMapShotsNoPic(name,age,source,description,shots){
  return "<div class='popup-container'><h4>" + name + "</h4><h4>Shots Fired:  " + shots + "</h4><h4>Age:  " + age + "</h4><h4><a href='" + source + "' target=_blank>Source</a></h4><p><strong>" + description + "</strong></p></div>"
};

