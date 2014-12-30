function emptyGraph(choosers){
  if ($('#map-one').css('display') != "none") {
    $('#map-one').slideToggle(750, function(e){
      makeGraph(choosers);
    });
  } else {
    $('#display-container-canvaswidget').remove();
    makeGraph(choosers);
  }
};

function makeGraph(choosers){
	var graphData = selectGraphData(choosers);
  var graphStyle = selectGraphStyle(choosers);
  var graph = new $jit.BarChart(graphStyle);
  graph.loadJSON(graphData);
};

function selectGraphData(choosers){
	if (choosers['filter'] === "usPop"){
		if (choosers['weight'] === "none"){
			return dataGraphFilterPopWeightNone();
		} else if (choosers['weight'] === "usPop"){
			return dataGraphFilterPopWeightUspop();
		}
	} else if (choosers['filter'] === "race"){
		if (choosers['weight'] === "none"){
			return dataGraphFilterRaceWeightNone();
		} else if (choosers['weight'] === "usPop"){
			return dataGraphFilterRaceWeightUspop();
		} else if (choosers['weight'] === "arrests"){
			return dataGraphFilterRaceWeightArrests();
		}
	} else if (choosers['filter'] === "age"){
		if (choosers['weight'] === "none"){
			return dataGraphFilterAgeWeightNone();
		}
	}
};

function selectGraphStyle(choosers){
	if (choosers['filter'] === "usPop"){
		if (choosers['weight'] === "none"){
			return styleGraphFilterPopWeightNone();
		} else if (choosers['weight'] === "usPop"){
			return styleGraphFilterPopWeightUspop();
		}
	} else if (choosers['filter'] === "race"){
		if (choosers['weight'] === "none"){
			return styleGraphFilterRaceWeightNone();
		} else if (choosers['weight'] === "usPop"){
			return styleGraphFilterRaceWeightUspop();
		} else if (choosers['weight'] === "arrests"){
			return styleGraphFilterRaceWeightArrests();
		}
	} else if (choosers['filter'] === "age"){
		if (choosers['weight'] === "none"){
			return styleGraphFilterAgeWeightNone();
		}
	}
};

var labelType, useGradients, nativeTextSupport, animate;

$(function(){

  var ua = navigator.userAgent,
  iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
  typeOfCanvas = typeof HTMLCanvasElement,
  nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
  textSupport = nativeCanvasSupport 
    && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
  

  var Log = {
    elem: false,
    write: function(text){
      if (!this.elem) 
        this.elem = document.getElementById('log');
      this.elem.innerHTML = text;
      this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
  };
  
});
