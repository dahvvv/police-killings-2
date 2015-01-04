function infoGraphFilterUspopWeightNone(){
  var data = {
    'color': [baseColor],
    'label': [''],
    'values': [
      {
        'label': 'Houston',
        'values': [31]
      },
      {
        'label': 'Baltimore',
        'values': [34]
      },
      {
        'label': 'Cleveland',
        'values': [38]
      },
      {
        'label': 'Oakland',
        'values': [40]
      },
      {
        'label': 'Portland',
        'values': [51] // 44,7
      },
      {
        'label': 'Albuquerque',
        'values': [52] // 44,8
      },
      {
        'label': 'Chicago',
        'values': [53] // 44,9
      },
      {
        'label': 'LA',
        'values': [57] // 44,13
      },
      {
        'label': 'Las Vegas',
        'values': [136] // 44,44,44,4
      },
      {
        'label': 'NYC',
        'values': [220], // 44,44,44,44,44
      },
    ]
  };
  return data;
};

function infoGraphFilterUspopWeightUspop(){
  var data = {
    'color': [baseColor],
    'label': ['Deaths Per Ten Thousand'],
    'values': [
      {
        'label': 'Houston',
        'values': [05]
      },
      {
        'label': 'Baltimore',
        'values': [54]
      },
      {
        'label': 'Cleveland',
        'values': [97]
      },
      {
        'label': 'Oakland',
        'values': [98]
      },
      {
        'label': 'Portland',
        'values': [83] // 44,7
      },
      {
        'label': 'Albuquerque',
        'values': [93] // 44,8
      },
      {
        'label': 'Chicago',
        'values': [19] // 44,9
      },
      {
        'label': 'LA',
        'values': [14] // 44,13
      },
      {
        'label': 'Las Vegas',
        'values': [225] // 44,44,44,4
      },
      {
        'label': 'NYC',
        'values': [26], // 2.6 (per hundred thousand)
      }
    ]
  };
  return data;
};
