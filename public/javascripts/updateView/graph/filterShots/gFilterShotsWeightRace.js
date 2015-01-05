function updateGraphFilterShotsWeightRace(){
	var labels = labelsGraphFilterShotsWeightRace;
	for (i = 1; i < 20; i++){
		labels["labelObjCrossGraph"][i] = [0,0,0,0,0]
	};
	labels["labelObjCrossGraph"]["20+"] = [0,0,0,0,0];
	labels = dataGraphFilterShotsWeightRace(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterShotsWeightRace;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>There does not appear to be a significant relationship<br>between the number of shots fired by police and the victim's race.</p>";
	$('#program').html(program);
};

function dataGraphFilterShotsWeightRace(labels){
	$.each(allKillings, function(i,obj){
		if (obj.shots_fired === null || obj.victim_race === null){
			return true;
		} else if (obj.shots_fired < 20){
			var shots = obj.shots_fired;
		} else if (obj.shots_fired >= 20){
			var shots = "20+";
		};
		var race = obj.victim_race;
		labels["labelObjCrossGraph"][shots][labels["labelArrUpGraph"].indexOf(race)]++;
	});
	return labels;
};

var labelsGraphFilterShotsWeightRace = {
	colorArr : [
    "#3366FF",
    "#5200A3",
    "#FF0000",
    "#FFFF00",
    "#33CC33"
  ],
  labelArrUpGraph : [
    "white",
    "black",
    "hispanic and/or latin",
    "asian",
    "alaskan and/or pacific islander",
  ],
  labelObjCrossGraph : {}
};

var styleGraphFilterShotsWeightRace = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 0,
  Margin: {
    top:2,
    left: 0,
    right: 0,
    bottom:2
  },
  labelOffest: 0,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: true,
  Label: {
    type: 'HTML',
    size: 13,
    family: 'Helvetica',
    color: 'white',
    weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      tip.innerHTML = "<p>There are " + elem.value + " recorded cases in which the police shot " + elem.label + " times, and the victim victim was " + elem.name + ".";
    }
  },
};
