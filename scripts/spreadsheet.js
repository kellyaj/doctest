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
  this.parentElement = $('[data-id=sheets]');
  this.createElement();
}

Spreadsheet.prototype.retrieve = function() {
  var self = this;
  $.getJSON(this.url).success(function(data) {
    self.feed = data.feed;
    self.entries = self.rowParser.createEntryArray(data.feed.entry);
    self.render();
  });
}

Spreadsheet.prototype.createElement = function() {
  this.selector = '[data-id=' + this.key + ']';
  if (this.isNewSheet()) {
    this.parentElement.append("<div data-id=" + this.key + "></div>");
  }
}

Spreadsheet.prototype.removeElement = function() {
  $(this.selector).remove();
  $('[data-id=flash]').html("Spreadsheet '" + this.title + "' has been removed.");
  $('[data-id=flash]').fadeOut(4000, function() {
    $('[data-id=flash]').html("");
    $('[data-id=flash]').removeAttr("style");
  })
}

Spreadsheet.prototype.isNewSheet = function() {
  return ($(this.selector)[0] == undefined);
}

Spreadsheet.prototype.render = function() {
  this.setTitles();
  $(this.selector).html('<div class="sheet" data-id=' + this.dataTitle + '></div>');
  $('[data-id=' + this.dataTitle + ']').append(this.removeButton());
  $('[data-id=' + this.dataTitle + ']').append(this.titleHeader());
  $('[data-id=' + this.dataTitle + ']').append(this.table());
}

Spreadsheet.prototype.removeButton = function() {
  return '<button data-id="remove-sheet" class="remove-sheet sheet-title" data-key=' + this.key + '>-</button>'
}

Spreadsheet.prototype.table = function() {
  return "<table>" + this.tableGenerator.createTable(this.entries) + "</table>"
}

Spreadsheet.prototype.titleHeader = function() {
  return '<h2 class="sheet-title">' + this.title + '</h2>'
}

Spreadsheet.prototype.setTitles = function() {
  this.title = this.feed.title.$t;
  this.dataTitle = this.title.replace(/\s+/g, "");
}

