$(document).ready(function() {

  var keys = ["0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc", "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE"];

  var otherKey = "0AjTtPpTUvG_cdG53SGUwZ3FJcl9VVjV2MWJVQlNUNkE";

  var spreadator = new Spreadator(keys);
  spreadator.initialize();
  spreadator.renderSheets();

  $('[data-id=input-button]').click(function() {
    spreadator.makeNewSheet($('[data-id=key-input]').val());
    resetInputField();
    spreadator.renderSheets();
  });

  $('[data-id=key-input]').keyup(function(e) {
    if (enterWasPressed(e) && inputIsNotEmpty()) {
      spreadator.makeNewSheet($('[data-id=key-input]').val());
      resetInputField();
      spreadator.renderSheets();
    }
  });

  var resetInputField = function() {
    $('[data-id=key-input]').val("");
  }

  var addKey = function() {
    keys.push($('[data-id=key-input]').val());
    $('[data-id=key-input]').val("");
  }

  var inputIsNotEmpty = function() {
    return ($('[data-id=key-input]').val() != "");
  }

  var enterWasPressed = function(e) {
    return (e.which == 13);
  }

});

