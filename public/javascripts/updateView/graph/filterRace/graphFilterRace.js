function updateGraphFilterRace(){
  readyWeightsToBeShown();
  $("#usPop-weight, #age-weight, #illness-weight").show();
  var weight = detectWeight();
  selectGraphFilterRaceWeight[weight]();
};

var selectGraphFilterRaceWeight = {
  "none" : function(){
    updateGraphFilterRaceWeightNone();
  },
  "usPop-weight" : function(){
    updateGraphFilterRaceWeightUspop();
  },
  "arrests-weight" : function(){
    updateGraphFilterRaceWeightArrests();
  },
  "age-weight" : function(){
    updateGraphFilterRaceWeightAge();
  },
  "illness-weight" : function(){
    updateGraphFilterRaceWeightIllness();
  },
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
