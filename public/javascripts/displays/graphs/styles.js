function styleGraphFilterPopWeightNone(){
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
        tip.innerHTML = elem.label + ":  " + elem.value + " deaths by police.";
      }
    },
  };
  return style;
};

function styleGraphFilterPopWeightUspop(){
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
        tip.innerHTML = elem.label + ": " + elem.value + " " + elem.name;
      }
    },
  };
  return style;
};

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
        tip.innerHTML = elem.label + ": " + elem.value + "%";
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

function styleGraphFilterGenderWeightNone(){
  var style = {
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
        tip.innerHTML =  elem.value + " victims of police shootings are " + elem.label;
      }
    },
  };
  return style;
};

function styleGraphFilterUnarmedWeightNone(){
  var style = {
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
        tip.innerHTML =  elem.value + " recorded victims of police shootings were " + elem.label;
      }
    },
  };
  return style;
};

function styleGraphFilterIllnessWeightNone(){
  var style = {
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
        tip.innerHTML =  elem.value + " recorded victims of police shootings exhibited " + elem.label + " of mental illness";
      }
    },
  };
  return style;
};

function styleGraphFilterIllnessWeightAge(){
  var style = {
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
        tip.innerHTML = "from " + elem.name + ",<br>" + elem.value + " people were killed by police while exhibiting " + elem.label + " of mental illness.";
      }
    },
  };
  return style;
};

function styleGraphFilterShotsWeightNone(){
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
    showLabels: true,
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
        tip.innerHTML = "<p>Number of shots fired by police: " + elem.label + "</p><p>Total victims: " + elem.value;
      }
    },
  };
  return style;
};

function styleGraphFilterShotsWeightRace(){
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
    showLabels: true,
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
        tip.innerHTML = "<p>There are " + elem.value + " recorded cases in which the police shot " + elem.label + " times, and the victim victim was " + elem.name + ".";
      }
    },
  };
  return style;
};

function styleGraphFilterShotsWeightUnarmed(){
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
    showLabels: true,
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
        tip.innerHTML = "<p>There are " + elem.value + " recorded cases in which the police shot " + elem.label + " times, and the victim victim was " + elem.name + ".";
      }
    },
  };
  return style;
};
