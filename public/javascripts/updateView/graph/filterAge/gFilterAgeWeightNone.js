function updateGraphFilterAgeWeightNone(){
	var labels = labelsGraphFilterAgeWeightNone;
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0];
	};
	labels = dataGraphFilterAgeWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightNone;
	createGraph(data, style);
	var program = "<p>This graph shows how many people were killed by police, by age.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/OGgmMeS.png' /><p>Click on a bar to see the source for a randomly selected person of that age.  Click again to see the source for a different person of that age.</p><a style='cursor:pointer' href='http://voices.suntimes.com/news/breaking-news/male-shot-by-police-on-far-south-side/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/E0XHyXR.png' /></a><a style='cursor:pointer' href='http://www.wset.com/story/25484112/jefferson-county-sheriffs-office-release-identity-of-birmingham-man-shot-and-killed-by-deputy' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/fgdm1B4.png' /></a><a style='cursor:pointer' href='http://www.wset.com/story/25484112/jefferson-county-sheriffs-office-release-identity-of-birmingham-man-shot-and-killed-by-deputy' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/KU9wsXB.png' /></a><p>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p><img src='http://i.imgur.com/4cfAech.png' /><p>To see how this graph is divided in terms of race or mental illness, click the buttons on right.</p>";
	$('#program').html(program);
};

function dataGraphFilterAgeWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_age === null){
			return true;
		} else {
			var age = obj.victim_age;
		};
		labels["labelObjCrossGraph"][age][0]++;
	});
	return labels;
};

var labelsGraphFilterAgeWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {}
};

var styleGraphFilterAgeWeightNone = {
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
      var yearYears = elem.label === "1" ? "year" : "years";
      tip.innerHTML = "The police have killed " + elem.value + " people<br>who were " + elem.label + " " + yearYears + " old."
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterAgeWeightNoneTipSample(node);
    }
  }
};

function graphFilterAgeWeightNoneTipSample(elem){
  var age = parseInt(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
