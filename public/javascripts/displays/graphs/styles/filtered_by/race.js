function styleGraphFilterRaceWeightNone(){
  var style = {
    injectInto: 'display-container',
    animate: true,
    orientation: 'vertical',
    barsOffset: 10,
    Margin: {
      top:5,
      left: 0,
      right: 15,
      bottom:5
    },
    labelOffest:5,
    type: 'stacked:gradient',
    showAggregates: true,
    showLabels: true,
    Label: {
      type: 'HTML',
      size: 16,
      family: 'Helvetica',
      color: '#c8cdcf',
      // weight: 'bold'
    },
    Tips: {
      enable: true,
      onShow: function(tip, elem) {
        tip.innerHTML = elem.value + " " + elem.label + " people<br>have been killed by police.";
      }
    },
  };
  return style;
};

function styleGraphFilterRaceWeightUspop(){
  var style = {
    injectInto: 'display-container',
    animate: true,
    orientation: 'vertical',
    barsOffset: 10,
    Margin: {
      top:5,
      left: 0,
      right: 15,
      bottom:5
    },
    labelOffest:5,
    type: 'stacked:gradient',
    showAggregates: true,
    showLabels: true,
    Label: {
      type: 'HTML',
      size: 16,
      family: 'Helvetica',
      color: '#c8cdcf',
      // weight: 'bold'
    },
    Tips: {
      enable: true,
      onShow: function(tip, elem) {
        var race = expandRace(elem.label,"vertical");
        tip.innerHTML = "For every ten million<br>" + race + " people<br>in the United States,<br>" + elem.value + " " + race + " people<br>have been killed by the police.";
      }
    },
    Events: {
      enable: true,
      type: 'Native',
      onClick: function(node, eventInfo, e){
        graphFilterRaceWeightUspopTipSample(node);
      }
    }
  };
  return style;
};

function graphFilterRaceWeightUspopTipSample(elem){
  var race = expandRace(elem.label,"vertical");
  var collection = allKillings.filter(function(el){
    return el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};

function styleGraphFilterRaceWeightArrests(){
  var style = {
    injectInto: 'display-container',
    animate: true,
    orientation: 'vertical',
    barsOffset: 10,
    Margin: {
      top:5,
      left: 0,
      right: 15,
      bottom:5
    },
    labelOffest:5,
    type: 'stacked:gradient',
    showAggregates: false,
    showLabels: true,
    Label: {
      type: 'HTML',
      size: 16,
      family: 'Helvetica',
      color: '#c8cdcf',
      // weight: 'bold'
    },
    Tips: {
      enable: true,
      onShow: function(tip, elem) {
        tip.innerHTML = elem.name;
      }
    },
  };
  return style;
};

function styleGraphFilterRaceWeightAge(){
  var style = {
    injectInto: 'display-container',
    animate: true,
    orientation: 'horizontal',
    barsOffset: 10,
    Margin: {
      top:15,
      left: 25,
      right: 25,
      bottom:15
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
        elem.label = expandRace(elem.label,"horizontal");
        var age = elem.name;
        var race = elem.label;
        var totalRace = allKillings.filter(function(el){
          return el.victim_race === race;
        });
        var totalAgeRace = allKillings.filter(function(el){
          return el.victim_age === age && el.victim_race === race;
        });
        var percent = ((totalAgeRace.length/totalRace.length) * 100).toFixed(1);
        tip.innerHTML = elem.label + " " + elem.name + "-year-olds<br>make up " + percent + " percent<br>of " + elem.label + " people who were killed by police";
      }
    },
    Events: {
      enable: true,
      type: 'Native',
      onClick: function(node, eventInfo, e){
        graphFilterRaceWeightAgeTipSample(node);
      }
    }
  };
  return style;
};

function graphFilterRaceWeightAgeTipSample(elem){
  var age = elem.name;
  var race = expandRace(elem.label,"horizontal");
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};

function styleGraphFilterRaceWeightIllness(){
  var style = {
    injectInto: 'display-container',
    animate: true,
    orientation: 'horizontal',
    barsOffset: 10,
    Margin: {
      top:15,
      left: 25,
      right: 25,
      bottom:15
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
        elem.label = expandRace(elem.label, "horizontal");
        tip.innerHTML = elem.value + " percent<br>of " + elem.label + " people killed by police<br>were exhibiting " + elem.name + " of mental illness.";
      }
    },
    Events: {
      enable: true,
      type: 'Native',
      onClick: function(node, eventInfo, e){
        graphFilterRaceWeightIllnessTipSample(node);
      }
    }
  };
  return style;
};

function graphFilterRaceWeightIllnessTipSample(elem){
  if (elem.name === "symptoms"){
    var symptoms = "yes";
  } else if (elem.name === "no symptoms"){
    var symptoms = "no";
  };
  var race = expandRace(elem.label,"horizontal");
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === symptoms && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
