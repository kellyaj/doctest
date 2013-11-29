$(document).ready(function() {
  var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
  var urlGenerator = new UrlGenerator();

  var url = UrlGenerator.jsonUrl(key);

  function retrieveData(url, callback) {
    $.getJSON(url).success(function(data) {
      callback(data);
    })
  }
  // pass some callback that will just prune out entries, to be passed for object creation

});

