function updateGraphFilterAgeWeightIllness(){
	var labels = labelsGraphFilterAgeWeightIllness;
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0,0];
	};
	labels = dataGraphFilterAgeWeightIllness(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightIllness;
	createGraph(data, style);
  var program = programs.graph.age.illness;
  setProgram(program, null);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {label: 47};
    elem["name"] = this.id;
    graphFilterAgeWeightIllnessTipSample(elem);
  });
};

function dataGraphFilterAgeWeightIllness(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_age === null || obj.symptoms_of_mental_illness === null){
			return true;
		} else {
			var age = obj.victim_age;
		};
		var illness = obj.symptoms_of_mental_illness === "yes" ? "symptoms" : "no symptoms";
		labels["labelObjCrossGraph"][age][labels["labelArrUpGraph"].indexOf(illness)]++;
	});
	return labels;
};

var labelsGraphFilterAgeWeightIllness = {
	colorArr : [secondColor, baseColor],
  labelArrUpGraph : ["symptoms", "no symptoms"],
  labelObjCrossGraph : {}
};

var styleGraphFilterAgeWeightIllness = {
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
  showLabels: function(i){
    if (i%10===0) {
      return true
    } else {
      return false
    }
  },
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
      tip.innerHTML = "On record,<br />the police have killed " + elem.value + " people<br />who exhibited " + elem.name + " of mental illness<br />and were " + elem.label + " years old.<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterAgeWeightIllnessTipSample(node);
    }
  }
};

function graphFilterAgeWeightIllnessTipSample(elem){
  if (elem.name === "symptoms"){
    var illness = "yes";
  } else if (elem.name === "no symptoms"){
    var illness = "no";
  };
  var age = parseInt(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.symptoms_of_mental_illness === illness;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
