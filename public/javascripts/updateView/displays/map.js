function rScale(val,valMin,valMax,rMin,rMax){
  var multiplier = (val - valMin) / (valMax - valMin);
  return Math.ceil(rMin + ((rMax - rMin) * multiplier));
};

function colorScale(val,valMin,valMax,minRGBArr,maxRGBArr){
  var newRGB = $.map(minRGBArr, function(minColor,i){
    var multiplier = (val - valMin) / (valMax - valMin);
    return Math.floor(minColor + ((maxRGBArr[i] - minColor) * multiplier));
  });
  return "rgb(" + newRGB[0] + "," + newRGB[1] + "," + newRGB[2] + ")";
};
