var RowParser = function() {
  var self = this;

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
      var key = self.removeSpaces(dataArray[0]);
      var value = self.removeSpaces(dataArray[1]);
      entryObject[key] = value;
    });
    return entryObject;
  }

}
