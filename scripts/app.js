$(document).ready(function() {
  var keys = ["0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc", "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE"];

  _.each(keys, function(key) {
    var sheet = new Spreadsheet(key);
    sheet.retrieve();
  });

});

