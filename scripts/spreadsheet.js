var Spreadsheet = function(key) {
  var urlGenerator = new UrlGenerator();
  var rowParser = new RowParser();
  var tableGenerator = new TableGenerator();

  this.rowParser = rowParser;
  this.tableGenerator = tableGenerator;
  this.key = key;
  this.url = UrlGenerator.jsonUrl(this.key);
  this.entries = [];
  this.successCallback = rowParser.createEntryArray;
  this.completeCallback = function() { console.log("todo");}
}

Spreadsheet.prototype.retrieve = function() {
  var self = this;
  $.getJSON(this.url).success(function(data) {
    self.entries = self.successCallback.apply(self.rowParser, [data.feed.entry]);
    self.completeCallback();
  });
}

Spreadsheet.prototype.render = function() {
}
