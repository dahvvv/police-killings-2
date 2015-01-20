function updateGraphFilterIllnessWeightNone(){
	var labels = labelsGraphFilterIllnessWeightNone;
	labels = dataGraphFilterIllnessWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterIllnessWeightNone;
	createGraph(data, style);
	var program = programs.graph.illness.none;
	$('#program').html(program);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {label: "symptoms"};
    graphFilterIllnessWeightNoneTipSample(elem);
  });
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterIllnessWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.symptoms_of_mental_illness === "no"){
			var illness = "no symptoms";
      labels["labelObjCrossGraph"][illness][0]++;
		} else if (obj.symptoms_of_mental_illness === "yes"){
			var illness = "symptoms";
      labels["labelObjCrossGraph"][illness][0]++;
		};
	});
	return labels;
};

var labelsGraphFilterIllnessWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {
  	"no symptoms" : [0],
  	"symptoms" : [0]
  }
};

var styleGraphFilterIllnessWeightNone = {
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
  showAggregates: true,
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
      tip.innerHTML = "On record,<br />" + elem.value + " people<br />have been killed by the police<br>while exhibiting " + elem.label + " of mental illness.<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterIllnessWeightNoneTipSample(node);
    }
  }
};

function graphFilterIllnessWeightNoneTipSample(elem){
  var illness = elem.label === "symptoms" ? "yes" : "no";
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === illness;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
