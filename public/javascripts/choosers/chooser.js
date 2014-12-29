function replaceChooser(chooser, callback){
  if ($(chooser).hasClass('button-filter')) {
    replaceFilter(chooser, callback);
  } else if ($(chooser).hasClass('display-selector')) {
    replaceSelector(chooser, callback);
  } else if ($(chooser).hasClass('button-weight')) {
    replaceWeight(chooser, callback);
  };
};