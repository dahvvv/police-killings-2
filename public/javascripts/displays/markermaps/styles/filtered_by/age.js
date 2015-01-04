// function styleMarkerFilterAgeWeightNone(feature){
// 	var i = feature.properties.age;
//   var lowerBound = 0;
//   var upperBound = 107;
//   var lowStandDev = 21;
//   var highStandDev = 48;
//   var regR = 3;
//   var maxR = 16;
//   var regRGB = {r: 0, g: 76, b: 153};
//   var maxRGB = {r: 255, g: 51, b: 51};
//   if (i < lowStandDev) {
//     return {
//       fillColor: colorScaleLower(i,lowerBound,lowStandDev,regRGB,maxRGB),
//       radius: rScaleLower(i,lowerBound,lowStandDev,regR,maxR),
//       color: 'black',
//       opacity: 1,
//       fillOpacity: 1
//     };
//   } else if (i >= lowStandDev && i <= highStandDev) {
//     var r = regRGB.r;
//     var g = regRGB.g;
//     var b = regRGB.b;
//     return {
//       fillColor: "rgb(" + r + "," + g + "," + b + ")",
//       radius: regR,
//       color: 'black',
//       opacity: 1,
//       fillOpacity: 1
//     }
//   } else if (i > highStandDev) {
//     return {
//       fillColor: colorScaleUpper(i,upperBound,highStandDev,regRGB,maxRGB),
//       radius: rScaleUpper(i,upperBound,highStandDev,regR,maxR),
//       color: 'black',
//       opacity: 1,
//       fillOpacity: 1
//     }
//   }
// };