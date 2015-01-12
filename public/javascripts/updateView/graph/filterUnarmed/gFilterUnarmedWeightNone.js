function updateGraphFilterUnarmedWeightNone(){
	var labels = labelsGraphFilterUnarmedWeightNone;
	labels = dataGraphFilterUnarmedWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUnarmedWeightNone;
	createGraph(data, style);
	var program = "<p>This graph shows how many armed and unarmed people<br>have been killed by police.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/FE4nttB.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.kesq.com/kesq/Police-shoot-and-kill-Indio-man-details-of-shooting-still-a-mystery/18561016' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/K8QX3gT.png' /></a><a style='cursor:pointer' href='http://fingerlakesdailynews.com/news/details.cfm?clientid=16&id=32812#.VLMeBGTF8Ye' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/owCrm4S.png' /></a><p>You can see that in over 20% of all recorded instances,<br>when the police killed somebody,<br>the victim was unarmed.</p>";
	$('#program').html(program);
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
      tip.innerHTML = elem.value + " times on record,<br>the police have killed someone<br>and the victim was " + elem.label + ".";
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
