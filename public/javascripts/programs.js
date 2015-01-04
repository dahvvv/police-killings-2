// function replaceProgram(data, choosers){
//   var program = programs[choosers.displaySelector][choosers.filter][choosers.weight];
//   $('#program').html(program);
// };

// var programs = {
//   heatmap: {
//     usPop: {
//       none: "<p class='program-text' style='top:-2em'>People killed by police officers in the united states.</p>"
//     },
//     age: {
//       none: "<p class='program-text' style='top:-0.8em'>This heatmap is scaled to show similar total heat for any age range,<br>in order to emphasize changes in locations.</p>"
//     },
//     race: {
//       none: "<p class='program-text' style='top:-0.8em'>This heatmap is scaled to present a constant population size,<br>in order to emphasize differences in location.</p>",
//       usPop: "<p class='program-text' style='top:-0.8em'>This heatmap is scaled to present a constant population size,<br>in order to emphasize differences in location.</p>"
//     },
//     gender: {
//       none: "<p class='program-text'>Gender Heatmap</p>"
//     },
//     unarmed: {
//       none: "<p class='program-text'>Unarmed Heatmap</p>"
//     },
//     illness: {
//       none: "<p class='program-text'>Illness Heatmap</p>"
//     },
//     shots: {
//       none: "<p class='program-text'>Shots Heatmap</p>"
//     }
//   },
//   marker: {
//     usPop: {
//       none: "<p class='program-text'>Click on a dot or zoom in for more information.</p>"
//     },
//     age: {
//       none: "<p class='program-text' style='top:-0.8em'>A point's size and brightness represent its distance from the standard deviation.<br>An unusual amount of very young or very old people have been killed in Texas, Oklahoma, and Arkansas.</p>"
//     },
//     race: {
//       none: "<p class='program-text' style='top:-0.8em'>The racial distribution of people killed by police<br>in the United States.</p>",
//       usPop: "<p class='program-text' style='top:-0.8em'>A map of police shootings by race,<br>scaled by US population.</p>",
//       arrests: "<p class='program-text' style='top:-0.8em'>A map of police shooting by race,<br>scaled by rate of annual arrests.</p>"
//     },
//     gender: {
//       none: "<p class='program-text'>Gender markermap</p>",
//       unarmed: "<p class='program-text'>Gender/unarmed markermap</p>",
//       illness: "<p class='program-text'>Gender/illness markermap</p>"
//     },
//     unarmed: {
//       none: "<p class='program-text' style='top:-0.8em'>People killed by the police while they were unarmed<br>(select boxes on the left to see armed, or both).</p>"
//     },
//     illness: {
//       none: "<p class='program-text' style='top:-0.8em'>People killed by the police while exhibiting clear signs of mental illness.<br>(select boxes on the left to see no signs, or both).</p>"
//     },
//     shots: {
//       // none: "<p class='program-text'>People who were shot at by the police twenty times or more.</p>"
//       none: function(){
//         var min = shotsRange().min;
//         var max = shotsRange().max;
//         var total = dataFilterShotsWeightNone().length;
//         if (min === 0){
//           if (max === 999){
//             return "<p class='program-text' style='top:-2em'>All cases in which the number of shots fired by police was recorded.</p>"
//           } else {
//             return "<p class='program-text' style='top:-2em'>Police fired at a victim " + max + " times or fewer<br>in " + total + " recorded cases.</p>"
//           };
//         } else {
//           if (max === 999){
//             return "<p class='program-text' style='top:-2em'>Police fired at a victim " + min + " times or more<br>in " + total + " recorded cases.</p>"
//           } else {
//             return "<p class='program-text' style='top:-2em'>Police fired at a victim between " + min + " and " + max + " times<br>in " + total + " recorded cases.</p>"
//           };
//         };
//       },
//     }
//   },
//   graph: {
//     usPop: {
//       none: "<p class='program-text' style='top:-0.8em'>New York and Las Vegas have far more deaths by police<br>than any other city.  If it were its own city, Brooklyn would be third.</p>",
//       usPop: "<p class='program-text' style='top:-0.8em'>When the same cities are scaled by their populations,<br>the degree to which Las Vegas is an outlier becomes clear.</p>",
//     },
//     race: {
//       none: "<p class='program-text'>Police deaths by race, measured in percentage.</p>",
//       usPop: "<p class='program-text' style='top:-2em'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>",
//       arrests: "<p class='program-text'>The broad likelihood of a single arrest resulting in death, by race.</p>",
//       age: "<p class='program-text' style='top:-3em'>Dark purple represents victims of near-average age.<br>Bright colors to the left represent younger victims.<br>Older victims are represented by bright colors to the right.<br>You can see that black victims skew much younger than white victims.</p>",
//       illness: "<p class='program-text' style='top:-2em'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>",
//     },
//     age: {
//       none: "<p class='program-text' style='top:-0.8em'>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p>",
//       usPop:  "<p class='program-text' style='top:-0.8em'>Age Population Graph</p>",
//       arrests:  "<p class='program-text' style='top:-0.8em'>Age arrests Graph</p>",
//       race:  "<p class='program-text' style='top:-0.8em'>Age race Graph</p>",
//       illness:  "<p class='program-text' style='top:-0.8em'>Age illness Graph</p>",
//     },
//     gender: {
//       none: "<p class='program-text' style='top:-0.8em'>92.5% of people killed by police are male.<br>7.5% of people killed by police are female.</p>",
//       unarmed: "<p class='program-text' style='top:-2em'>21% of men killed by police were unarmed.<br>37% of women killed by police were unarmed.</p>",
//       illness: "<p class='program-text' style='top:-2em'>21% of men killed by police were exhibiting signs of mental illness.<br>28% of women killed by police were exhibiting signs of mental illness.</p>"
//     },
//     unarmed: {
//       none: "<p class='program-text'>Victims of police shootings were unarmed in over 20% of recorded cases.</p>",
//       shots: "<p class='program-text' style='top:-2.7em'>Twenty times,<br>the police have killed someone by firing at least ten shots,<br>and the victim was unarmed.</p>"
//     },
//     illness: {
//       none: "<p class='program-text' style='top:-0.8em'>Victims of police shootings exhibited signs of mental illness<br>in over 20% of recorded cases.</p>",
//       race: "<p class='program-text' style='top:-2.5em'>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>were exhibiting clear signs of mental illness.</p>",
//       age: "<p class='program-text' style='top:-3em'>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p>"
//     },
//     shots: {
//       none: "<p class='program-text' style='top:-2em'>Police fired at a victim 20 times or more<br>in over 30 recorded cases.</p>",
//       race: "<p class='program-text' style='top:-0.8em'>There does not appear to be a significant relationship<br>between the number of shots fired by police and the victim's race.</p>",
//       unarmed: "<p class='program-text' style='top:-0.8em'>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>",
//     }
//   }
// };


