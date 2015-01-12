function dataFilterUspopWeightNone(){
	var stateView = $("#state-filter").val();
  var arr = allKillings.filter(function(el){
    if (stateView === null || stateView === "USA"){
      return el;
    } else {
      return el.location_of_killing_state === stateView;
    };
  });
  return arr;
};
