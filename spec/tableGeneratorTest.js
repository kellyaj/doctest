describe('tableGenerator', function() {

  var tableGenerator = new TableGenerator();

  var entries = [
    {"name": "ceylon", "region": "sri lanka", "type": "black"},
    {"name": "jasmine", "region": "china", "type": "green"},
    {"name": "darjeerling", "region": "india", "type": "oolong"}
  ];
  var firstEntry = entries[0];

  it("creates an array of keys based on a sample entry", function () {
    var expectedKeys = ["name", "region", "type"];

    expect(tableGenerator.getKeys(firstEntry)).toEqual(expectedKeys);
  });

  it("creates a row of headers based on an array of keys", function () {
    var keys = ["name", "region", "type"];
    var expectedHtml = "<tr><th>name</th><th>region</th><th>type</th></tr>"

    expect(tableGenerator.createHeaderRow(keys)).toBe(expectedHtml);
  });

  it("creates an entry row from a single object", function () {
    var expectedHtml = "<tr><td>ceylon</td><td>sri lanka</td><td>black</td></tr>";

    expect(tableGenerator.createEntryRow(firstEntry)).toBe(expectedHtml);
  });

  it("creates table rows from an array of objects", function () {
    var expectedHtml = "<tr><td>ceylon</td><td>sri lanka</td><td>black</td></tr><tr><td>jasmine</td><td>china</td><td>green</td></tr><tr><td>darjeerling</td><td>india</td><td>oolong</td></tr>";

    expect(tableGenerator.createRows(entries)).toBe(expectedHtml);
  });

  it("creates a complete table from an array of entries", function () {
    var expectedHtml = "<tr><th>name</th><th>region</th><th>type</th></tr><tr><td>ceylon</td><td>sri lanka</td><td>black</td></tr><tr><td>jasmine</td><td>china</td><td>green</td></tr><tr><td>darjeerling</td><td>india</td><td>oolong</td></tr>";

    expect(tableGenerator.createTable(entries)).toBe(expectedHtml);
  });

});
