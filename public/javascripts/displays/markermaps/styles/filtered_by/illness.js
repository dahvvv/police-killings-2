function styleMarkerFilterIllnessWeightNone(feature){
  return {
    fillColor: illnessToFillColor(feature.properties.illness),
    color: 'black',
    radius: 7,
    fillOpacity: 1,
    opacity: 1,
  }
};

function illnessToFillColor(illness){
  switch (illness) {
    case "yes": return "paleturquoise";
    case "no": return "red";
  }
};
