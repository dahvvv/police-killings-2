// function infoGraphFilterIllnessWeightNone(){
//   var ill = allKillings.filter(function(el){
//     return el.symptoms_of_mental_illness === "yes";
//   });
//   var notIll = allKillings.filter(function(el){
//     return el.symptoms_of_mental_illness === "no";
//   });
//   var data = {
//     'color': [baseColor],
//     'label': ['symptoms of mental illness'],
//     'values': [
//       {
//         'label': 'no symptoms',
//         'values': [notIll.length]
//       },
//       {
//         'label': 'symptoms',
//         'values': [ill.length]
//       },
//     ]
//   };
//   return data;
// };

// function infoGraphFilterIllnessWeightRace(){
//   var notIllWhite = [];
//   var notIllBlack = [];
//   var notIllHispanic = [];
//   var notIllAsian = [];
//   var notIllAlaskan = [];
//   var notIllOther = [];
//   var illWhite = [];
//   var illBlack = [];
//   var illHispanic = [];
//   var illAsian = [];
//   var illAlaskan = [];
//   var illOther = [];
//   $.each(allKillings, function(i,obj){
//     if (obj.symptoms_of_mental_illness === "yes"){
//       if (obj.victim_race === "white"){
//         illWhite.push(obj);
//       } else if (obj.victim_race === "black"){
//         illBlack.push(obj);
//       } else if (obj.victim_race === "hispanic and/or latin"){
//         illHispanic.push(obj);
//       } else if (obj.victim_race === "asian"){
//         illAsian.push(obj);
//       } else if (obj.victim_race === "alaskan and/or pacific islander"){
//         illAlaskan.push(obj);
//       } else if (obj.victim_race === "other"){
//         illOther.push(obj);
//       }
//     } else if (obj.symptoms_of_mental_illness === "no"){
//       if (obj.victim_race === "white"){
//         notIllWhite.push(obj);
//       } else if (obj.victim_race === "black"){
//         notIllBlack.push(obj);
//       } else if (obj.victim_race === "hispanic and/or latin"){
//         notIllHispanic.push(obj);
//       } else if (obj.victim_race === "asian"){
//         notIllAsian.push(obj);
//       } else if (obj.victim_race === "alaskan and/or pacific islander"){
//         notIllAlaskan.push(obj);
//       } else if (obj.victim_race === "other"){
//         notIllOther.push(obj);
//       }
//     }
//   });
//   var data = {
//     'color': [
//       "#3366FF",
//       "#5200A3",
//       "#FF0000",
//       "#FF6600",
//       "#FFFF00",
//       "#33CC33"
//     ],
//     'label': [
//       "white",
//       "black",
//       "hispanic and/or latin",
//       "asian",
//       "alaskan and/or pacific islander",
//       "other"
//     ],
//     'values': [
//       {
//         'label': 'no symptoms',
//         'values': [
//           notIllWhite.length,
//           notIllBlack.length,
//           notIllHispanic.length,
//           notIllAsian.length,
//           notIllAlaskan.length,
//           notIllOther.length
//         ]
//       },
//       {
//         'label': 'symptoms',
//         'values': [
//           illWhite.length,
//           illBlack.length,
//           illHispanic.length,
//           illAsian.length,
//           illAlaskan.length,
//           illOther.length
//         ]
//       },
//     ]
//   };
//   return data;
// };

