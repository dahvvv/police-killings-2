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