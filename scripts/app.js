$(document).ready(function() {
  var keys = ["0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc", "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE"];

  var otherKey = "0AjTtPpTUvG_cdG53SGUwZ3FJcl9VVjV2MWJVQlNUNkE";

  $('[data-id=input-button]').click( function() {
    var key = $('[data-id=key-input]').val();
    keys.push(key);
    renderSheets();
  });

  var renderSheets = function () {
    _.each(keys, function(key) {
      var sheet = new Spreadsheet(key);
      sheet.retrieve();
    });
  }

  renderSheets();

});

