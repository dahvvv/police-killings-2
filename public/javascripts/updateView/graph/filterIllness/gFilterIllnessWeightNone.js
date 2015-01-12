function updateGraphFilterIllnessWeightNone(){
	var labels = labelsGraphFilterIllnessWeightNone;
	labels = dataGraphFilterIllnessWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterIllnessWeightNone;
	createGraph(data, style);
	var program = "<p>This graph shows how many people have been killed by police,<br>sorted by whether or not they showed clear symptoms of mental illness.</p><p><div id='down-arrow'></div></p><p>Hover over the graph to see relevant information in sentence form.</p><img src='http://i.imgur.com/slqSqxi.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see a new source.</p><a style='cursor:pointer' href='http://www.nydailynews.com/new-york/relatives-rip-cops-long-island-mans-dies-taser-gun-incident-article-1.143085' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/yEofvgy.png' /></a><a style='cursor:pointer' href='http://www.sacbee.com/news/local/crime/article2606996.html' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/UX6PvBF.png' /></a><p>In many of these cases, mental illness refers <a style='cursor:pointer' href='http://www.pasadenastarnews.com/general-news/20140218/county-approves-18-million-settlement-in-shooting-of-mentally-ill-rosemead-woman' target='_blank'>to</a> <a style='cursor:pointer' href='http://newjersey.news12.com/news/police-shoot-kill-man-during-standoff-in-south-brunswick-1.6473615' target='_blank'>either</a> <a style='cursor:pointer' href='http://thefreethoughtproject.com/cop-shoots-dead-unarmed-tased-subdued-teen-we-time-this-bang/' target='_blank'>schizophrenia</a>, or that the victim <a style='cursor:pointer' href='http://www.cbs46.com/story/19917831/teen-shot-by-police-sniper-parents-talk-only-to-cbs-atlanta-news' target='_blank'>was</a> <a style='cursor:pointer' href='https://drive.google.com/file/d/0B-l9Ys3cd80fT2hub1pENmhwSEk/edit?usp=sharing' target='_blank'>threatening</a> <a style='cursor:pointer' href='http://www.newspressnow.com/news/local_news/article_f508d924-5208-5a01-a84a-57631e99e732.html' target='_blank'>suicide</a>.</p><p>Victims of police shootings were exhibiting clear signs of mental illness<br>in over 25% of recorded cases.</p>";
	$('#program').html(program);
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
      tip.innerHTML = "In the United States,<br>" + elem.value + " people<br>have been killed by police<br>while exhibiting " + elem.label + " of mental illness.";
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
