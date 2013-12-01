var Spreadsheet = function(key) {
  var urlGenerator = new UrlGenerator();
  var rowParser = new RowParser();
  var tableGenerator = new TableGenerator();

  this.rowParser = rowParser;
  this.tableGenerator = tableGenerator;
  this.key = key;
  this.url = UrlGenerator.jsonUrl(this.key);
  this.entries = [];
  this.feed = {};

  this.successCallback = rowParser.createEntryArray;
  this.completeCallback = this.render;
}

Spreadsheet.prototype.retrieve = function() {
  var self = this;
  $.getJSON(this.url).success(function(data) {
    self.feed = data.feed;
    self.entries = self.successCallback.apply(self.rowParser, [data.feed.entry]);
    self.completeCallback();
  });
}

Spreadsheet.prototype.render = function() {
  $('[data-id=sheets]').append("<h2>" + this.feed.title.$t + "</h2>");
  $('[data-id=sheets]').append("<table>" + this.tableGenerator.createTable(this.entries) + "</table>");
}
