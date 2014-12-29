var gradientMain = {
  0: 'purple',
  0.15: 'blue',
  0.25: 'lightblue',
  0.35: 'green',
  0.85: 'yellow',
  0.995: 'orange',
  1: 'red'
};

var gradientStateView = {
  0: 'purple',
  0.1: 'blue',
  0.2: 'green',
  0.4: 'yellow',
  1: 'red'
};

var gradientAgeRange = {
  0: 'black',
  0.1: 'purple',
  0.25: 'blue',
  0.4: 'green',
  0.6: 'yellow',
  1: 'red'
};

function selectGradient(stateView){
  if (stateView === null || stateView === "USA"){
    return gradientMain;
  } else {
    return gradientStateView;
  }
};