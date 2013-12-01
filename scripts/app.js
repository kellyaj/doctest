$(document).ready(function() {
  var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
  var ckey = "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE";

  var sheet = new Spreadsheet(key);
  sheet.retrieve();
  var sheet2 = new Spreadsheet(ckey);
  sheet2.retrieve();
});

