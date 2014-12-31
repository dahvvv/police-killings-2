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
