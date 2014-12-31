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
