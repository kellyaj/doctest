var Spreadsheet = function(key) {
  var self = this;
  var urlGenerator = new UrlGenerator();
  var rowParser = new RowParser();
  var tableGenerator = new TableGenerator();

  self.key = key;
  self.url = UrlGenerator.jsonUrl(self.key);
  self.entries = [];
  self.successCallback = rowParser.createEntryArray;
  self.completeCallback = function() { console.log("todo");}

  Spreadsheet.prototype.retrieve = function() {
    $.getJSON(self.url).success(function(data) {
      self.entries = self.successCallback(data.feed.entry);
      self.completeCallback();
    });
  }

  Spreadsheet.prototype.render = function() {
  }
}
