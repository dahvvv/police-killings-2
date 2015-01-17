function updateGraphFilterUnarmedWeightNone(){
	var labels = labelsGraphFilterUnarmedWeightNone;
	labels = dataGraphFilterUnarmedWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUnarmedWeightNone;
	createGraph(data, style);
	var program = programs.graph.unarmed.none;
	$('#program').html(program);
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterUnarmedWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_unarmed === null){
			return true;
		} else {
			var unarmed = obj.victim_unarmed ? "unarmed" : "armed";
		};
		labels["labelObjCrossGraph"][unarmed][0]++;
	});
	return labels;
};

var labelsGraphFilterUnarmedWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {
  	"armed": [0],
  	"unarmed" : [0]
  }
};

var styleGraphFilterUnarmedWeightNone = {
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
      tip.innerHTML = elem.value + " times on record,<br>the police have killed someone<br>and the victim was " + elem.label + ".<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUnarmedWeightNoneTipSample(node);
    }
  }
};

function graphFilterUnarmedWeightNoneTipSample(elem){
  var unarmed = elem.label === "unarmed" ? true : false;
  var collection = allKillings.filter(function(el){
    return el.victim_unarmed === unarmed;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
