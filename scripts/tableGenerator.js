var TableGenerator = function() {};

TableGenerator.prototype.getKeys = function(entry) {
  var keys = [];
  for(var k in entry) keys.push(k);
  return keys;
}

TableGenerator.prototype.createHeaderRow = function(keys) {
  var html = '<tr class="header-row">'
  _.each(keys, function(key) {
    var header = "<th>" + key + "</th>"
    html += header;
  });
  return html += "</tr>"
}

TableGenerator.prototype.createEntryRow = function(entry) {
  var html = '<tr class="entry-row">';
  for(var key in entry) {
    var rowData = '<td class="entry-cell">' + entry[key] + "</td>";
    html += rowData;
  }
  return html += "</tr>";
}

TableGenerator.prototype.createRows = function(entries) {
  var html = "";
  _.each(entries, function(entry) {
    html += this.createEntryRow(entry);
  }, this);
  return html;
}

TableGenerator.prototype.createTable = function(entries) {
  var html = "";
  html += this.createHeaderRow(this.getKeys(entries[0]));
  html += this.createRows(entries);
  return html;
}
