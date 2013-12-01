var RowParser = function() {};

RowParser.prototype.removeSpaces = function(string) {
  if (string.charAt(0) === ' ') {
    string = string.substr(1);
  }
  return string;
}

RowParser.prototype.createEntry = function(rawEntry) {
  entryObject = {};
  entryObject.name = rawEntry.title.$t;
  var contentsArray = rawEntry.content.$t.split(",");
  _.each(contentsArray, function(data) {
    var dataArray = data.split(":");
    var key = this.removeSpaces(dataArray[0]);
    var value = this.removeSpaces(dataArray[1]);
    entryObject[key] = value;
  }, this);
  return entryObject;
}

RowParser.prototype.createEntryArray = function(rawArray) {
  entryArray = [];
  _.each(rawArray, function(data) {
    entryArray.push(this.createEntry(data));
  }, this);
  return entryArray;
}

