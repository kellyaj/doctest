$(document).ready(function() {

  var keys = ["0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc", "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE"];

  var otherKey = "0AjTtPpTUvG_cdG53SGUwZ3FJcl9VVjV2MWJVQlNUNkE";

  var inputField = '[data-id=key-input]';
  var keyInput = '[data-id=key-input]';

  var spreadator = new Spreadator(keys);
  spreadator.initialize();
  spreadator.renderSheets();

  $('[data-id=input-button]').click(function() {
    spreadator.makeNewSheet($(inputField).val());
    resetInputField();
    spreadator.renderSheets();
  });

  $(keyInput).keyup(function(e) {
    if (enterWasPressed(e) && inputIsNotEmpty()) {
      spreadator.makeNewSheet($(inputField).val());
      resetInputField();
      spreadator.renderSheets();
    }
  });

  var resetInputField = function() {
    $(inputField).val("");
  }

  var addKey = function() {
    keys.push($(keyInput).val());
    $(inputField).val("");
  }

  var inputIsNotEmpty = function() {
    return ($(inputField).val() != "");
  }

  var enterWasPressed = function(e) {
    return (e.which == 13);
  }

  $('body').on('click', '[data-id=remove-sheet]', function() {
    var key = $(this).data('key');
    $('[data-id=' + key + ']').fadeOut(300, function() {
      spreadator.removeSheet(key);
      spreadator.renderSheets();
    });
  });

});

