var TableGenerator = function() {
  var self = this;
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
}
