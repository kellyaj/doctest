$(document).ready(function() {
  var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
  var ckey = "0AjTtPpTUvG_cdDR4NGJBeTlJVFFuVFBERF9OUFc2dkE";

  var urlGenerator = new UrlGenerator();
  var rowParser = new RowParser();
  var tableGenerator = new TableGenerator();

  var url = UrlGenerator.jsonUrl(key);
  var feed = {}
  var entries = [];

  function retrieveData(url, successCallback, completeCallback) {
    $.getJSON(url).success(function(data) {
      feed = data.feed;
      entries = successCallback.apply(rowParser, [data.feed.entry]);
    }).complete(function() {
      completeCallback();
    });
  }

  function renderData() {
    $('[data-id=sheet-title]').append(feed.title.$t);
    $('[data-id=entries-table]').append(tableGenerator.createTable(entries));
  }

  retrieveData(url, rowParser.createEntryArray, renderData);

});

