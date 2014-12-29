function updateDisplay(data, choosers){
	if (choosers.displaySelector === "heatmap") {
		makeHeatmap(data, choosers);
	} else if (choosers.displaySelector === "marker") {
		makeMarkermap(data, choosers);
	} else if (choosers.displaySelector === "graph") {
		makeGraph(data, choosers);
	};
};

function setMaxZoom(numDatapoints, stateView){
  if (stateView === null || stateView === "USA") {
    switch (true) {
      case (numDatapoints <= 10): return 1;
      case (numDatapoints > 10 && numDatapoints <= 35): return 4;
      case (numDatapoints > 35 && numDatapoints <= 130): return 5;
      case (numDatapoints > 130 && numDatapoints <= 350) : return 6;
      case (numDatapoints > 350 && numDatapoints <= 750): return 7;
      case (numDatapoints > 750 && numDatapoints <= 1750): return 8;
      default: return 10
    }
  } else {
    if (numDatapoints > 25) {
      return 10;
    } else if (numDatapoints <= 25 && numDatapoints > 30) {
      return 9;
    } else if (numDatapoints <= 30 && numDatapoints > 35) {
      return 8;
    } else if (numDatapoints <= 35 && numDatapoints > 40) {
      return 7;
    } else if (numDatapoints <= 40 && numDatapoints > 50) {
      return 5;
    } else {
      return 3;
    }
  }
  
};

