function updateGraphFilterIllnessWeightRace(){
	var labels = labelsGraphFilterIllnessWeightRace;
	labels = dataGraphFilterIllnessWeightRace(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterIllnessWeightRace;
	createGraph(data, style);
	var program = "<p class='program-text four-line'>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};

function dataGraphFilterIllnessWeightRace(labels){
	$.each(allKillings, function(i,obj){
		if (obj.symptoms_of_mental_illness === null || obj.victim_race === null){
			return true;
		} else if (obj.symptoms_of_mental_illness === "no"){
			var illness = "no symptoms";
		} else if (obj.symptoms_of_mental_illness === "yes"){
			var illness = "symptoms";
		};
		var race = obj.victim_race;
		labels["labelObjCrossGraph"][illness][labels["labelArrUpGraph"].indexOf(race)]++;
	});
	return labels;
};

var labelsGraphFilterIllnessWeightRace = {
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
  labelObjCrossGraph : {
  	"no symptoms" : [0,0,0,0,0],
  	"symptoms" : [0,0,0,0,0]
  }
};

var styleGraphFilterIllnessWeightRace = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'horizontal',
  barsOffset: 50,
  Margin: {
    top:50,
    left: 25,
    right: 75,
    bottom:50
  },
  labelOffest:5,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: true,
  Label: {
    type: 'Native',
    size: 16,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      tip.innerHTML = "from " + elem.name + ",<br>" + elem.value + " people were killed by police while exhibiting " + elem.label + " of mental illness.";
    }
  }
};
