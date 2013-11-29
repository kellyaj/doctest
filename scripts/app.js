$(document).ready(function() {
  var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
  var ckey = "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE";

  var urlGenerator = new UrlGenerator();
  var rowParser = new RowParser();
  var tableGenerator = new TableGenerator();

  var url = UrlGenerator.jsonUrl(key);
  var entries = [];

  function retrieveData(url, callback) {
    $.getJSON(url).success(function(data) {
      entries = callback(data.feed.entry);
    }).complete(function() {
      keys = [];
      for(var k in entries[0]) keys.push(k);
      $('[data-id=entries-table]').append(tableGenerator.createHeaderRow(keys));
      $('[data-id=entries-table]').append(tableGenerator.createRows(entries));
    });
  }

  retrieveData(url, rowParser.createEntryArray);

});

