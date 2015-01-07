function shotsRange(){
  var min = $('#shots-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-max').val();
  max = max === "" ? 999 : max;
  return {min: min, max: max};
};

function dataFilterShotsWeightNone(){
  arr = allKillings.filter(function(el){
    return el.shots_fired >= shotsRange().min && el.shots_fired <= shotsRange().max;
  });
  return arr;
};

function dataFilterShotsWeightRace(){
	var checkedBoxes = $("#race-weight-form").children("input:checked");
  var checkedRaces = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  checkedRaces = reorderRaces(checkedRaces);
  var arr = [];
  $.each(checkedRaces, function(i,val){
    var filtered = allKillings.filter(function(el){
    	if (el.shots_fired >= shotsRange().min && el.shots_fired <= shotsRange().max){
    		return el.victim_race === val;
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
