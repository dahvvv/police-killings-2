function dataFilterRaceWeightNone(){
  var checkedBoxes = $("#race-filter-form").children("input:checked");
  var checkedRaces = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  checkedRaces = reorderRaces(checkedRaces);
  var arr = [];
  $.each(checkedRaces, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_race === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function reorderRaces(raceArr){
  var newOrder = ["white","black","hispanic and/or latin","asian","alaskan and/or pacific islander"];
  var reordered = [];
  $.each(newOrder, function(i,race){
    if ($.inArray(race,raceArr) >= 0){
      reordered.push(race);
    };
  });
  return reordered;
};

var raceColors = {
  "alaskan and/or pacific islander" : "crimson",
  "asian"                           : "darkorange",
  "black"                           : "yellow",
  "hispanic and/or latin"           : "limegreen",
  "white"                           : "royalblue",
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

var races = [
  "white",
  "black",
  "hispanic and/or latin",
  "asian",
  "alaskan and/or pacific islander"
];

var populationByRace = {
  "white":                            253005657,
  "black":                            45288730,
  "hispanic and/or latin":            54634554,
  "asian":                            19718930,
  "alaskan and/or pacific islander":  1447321
};

var arrestsByRace = {
  "white":                            6502919,
  "black":                            2640067,
  // "hispanic and/or latin":            54634554,
  "asian":                            135165,
  "alaskan and/or pacific islander":  112322
};
