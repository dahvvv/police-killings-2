// function dataFilterRace(choosers){
// 	if (choosers.weight === "none" || choosers.weight === "usPop"){
// 		return dataFilterRaceWeightNone();
// 	}
// };

// function dataFilterRaceWeightNone(){
//   var checkedBoxes = $('#race-selection').children('input:checked');
//   var races = $(checkedBoxes).map(function(){
//     return this.name;
//   })
//   .get();
//   races = reorderRaces(races);
//   var arr = [];
//   $.each(races, function(i,val){
//     var filtered = allKillings.filter(function(el){
//       return el.victim_race === val;
//     });
//     arr = arr.concat(filtered);
//   });
//   return arr;
// };

// function reorderRaces(raceArr){
//   var newOrder = ["white","black","hispanic and/or latin","asian","alaskan and/or pacific islander"];
//   var reordered = [];
//   $.each(newOrder, function(i,race){
//     if ($.inArray(race,raceArr) >= 0){
//       reordered.push(race);
//     };
//   });
//   return reordered;
// };
