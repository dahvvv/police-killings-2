function updateGraphFilterUnarmedWeightShots(){
	var labels = labelsGraphFilterUnarmedWeightShots;
	for (i = 0; i < 20; i++){
		labels["labelObjCrossGraph"]["armed"].push(0);
		labels["labelObjCrossGraph"]["unarmed"].push(0);
	};
	labels = dataGraphFilterUnarmedWeightShots(labels);
  $(".graph-legend-container").empty()
  .css({"top":"55%"})
  .show();
  $(graphLegendShots).appendTo($(".graph-legend-container"));
	var data = labelsToData(labels);
	var style = styleGraphFilterUnarmedWeightShots;
	createGraph(data, style);
  var program = programs.graph.unarmed.shots;
  setProgram(program, null);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {label: "unarmed", name: 14};
    graphFilterUnarmedWeightShotsTipSample(elem);
  });
};

function dataGraphFilterUnarmedWeightShots(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_unarmed === null || obj.shots_fired === null){
			return true;
		} else {
			var unarmed = obj.victim_unarmed ? "unarmed" : "armed";
		};
		var shots = obj.shots_fired >= 20 ? "20+" : obj.shots_fired
		labels["labelObjCrossGraph"][unarmed][labels["labelArrUpGraph"].indexOf(shots)]++;
	});
  // $.each(labels["labelObjCrossGraph"], function(armedUnarmed, deathsArr){
  //   var totalKilledArmedUnarmed = deathsArr.reduce(function(prev,current){
  //     return prev + current;
  //   });
  //   labels["labelObjCrossGraph"][armedUnarmed] = $.map(deathsArr, function(totalKilled){
  //     var percentKilledTimesHun = Math.ceil((totalKilled/totalKilledArmedUnarmed) * 10000);
  //     return percentKilledTimesHun;
  //   });
  // });
	return labels;
};

var labelsGraphFilterUnarmedWeightShots = {
  colorArr : hexScaler("#0000B2","#FF0000",20,5),
  labelArrUpGraph : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,"20+"],
  labelObjCrossGraph : {
  	"armed": [],
  	"unarmed" : []
  }
};

var styleGraphFilterUnarmedWeightShots = {
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
      var shotShots = elem.name === 1 ? "shot" : "shots";
      tip.innerHTML = elem.value + " times on record,<br>the police have killed someone<br>by firing " + elem.name + " " + shotShots + ",<br>and the victim was " + elem.label + ".<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUnarmedWeightShotsTipSample(node);
    }
  }
};

function graphFilterUnarmedWeightShotsTipSample(elem){
  var shots = elem.name;
  var unarmed = elem.label === "unarmed" ? true : false;
  var collection = allKillings.filter(function(el){
    if (shots === "20+"){
      return el.shots_fired > 20 && el.victim_unarmed === unarmed;
    } else {
      return el.shots_fired === shots && el.victim_unarmed === unarmed;
    };
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
