function styleGraphFilterAgeWeightNone(){
  var style = {
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
        tip.innerHTML = "<p>Age: " + elem.label + "</p><p>Total: " + elem.value;
      }
    },
  };
  return style;
};

function styleGraphFilterAgeWeightUspop(){
  var style = {
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
        tip.innerHTML = "<p>Age: " + elem.label + "</p><p>Total: " + elem.value;
      }
    },
    Events: {
      enable: true,
      type: 'Native',
      onClick: function(node, eventInfo, e){
        graphFilterAgeWeightUspopTipSample(node);
      }
    }
  };
  return style;
};

function graphFilterAgeWeightUspopTipSample(elem){
  var age = elem.label;
  var collection = allKillings.filter(function(el){
    return el.victim_age === age;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};

function styleGraphFilterAgeWeightArrests(){
  var style = {
    injectInto: 'display-container',
    animate: true,
    orientation: 'vertical',
    barsOffset: 5,
    Margin: {
      top:2,
      left: 5,
      right: 5,
      bottom:2
    },
    labelOffest: 0,
    type: 'stacked:gradient',
    showAggregates: false,
    showLabels: function(i){
      if (i%2===0) {
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
        tip.innerHTML = "For every hundred thousand arrests<br>made on a " + elem.label + "-year-old person<br>in the United States,<br>" + elem.value + " of them have resulted in death.";
      }
    },
    Events: {
      enable: true,
      type: 'Native',
      onClick: function(node, eventInfo, e){
        graphFilterAgeWeightArrestsTipSample(node);
      }
    }
  };
  return style;
};

function graphFilterAgeWeightArrestsTipSample(elem){
  var age = elem.label;
  var collection = allKillings.filter(function(el){
    return el.victim_age === age;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};

function styleGraphFilterAgeWeightRace(){
  var style = {
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
        tip.innerHTML = elem.name + " " + elem.label + "-year-olds<br>who were killed by the police:<br>" + elem.value;
      }
    },
    Events: {
      enable: true,
      type: 'Native',
      onClick: function(node, eventInfo, e){
        graphFilterAgeWeightRaceTipSample(node);
      }
    }
  };
  return style;
};

function graphFilterAgeWeightRaceTipSample(elem){
  var race = elem.name;
  var age = elem.label;
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};

function styleGraphFilterAgeWeightIllness(){
  var style = {
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
        tip.innerHTML = elem.label + "-year-olds<br>with " + elem.name + " of mental illness<br>who were killed by the police:<br>" + elem.value;
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
  return style;
};

function graphFilterAgeWeightIllnessTipSample(elem){
  if (elem.name === "symptoms"){
    var illness = "yes";
  } else if (elem.name === "no symptoms"){
    var illness = "no";
  };
  var age = elem.label;
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.symptoms_of_mental_illness === illness;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
