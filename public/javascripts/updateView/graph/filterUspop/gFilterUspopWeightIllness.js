function updateGraphFilterUspopWeightIllness(){
	var labels = labelsGraphFilterUspopWeightIllness();
	labels = dataGraphFilterUspopWeightIllness(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightIllness;
	createGraph(data, style);
	var program = "<p>This graph shows people who were killed by police while exhibiting clear signs of mental illness, by city.</p><p><div id='down-arrow'></div></p><p>In many of these cases, mental illness refers <a style='cursor:pointer' href='http://www.pasadenastarnews.com/general-news/20140218/county-approves-18-million-settlement-in-shooting-of-mentally-ill-rosemead-woman' target='_blank'>to</a> <a style='cursor:pointer' href='http://newjersey.news12.com/news/police-shoot-kill-man-during-standoff-in-south-brunswick-1.6473615' target='_blank'>either</a> <a style='cursor:pointer' href='http://thefreethoughtproject.com/cop-shoots-dead-unarmed-tased-subdued-teen-we-time-this-bang/' target='_blank'>schizophrenia</a>, or that the victim <a style='cursor:pointer' href='http://www.cbs46.com/story/19917831/teen-shot-by-police-sniper-parents-talk-only-to-cbs-atlanta-news' target='_blank'>was</a> <a style='cursor:pointer' href='https://drive.google.com/file/d/0B-l9Ys3cd80fT2hub1pENmhwSEk/edit?usp=sharing' target='_blank'>threatening</a> <a style='cursor:pointer' href='http://www.newspressnow.com/news/local_news/article_f508d924-5208-5a01-a84a-57631e99e732.html' target='_blank'>suicide</a>.</p><p>The red areas represent people who were showing signs of mental illness when they were killed by the police.  Hover over the graph for more information.</p><img src='http://i.imgur.com/bX1lqfr.png' /><p>And then click to see a randomly selected source for someone in that demographic and city.</p><a style='cursor:pointer' href='http://www.spokesman.com/stories/2010/oct/27/man-killed-by-deputy-had-been-suicidal/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/KJ70QvH.png' /></a><a style='cursor:pointer' href='http://www.spokesman.com/stories/2011/jul/14/fatal-shots-ruled-justified/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/T0PjQQR.png' /></a><a style='cursor:pointer' href='http://www.scribd.com/doc/218703780/Danny-Jones-Decision-Letter' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/778mvfL.png' /></a><p>In Portland, 28 people have been killed by the police*, and half of them were showing signs of mental illness.</p><img src='http://i.imgur.com/8IheAVo.png' /><p>*There are more people beyond these particular 28 who have been killed by police in Portland, but these are the only people for whom there is information on whether or not they were mentally ill.</p>";
	$('#program').html(program);
};

function dataGraphFilterUspopWeightIllness(labels){
	var lowercaseCities = $.map(citiesByIllness, function(city){
		return lowercaseCity(city);
	});
	$.each(allKillings, function(i,obj){
		if (_.contains(lowercaseCities, obj.location_of_killing_city) === false || obj.symptoms_of_mental_illness === null){
			return true;
		} else {
			var city = obj.location_of_killing_city;
			var capCity = capitaliseCity(city);
		};
		var illness = obj.symptoms_of_mental_illness === "yes" ? "symptoms" : "no symptoms";
		labels["labelObjCrossGraph"][capCity][labels["labelArrUpGraph"].indexOf(illness)]++;
	});
	return labels;
};

function labelsGraphFilterUspopWeightIllness(){
	var labelsAcross = {};
	$.each(citiesByIllness, function(i,city){
		labelsAcross[city] = [0,0];
	});
	return {
		colorArr : [secondColor, baseColor],
	  labelArrUpGraph : ["symptoms", "no symptoms"],
	  labelObjCrossGraph : labelsAcross
	};
};

var styleGraphFilterUspopWeightIllness = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 10,
  Margin: {
    top:5,
    left: 15,
    right: 15,
    bottom:5
  },
  labelOffest:0,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: true,
  Label: {
    type: 'HTML',
    size: 14,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
    	// var age = elem.name;
     //  var city = lowercaseCity(elem.label);
    	// var capCity = elem.label === "N Orleans" ? "New Orleans" : elem.label;
    	// capCity = capCity === "DC" ? "Washington DC" : capCity;
     //  var totalCity = allKillings.filter(function(el){
     //    return el.location_of_killing_city === city;
     //  });
     //  var totalAgeCity = allKillings.filter(function(el){
     //    return el.victim_age === age && el.location_of_killing_city === city;
     //  });
     //  var percent = ((totalAgeCity.length/totalCity.length) * 100).toFixed(1);
      tip.innerHTML = "In " + elem.label + ",<br>the police have killed " + elem.value + " people<br>who were exhibiting " + elem.name + " of mental illness.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUspopWeightIllnessTipSample(node);
    }
  }
};

function graphFilterUspopWeightIllnessTipSample(elem){
  var illness = elem.name === "symptoms" ? "yes" : "no";
  var city = lowercaseCity(elem.label);
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === illness && el.location_of_killing_city === city;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
