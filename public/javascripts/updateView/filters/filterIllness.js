function dataFilterIllnessWeightNone(){
  var checkedBoxes = $('#illness-selection').children('input:checked');
  var checkedIllness = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(checkedIllness, function(i,val){
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
