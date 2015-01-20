function updateGraphFilterIllnessWeightRace(){
	var labels = labelsGraphFilterIllnessWeightRace;
	labels = dataGraphFilterIllnessWeightRace(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
  $.each($(".graph-legend-container").children(".legend-text"), function(i,span){
    var race = span.innerHTML
    .split("<")[0]
    .toLowerCase();
    race = capitalize(abbreviateRace(race, "vertical"));
    this.innerHTML = race + "<br>";
  });
	var data = labelsToData(labels);
	var style = styleGraphFilterIllnessWeightRace;
	createGraph(data, style);
	var program = programs.graph.illness.race;
	$('#program').html(program);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {label: "symptoms"};
    elem["name"] = this.id;
    graphFilterIllnessWeightRaceTipSample(elem);
  });
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterIllnessWeightRace(labels){
	$.each(allKillings, function(i,obj){
    var race = obj.victim_race;
		if (obj.symptoms_of_mental_illness === null 
    || race === null){
			return true;
		} else if (obj.symptoms_of_mental_illness === "no"){
			var illness = "no symptoms";
      labels["labelObjCrossGraph"][illness][labels["labelArrUpGraph"].indexOf(race)]++;
		} else if (obj.symptoms_of_mental_illness === "yes"){
			var illness = "symptoms";
      labels["labelObjCrossGraph"][illness][labels["labelArrUpGraph"].indexOf(race)]++;
		};
	});
	return labels;
};

var labelsGraphFilterIllnessWeightRace = {
	colorArr : [
    "#3366FF",
    "#5200A3",
    "#FF0000",
    "#FF6600",
    "#FFFF00",
  ],
  labelArrUpGraph : races,
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

      tip.innerHTML = "On record,<br>the police have killed " + elem.value + " people<br>who were " + elem.name + "<br>and who were exhibiting " + elem.label + " of mental illness.<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterIllnessWeightRaceTipSample(node);
    }
  }
};

function graphFilterIllnessWeightRaceTipSample(elem){
  if (elem.label === "symptoms"){
    var illness = "yes";
  } else if (elem.label === "no symptoms"){
    var illness = "no";
  };
  var race = expandRace(elem.name,"horizontal");
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === illness 
    && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
