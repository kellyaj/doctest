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

}

Spreadsheet.prototype.retrieve = function() {
  var self = this;
  $.getJSON(this.url).success(function(data) {
    self.feed = data.feed;
    self.entries = self.rowParser.createEntryArray(data.feed.entry);
    self.render();
  });
}

Spreadsheet.prototype.render = function() {
  var title = this.feed.title.$t;
  $('[data-id=sheets]').append("<div data-id=" + title + "><h2>" + title + "</h2><table>" + this.tableGenerator.createTable(this.entries) + "</table></div>");
}
