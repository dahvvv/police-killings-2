var programs = {
  heatmap: {
    usPop: {
      none: "<p class='program-text'>People killed by police officers in the united states.</p>"
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
      none: "<p class='program-text'>Gender markermap</p>"
    },
    unarmed: {
      none: "<p class='program-text' style='top:-0.8em'>People killed by the police while they were unarmed<br>(select boxes on the left to see armed, or both).</p>"
    },
    illness: {
      none: "<p class='program-text' style='top:-0.8em'>People killed by the police while exhibiting clear signs of mental illness.<br>(select boxes on the left to see no signs, or both).</p>"
    }
  },
  graph: {
    usPop: {
      none: "<p class='program-text' style='top:-0.8em'>New York and Las Vegas have far more deaths by police<br>than any other city.  If it were its own city, Brooklyn would be third.</p>",
      usPop: "<p class='program-text' style='top:-0.8em'>When the same cities are scaled by their populations,<br>the degree to which Las Vegas is an outlier becomes clear.</p>",
    },
    race: {
      none: "<p class='program-text'>Police deaths by race, measured in percentage.</p>",
      usPop: "<p class='program-text' style='top:-0.8em'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>",
      arrests: "<p class='program-text'>The broad likelihood of a single arrest resulting in death, by race.</p>",
    },
    age: {
      none: "<p class='program-text' style='top:-0.8em'>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p>",
    },
    gender: {
      none: "<p class='program-text' style='top:-0.8em'>92.5% of people killed by police are male.<br>7.5% of people killed by police are female.</p>"
    },
    unarmed: {
      none: "<p class='program-text'>Victims of police shootings were unarmed in over 20% of recorded cases.</p>"
    },
    illness: {
      none: "<p class='program-text' style='top:-0.8em'>Victims of police shootings exhibited signs of mental illness<br>in over 20% of recorded cases.</p>"
    }
  }
};
