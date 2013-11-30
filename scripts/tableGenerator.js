var TableGenerator = function() {
  var self = this;

  TableGenerator.prototype.getKeys = function(entry) {
    var keys = [];
    for(var k in entry) keys.push(k);
    return keys;
  }

  TableGenerator.prototype.createHeaderRow = function(keys) {
    var html = "<tr>"
    _.each(keys, function(key) {
      var header = "<th>" + key + "</th>"
      html += header;
    });
    return html += "</tr>"
  }

  TableGenerator.prototype.createEntryRow = function(entry) {
    var html = "<tr>";
    for(var key in entry) {
      var rowData = "<td>" + entry[key] + "</td>";
      html += rowData;
    }
    return html += "</tr>";
  }

  TableGenerator.prototype.createRows = function(entries) {
    var html = "";
    _.each(entries, function(entry) {
      html += self.createEntryRow(entry);
    });
    return html;
  }

  TableGenerator.prototype.createTable = function(entries) {
    var html = "";
    html += self.createHeaderRow(self.getKeys(entries[0]));
    html += self.createRows(entries);
    return html;
  }
}
