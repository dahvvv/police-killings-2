function dataFilterRaceWeightNone(){
  var checkedBoxes = $('#race-selection').children('input:checked');
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

function abbreviateRace(race,graphBarDirection){
  if (graphBarDirection === "horizontal"){
    race = race === "hispanic and/or latin" ? "hispanic" : race;
    race = race === "alaskan and/or pacific islander" ? "ak / p.i." : race;
    return race;
  } else if (graphBarDirection === "vertical"){
    race = race === "hispanic and/or latin" ? "hispanic/latin" : race;
    race = race === "alaskan and/or pacific islander" ? "alaskan/p.i." : race;
    return race;
  }; 
};

function expandRace(race,graphBarDirection){
  if (graphBarDirection === "horizontal"){
    race = race === "hispanic" ? "hispanic and/or latin" : race;
    race = race === "ak / p.i." ? "alaskan and/or pacific islander" : race;
    return race;
  } else if (graphBarDirection === "vertical"){
    race = race === "hispanic/latin" ? "hispanic and/or latin" : race;
    race = race === "alaskan/p.i." ? "alaskan and/or pacific islander" : race;
    return race;
  };
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
