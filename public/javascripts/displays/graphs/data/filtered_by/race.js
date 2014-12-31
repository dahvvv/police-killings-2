function dataGraphFilterRaceWeightNone(){
  var data = {
    'color': [baseColor],
    'label': ['race'],
    'values': [
      {
        'label': 'other',
        'values': [0.9], //24
      },
      {
        'label': 'alaskan/p.i.',
        'values': [1.1], //29
      },
      {
        'label': 'asian',
        'values': [1.7], //44
      },
      {
        'label': 'hispanic/latin',
        'values': [11.9], //302
      },
      {
        'label': 'black',
        'values': [35.0], //889
      },
      {
        'label': 'white',
        'values': [49.3], //1252
      }
    ]
  };
  return data;
};

function dataGraphFilterRaceWeightUspop(){
  var data = {
    'color': [baseColor,addColor,subColor],
    'label': ['unweighted portion','additional portion gained by weighting against us population','portion lost by weighting against us population'],
    'values': [
      {
        'label': 'other',
        'values': [0.9,5.4], //24, total weighted percent 6.3
      },
      {
        'label': 'alaskan/p.i.', //29, total weight 15.3%
        'values': [1.1,14.2],
      },
      {
        'label': 'asian',
        'values': [1.7,3.6], //44, total weight 5.3%
      },
      {
        'label': 'hispanic/latin', //302, total weight 11.6
        'values': [11.6,0,0.3],
      },
      {
        'label': 'black', //889, total weight 44.2
        'values': [35.0,9.2],
      },
      {
        'label': 'white', //1252, total weight 10.6, -38.7
        'values': [10.6,0,38.7], // add extra 38.7 to all
      }
    ]
  };
  return data;
};

function dataGraphFilterRaceWeightArrests(){
  var data = {
    'color': [baseColor,addColor,subColor],
    'label': ['unweighted portion','additional portion gained by weighting against us population','portion lost by weighting against us population'],
    'values': [
      {
        'label': 'alaskan/p.i.', //arrest rate 1.7%, cop kill rate 1.1%, total weight 10.8%
        'values': [1.1,9.7],
      },
      {
        'label': 'asian',
        'values': [1.7,21.9], //arrest rate 1.2%, cop kill rate 1.7%, total weight 23.6%
      },
      {
        'label': 'black', //arrest rate 28.3%, cop kill rate 35%, total weight 44.2
        'values': [35.0,9.2],
      },
      {
        'label': 'white', //arrest rate 68.9%, cop kill rate 49.3%, total weight 11.9, 
        'values': [10.6,1.3], // add extra 38.7 to all
      }
    ]
  };
  return data;
};
