var graphStyles = {
	"illness" : {
		"race" : {
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
		},
	},
};