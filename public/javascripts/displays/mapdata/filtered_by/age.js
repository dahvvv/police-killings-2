function dataFilterAge(choosers){
	if (choosers.weight === "none"){
		return dataFilterAgeWeightNone(choosers);
	}
};

// function dataFilterAgeWeightNone(choosers){
//   if (choosers.displaySelector === "heatmap"){
//     return filterByAge();
//   } else {
//     return filterAgeNotNil();
//   }
// };

// function filterByAge(){
//   var min = $('#age-min').val();
//   var max = $('#age-max').val();
//   arr = allKillings.filter(function(el){
//     return el.victim_age >= min && el.victim_age <= max;
//   });
//   return arr;
// };

// function filterAgeNotNil(){
//   arr = allKillings.filter(function(el){
//     return el.victim_age != null;
//   });
//   return arr;
// };
