function styleMarkerFilterPopWeightNone(feature){
	return {
		fillColor: 'red',
	  color: 'black',
	  radius: 7,
	  fillOpacity: 1,
	  opacity: 1
	}
};

function styleMarkerFilterRaceWeightNone(feature){
	return {
    fillColor: raceToFillColor(feature.properties.race),
    // color: '#646668',
    color: 'black',
    radius: 7,
    fillOpacity: 1,
    opacity: 1,
  }
};

function styleMarkerFilterRaceWeightUspop(feature){
  return {
    fillColor: raceToFillColor(feature.properties.race),
    color: 'black',
    radius: racePopweightToRadius(feature.properties.race),
    fillOpacity: 1,
    opacity: 1,
  }
};

function styleMarkerFilterAgeWeightNone(feature){
	var i = feature.properties.age;
  var lowerBound = 0;
  var upperBound = 107;
  var lowStandDev = 21;
  var highStandDev = 48;
  var regR = 3;
  var maxR = 16;
  var regRGB = {r: 0, g: 76, b: 153};
  var maxRGB = {r: 255, g: 51, b: 51};
  if (i < lowStandDev) {
    return {
      fillColor: colorScaleLower(i,lowerBound,lowStandDev,regRGB,maxRGB),
      radius: rScaleLower(i,lowerBound,lowStandDev,regR,maxR),
      color: 'black',
      opacity: 1,
      fillOpacity: 1
    };
  } else if (i >= lowStandDev && i <= highStandDev) {
    var r = regRGB.r;
    var g = regRGB.g;
    var b = regRGB.b;
    return {
      fillColor: "rgb(" + r + "," + g + "," + b + ")",
      radius: regR,
      color: 'black',
      opacity: 1,
      fillOpacity: 1
    }
  } else if (i > highStandDev) {
    return {
      fillColor: colorScaleUpper(i,upperBound,highStandDev,regRGB,maxRGB),
      radius: rScaleUpper(i,upperBound,highStandDev,regR,maxR),
      color: 'black',
      opacity: 1,
      fillOpacity: 1
    }
  }
};

function styleMarkerFilterGenderWeightNone(feature){
  return {
    fillColor: genderToFillColor(feature.properties.gender),
    color: 'black',
    radius: 7,
    fillOpacity: 1,
    opacity: 1,
  }
};

function styleMarkerFilterUnarmedWeightNone(feature){
  return {
    fillColor: unarmedToFillColor(feature.properties.unarmed),
    color: 'black',
    radius: 7,
    fillOpacity: 1,
    opacity: 1,
  }
};

function raceToFillColor(race){
  switch (race) {
    case "alaskan and/or pacific islander": return "crimson";
    case "asian": return "darkorange";
    case "black": return "yellow";
    case "hispanic and/or latin": return "limegreen";
    case "white": return "royalblue";
    case "other": return "darkorchid";
  }
};

function raceToFillOpacity(race){
  switch (race) {
    case "alaskan and/or pacific islander": return 1;
    case "asian": return 1;
    case "black": return 0.6;
    case "hispanic and/or latin": return 0.8;
    case "white": return 0.4;
    case "other": return 1;
  }
};

function genderToFillColor(gender){
  switch (gender) {
    case "male": return "lightblue";
    case "female": return "pink";
  }
};

function unarmedToFillColor(unarmed){
  switch (unarmed) {
    case false: return "red";
    case true: return "white";
  }
};

function rScaleLower(i,lowerBound,lowStandDev,regR,maxR){
  var r = Math.floor(((lowStandDev - i)/lowStandDev) * (maxR - regR) + regR);
  return r;
};

function rScaleUpper(i,upperBound,highStandDev,regR,maxR){
  var r = Math.floor(((i - highStandDev)/highStandDev) * (maxR - regR) + regR);
  return r;
};

function colorScaleLower(i,lowerBound,lowStandDev,regRGB,maxRGB){
  var r = Math.floor(((lowStandDev - i)/lowStandDev) * (maxRGB.r - regRGB.r) + regRGB.r);
  var g = Math.floor(((lowStandDev - i)/lowStandDev) * (maxRGB.g - regRGB.g) + regRGB.g);
  var b = Math.floor(((lowStandDev - i)/lowStandDev) * (maxRGB.b - regRGB.b) + regRGB.b);
  var color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
};

function colorScaleUpper(i,upperBound,highStandDev,regRGB,maxRGB){
  var r = Math.floor(((i - highStandDev)/highStandDev) * (maxRGB.r - regRGB.r) + regRGB.r);
  var g = Math.floor(((i - highStandDev)/highStandDev) * (maxRGB.g - regRGB.g) + regRGB.g);
  var b = Math.floor(((i - highStandDev)/highStandDev) * (maxRGB.b - regRGB.b) + regRGB.b);
  var color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
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
