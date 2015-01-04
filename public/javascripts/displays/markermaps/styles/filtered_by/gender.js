// function styleMarkerFilterGenderWeightNone(feature){
//   return {
//     fillColor: genderToFillColor(feature.properties.gender),
//     color: 'black',
//     radius: 7,
//     fillOpacity: 1,
//     opacity: 1,
//   }
// };

function styleMarkerFilterGenderWeightUnarmed(feature){
  var gender = feature.properties.gender;
  var unarmed = feature.properties.unarmed;
  return {
    fillColor: genderWeightUnarmedToFillColor(gender,unarmed),
    color: 'black',
    radius: 7,
    fillOpacity: 1,
    opacity: 1,
  }
};

function styleMarkerFilterGenderWeightIllness(feature){
  var gender = feature.properties.gender;
  var illness = feature.properties.illness;
  return {
    fillColor: genderWeightIllnessToFillColor(gender,illness),
    color: 'black',
    radius: 7,
    fillOpacity: 1,
    opacity: 1,
  }
};

// function genderToFillColor(gender){
//   switch (gender) {
//     case "male": return "lightblue";
//     case "female": return "pink";
//   }
// };

function genderWeightUnarmedToFillColor(gender,unarmed){
  if (gender === "male"){
    if (unarmed === true){
      return "lightblue";
    } else if (unarmed === false){
      return "darkblue";
    }
  } else if (gender === "female"){
    if (unarmed === true){
      return "pink";
    } else if (unarmed === false){
      return "red";
    }
  }
};

function genderWeightIllnessToFillColor(gender,illness){
  if (gender === "male"){
    if (illness === "yes"){
      return "lightblue";
    } else if (illness === "no"){
      return "darkblue";
    }
  } else if (gender === "female"){
    if (illness === "yes"){
      return "pink";
    } else if (illness === "no"){
      return "red";
    }
  }
};