// function infoGraphFilterIllnessWeightAge(){
//   var notIllTo4 = [];
//   var notIllTo9 = [];
//   var notIllTo14 = [];
//   var notIllTo19 = [];
//   var notIllTo24 = [];
//   var notIllTo29 = [];
//   var notIllTo34 = [];
//   var notIllTo39 = [];
//   var notIllTo44 = [];
//   var notIllTo49 = [];
//   var notIllTo54 = [];
//   var notIllTo59 = [];
//   var notIllTo64 = [];
//   var notIllTo69 = [];
//   var notIllTo74 = [];
//   var notIllTo79 = [];
//   var notIllTo84 = [];
//   var notIllTo89 = [];
//   var notIllTo94 = [];
//   var notIllTo99 = [];
//   var notIllTo104 = [];
//   var notIllTo109 = [];
//   var illTo4 = [];
//   var illTo9 = [];
//   var illTo14 = [];
//   var illTo19 = [];
//   var illTo24 = [];
//   var illTo29 = [];
//   var illTo34 = [];
//   var illTo39 = [];
//   var illTo44 = [];
//   var illTo49 = [];
//   var illTo54 = [];
//   var illTo59 = [];
//   var illTo64 = [];
//   var illTo69 = [];
//   var illTo74 = [];
//   var illTo79 = [];
//   var illTo84 = [];
//   var illTo89 = [];
//   var illTo94 = [];
//   var illTo99 = [];
//   var illTo104 = [];
//   var illTo109 = [];
//   $.each(allKillings, function(i,obj){
//     if (obj.symptoms_of_mental_illness === "yes"){
//       if (obj.victim_age < 5){
//         illTo4.push(obj);
//       } else if (obj.victim_age < 10){
//         illTo9.push(obj);
//       } else if (obj.victim_age < 15){
//         illTo14.push(obj);
//       } else if (obj.victim_age < 20){
//         illTo19.push(obj);
//       } else if (obj.victim_age < 25){
//         illTo24.push(obj);
//       } else if (obj.victim_age < 30){
//         illTo29.push(obj);
//       } else if (obj.victim_age < 35){
//         illTo34.push(obj);
//       } else if (obj.victim_age < 40){
//         illTo39.push(obj);
//       } else if (obj.victim_age < 45){
//         illTo44.push(obj);
//       } else if (obj.victim_age < 50){
//         illTo49.push(obj);
//       } else if (obj.victim_age < 55){
//         illTo54.push(obj);
//       } else if (obj.victim_age < 60){
//         illTo59.push(obj);
//       } else if (obj.victim_age < 65){
//         illTo64.push(obj);
//       } else if (obj.victim_age < 70){
//         illTo69.push(obj);
//       } else if (obj.victim_age < 75){
//         illTo74.push(obj);
//       } else if (obj.victim_age < 80){
//         illTo79.push(obj);
//       } else if (obj.victim_age < 85){
//         illTo84.push(obj);
//       } else if (obj.victim_age < 90){
//         illTo89.push(obj);
//       } else if (obj.victim_age < 95){
//         illTo94.push(obj);
//       } else if (obj.victim_age < 100){
//         illTo99.push(obj);
//       } else if (obj.victim_age < 105){
//         illTo104.push(obj);
//       } else if (obj.victim_age < 110){
//         illTo109.push(obj);
//       }
//     } else if (obj.symptoms_of_mental_illness === "no"){
//       if (obj.victim_age < 5){
//         notIllTo4.push(obj);
//       } else if (obj.victim_age < 10){
//         notIllTo9.push(obj);
//       } else if (obj.victim_age < 15){
//         notIllTo14.push(obj);
//       } else if (obj.victim_age < 20){
//         notIllTo19.push(obj);
//       } else if (obj.victim_age < 25){
//         notIllTo24.push(obj);
//       } else if (obj.victim_age < 30){
//         notIllTo29.push(obj);
//       } else if (obj.victim_age < 35){
//         notIllTo34.push(obj);
//       } else if (obj.victim_age < 40){
//         notIllTo39.push(obj);
//       } else if (obj.victim_age < 45){
//         notIllTo44.push(obj);
//       } else if (obj.victim_age < 50){
//         notIllTo49.push(obj);
//       } else if (obj.victim_age < 55){
//         notIllTo54.push(obj);
//       } else if (obj.victim_age < 60){
//         notIllTo59.push(obj);
//       } else if (obj.victim_age < 65){
//         notIllTo64.push(obj);
//       } else if (obj.victim_age < 70){
//         notIllTo69.push(obj);
//       } else if (obj.victim_age < 75){
//         notIllTo74.push(obj);
//       } else if (obj.victim_age < 80){
//         notIllTo79.push(obj);
//       } else if (obj.victim_age < 85){
//         notIllTo84.push(obj);
//       } else if (obj.victim_age < 90){
//         notIllTo89.push(obj);
//       } else if (obj.victim_age < 95){
//         notIllTo94.push(obj);
//       } else if (obj.victim_age < 100){
//         notIllTo99.push(obj);
//       } else if (obj.victim_age < 105){
//         notIllTo104.push(obj);
//       } else if (obj.victim_age < 110){
//         notIllTo109.push(obj);
//       }
//     }
//   })
//   var ill = allKillings.filter(function(el){
//     return el.symptoms_of_mental_illness === "yes";
//   });
//   var notIll = allKillings.filter(function(el){
//     return el.symptoms_of_mental_illness === "no";
//   });
//   var data = {
//     'color': hexScaler("#FF3300","#0000FF",22,13),
//     'label': [
//       'ages 0 through 4',
//       'ages 5 through 9',
//       'ages 10 through 14',
//       'ages 15 through 19',
//       'ages 20 through 24',
//       'ages 25 through 29',
//       'ages 30 through 34',
//       'ages 35 through 39',
//       'ages 40 through 44',
//       'ages 45 through 49',
//       'ages 50 through 54',
//       'ages 55 through 59',
//       'ages 60 through 64',
//       'ages 65 through 69',
//       'ages 70 through 74',
//       'ages 75 through 79',
//       'ages 80 through 84',
//       'ages 85 through 89',
//       'ages 90 through 94',
//       'ages 95 through 99',
//       'ages 100 through 104',
//       'ages 105 through 109',
//     ],
//     'values': [
//       {
//         'label': 'no symptoms',
//         'values': [
//           notIllTo4.length,
//           notIllTo9.length,
//           notIllTo14.length,
//           notIllTo19.length,
//           notIllTo24.length,
//           notIllTo29.length,
//           notIllTo34.length,
//           notIllTo39.length,
//           notIllTo44.length,
//           notIllTo49.length,
//           notIllTo54.length,
//           notIllTo59.length,
//           notIllTo64.length,
//           notIllTo69.length,
//           notIllTo74.length,
//           notIllTo79.length,
//           notIllTo84.length,
//           notIllTo89.length,
//           notIllTo94.length,
//           notIllTo99.length,
//           notIllTo104.length,
//           notIllTo109.length,
//         ]
//       },
//       {
//         'label': 'symptoms',
//         'values': [
//           illTo4.length,
//           illTo9.length,
//           illTo14.length,
//           illTo19.length,
//           illTo24.length,
//           illTo29.length,
//           illTo34.length,
//           illTo39.length,
//           illTo44.length,
//           illTo49.length,
//           illTo54.length,
//           illTo59.length,
//           illTo64.length,
//           illTo69.length,
//           illTo74.length,
//           illTo79.length,
//           illTo84.length,
//           illTo89.length,
//           illTo94.length,
//           illTo99.length,
//           illTo104.length,
//           illTo109.length,
//         ]
//       },
//     ]
//   };
//   return data;
// };
