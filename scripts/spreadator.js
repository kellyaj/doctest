var Spreadator = function(keys) {
  this.keys = keys;
  this.sheets = [];
};

Spreadator.prototype.addKey = function(key) {
  this.keys.push(key);
}

Spreadator.prototype.addSheet = function(sheet) {
  if (!_.contains(this.sheets, sheet)) {
    this.sheets.push(sheet);
  }
}

Spreadator.prototype.removeSheet = function(key) {
  this.sheets = _.filter(this.sheets, function(s) { s.key != key; });
  this.keys = _.filter(this.keys, function(k) { k != key});
}

Spreadator.prototype.renderSheets = function() {
  _.each(this.sheets, function(sheet) { sheet.retrieve() });
}

Spreadator.prototype.initialize = function() {
  var self = this;
  _.each(self.keys, function(key) {
    self.sheets.push(new Spreadsheet(key));
  });
}

Spreadator.prototype.makeNewSheet = function(key) {
  this.addKey(key);
  this.addSheet(new Spreadsheet(key));
}
