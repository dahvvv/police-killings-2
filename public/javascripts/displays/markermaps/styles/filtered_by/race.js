// var raceColors = {
//   "alaskan and/or pacific islander" : "crimson",
//   "asian"                           : "darkorange",
//   "black"                           : "yellow",
//   "hispanic and/or latin"           : "limegreen",
//   "white"                           : "royalblue",
// };

// function styleMarkerFilterRaceWeightNone(feature){
// 	return {
//     fillColor: raceColors[feature.properties.race],
//     color: 'black',
//     radius: 7,
//     fillOpacity: 1,
//     opacity: 1,
//   }
// };

function styleMarkerFilterRaceWeightUspop(feature){
  return {
    fillColor: raceColors[feature.properties.race],
    color: 'black',
    radius: racePopweightToRadius(feature.properties.race),
    fillOpacity: 1,
    opacity: 1,
  }
};

function racePopweightToRadius(race){
  var regR = 7;
  var scaler = 0.55;  // scaler of 0 means no scaling, scale of 1 means everything is scaled down to its regR value
  switch (race) {
    case "alaskan and/or pacific islander": return Math.floor(regR * (13.9 - ((13.9 - 1)*scaler)));
    case "asian": return Math.floor(regR * (3.1 - ((3.1 - 1)*scaler)));
    case "black": return Math.floor(regR * (1.2 - ((1.2 - 1)*scaler)));
    case "hispanic and/or latin": return Math.floor(regR * (1));
    case "white": return Math.floor(regR * (0.2 + ((1-0.2)*scaler)));
    case "other": return Math.floor(regR * (6.9 - ((6.9-1)*scaler)));
  }
};
