function dataFilterIllness(choosers){
	if (choosers.weight === "none"){
		return dataFilterIllnessWeightNone();
	}
};

function dataFilterIllnessWeightNone(){
  var checkedBoxes = $('#illness-selection').children('input:checked');
  var illnessSelected = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(illnessSelected, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (val === "ill"){
        return el.symptoms_of_mental_illness === "yes";
      } else if (val === "not-ill"){
        return el.symptoms_of_mental_illness === "no";
      }
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
