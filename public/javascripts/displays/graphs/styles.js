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
    injectInto: 'infovis',
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
    injectInto: 'infovis',
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
    injectInto: 'infovis',
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
    injectInto: 'infovis',
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
    injectInto: 'infovis',
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