function replaceProgram(data, choosers){
  var total = data.length;
  if (choosers.displaySelector === "heatmap"){
    chooseHeatmapProgram(data, choosers);
  } else if (choosers.displaySelector === "markermap"){
    chooseMarkermapProgram(data, choosers);
  } else if (choosers.displaySelector === "graph"){
    chooseGraphProgram(data, choosers);
  };
};

function chooseHeatmapProgram(data, choosers){
  if (choosers.filter === "usPop"){
    chooseHeatmapProgramFilterUspop(data, choosers);
  } else if (choosers.filter === "age"){
    chooseHeatmapProgramFilterUspop(data, choosers);
  } else 
};




function chooseHeatmapProgramFilterUspop(data, choosers){
  if (choosers.weight === "none"){
    var program = "<p class='program-text one-line' style=" + programStyleOneLine + ">People killed by police officers in the united states.</p>";
    $('#program').html(program);
  }
};

  

var programs = {
  heatmap: {
    usPop: {
      none: "<p class='program-text' style='top:-2em'>People killed by police officers in the united states.</p>"
    },
    age: {
      none: "<p class='program-text' style='top:-0.8em'>This heatmap is scaled to show similar total heat for any age range,<br>in order to emphasize changes in locations.</p>"
    },
    race: {
      none: "<p class='program-text' style='top:-0.8em'>This heatmap is scaled to present a constant population size,<br>in order to emphasize differences in location.</p>",
      usPop: "<p class='program-text' style='top:-0.8em'>This heatmap is scaled to present a constant population size,<br>in order to emphasize differences in location.</p>"
    },
    gender: {
      none: "<p class='program-text'>Gender Heatmap</p>"
    },
    unarmed: {
      none: "<p class='program-text'>Unarmed Heatmap</p>"
    },
    illness: {
      none: "<p class='program-text'>Illness Heatmap</p>"
    },
    shots: {
      none: "<p class='program-text'>Shots Heatmap</p>"
    }
  },
  marker: {
    usPop: {
      none: "<p class='program-text'>Click on a dot or zoom in for more information.</p>"
    },
    age: {
      none: "<p class='program-text' style='top:-0.8em'>A point's size and brightness represent its distance from the standard deviation.<br>An unusual amount of very young or very old people have been killed in Texas, Oklahoma, and Arkansas.</p>"
    },
    race: {
      none: "<p class='program-text' style='top:-0.8em'>The racial distribution of people killed by police<br>in the United States.</p>",
      usPop: "<p class='program-text' style='top:-0.8em'>A map of police shootings by race,<br>scaled by US population.</p>",
      arrests: "<p class='program-text' style='top:-0.8em'>A map of police shooting by race,<br>scaled by rate of annual arrests.</p>"
    },
    gender: {
      none: "<p class='program-text'>Gender markermap</p>",
      unarmed: "<p class='program-text'>Gender/unarmed markermap</p>",
      illness: "<p class='program-text'>Gender/illness markermap</p>"
    },
    unarmed: {
      none: "<p class='program-text' style='top:-0.8em'>People killed by the police while they were unarmed<br>(select boxes on the left to see armed, or both).</p>"
    },
    illness: {
      none: "<p class='program-text' style='top:-0.8em'>People killed by the police while exhibiting clear signs of mental illness.<br>(select boxes on the left to see no signs, or both).</p>"
    },
    shots: {
      // none: "<p class='program-text'>People who were shot at by the police twenty times or more.</p>"
      none: function(){
        var min = shotsRange().min;
        var max = shotsRange().max;
        var total = dataFilterShotsWeightNone().length;
        if (min === 0){
          if (max === 999){
            return "<p class='program-text' style='top:-2em'>All cases in which the number of shots fired by police was recorded.</p>"
          } else {
            return "<p class='program-text' style='top:-2em'>Police fired at a victim " + max + " times or fewer<br>in " + total + " recorded cases.</p>"
          };
        } else {
          if (max === 999){
            return "<p class='program-text' style='top:-2em'>Police fired at a victim " + min + " times or more<br>in " + total + " recorded cases.</p>"
          } else {
            return "<p class='program-text' style='top:-2em'>Police fired at a victim between " + min + " and " + max + " times<br>in " + total + " recorded cases.</p>"
          };
        };
      },
    }
  },
  graph: {
    usPop: {
      none: "<p class='program-text' style='top:-0.8em'>New York and Las Vegas have far more deaths by police<br>than any other city.  If it were its own city, Brooklyn would be third.</p>",
      usPop: "<p class='program-text' style='top:-0.8em'>When the same cities are scaled by their populations,<br>the degree to which Las Vegas is an outlier becomes clear.</p>",
    },
    race: {
      none: "<p class='program-text'>Police deaths by race, measured in percentage.</p>",
      usPop: "<p class='program-text' style='top:-2em'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>",
      arrests: "<p class='program-text'>The broad likelihood of a single arrest resulting in death, by race.</p>",
      age: "<p class='program-text' style='top:-3em'>Dark purple represents victims of near-average age.<br>Bright colors to the left represent younger victims.<br>Older victims are represented by bright colors to the right.<br>You can see that black victims skew much younger than white victims.</p>",
      illness: "<p class='program-text' style='top:-2em'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>",
    },
    age: {
      none: "<p class='program-text' style='top:-0.8em'>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p>",
      usPop:  "<p class='program-text' style='top:-0.8em'>Age Population Graph</p>",
      arrests:  "<p class='program-text' style='top:-0.8em'>Age arrests Graph</p>",
      race:  "<p class='program-text' style='top:-0.8em'>Age race Graph</p>",
      illness:  "<p class='program-text' style='top:-0.8em'>Age illness Graph</p>",
    },
    gender: {
      none: "<p class='program-text' style='top:-0.8em'>92.5% of people killed by police are male.<br>7.5% of people killed by police are female.</p>",
      unarmed: "<p class='program-text' style='top:-2em'>21% of men killed by police were unarmed.<br>37% of women killed by police were unarmed.</p>",
      illness: "<p class='program-text' style='top:-2em'>21% of men killed by police were exhibiting signs of mental illness.<br>28% of women killed by police were exhibiting signs of mental illness.</p>"
    },
    unarmed: {
      none: "<p class='program-text'>Victims of police shootings were unarmed in over 20% of recorded cases.</p>",
      shots: "<p class='program-text' style='top:-2.7em'>Twenty times,<br>the police have killed someone by firing at least ten shots,<br>and the victim was unarmed.</p>"
    },
    illness: {
      none: "<p class='program-text' style='top:-0.8em'>Victims of police shootings exhibited signs of mental illness<br>in over 20% of recorded cases.</p>",
      race: "<p class='program-text' style='top:-2.5em'>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>were exhibiting clear signs of mental illness.</p>",
      age: "<p class='program-text' style='top:-3em'>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p>"
    },
    shots: {
      none: "<p class='program-text' style='top:-2em'>Police fired at a victim 20 times or more<br>in over 30 recorded cases.</p>",
      race: "<p class='program-text' style='top:-0.8em'>There does not appear to be a significant relationship<br>between the number of shots fired by police and the victim's race.</p>",
      unarmed: "<p class='program-text' style='top:-0.8em'>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>",
    }
  }
};
