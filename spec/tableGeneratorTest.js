describe('tableGenerator', function() {

  var tableGenerator = new TableGenerator();

  it("creates a row of headers based on an array of keys", function () {
    var keys = ["name", "region", "type"];
    var expectedHtml = "<tr><th>name</th><th>region</th><th>type</th></tr>"

    expect(tableGenerator.createHeaderRow(keys)).toBe(expectedHtml);
  });

  it("creates an entry row from a single object", function () {
    var entry = {"name": "ceylon", "region": "sri lanka", "type": "black"}
    var expectedHtml = "<tr><td>ceylon</td><td>sri lanka</td><td>black</td></tr>";

    expect(tableGenerator.createEntryRow(entry)).toBe(expectedHtml);
  });

  it("creates table rows from an array of objects", function () {
    var entries= [
      {"name": "ceylon", "region": "sri lanka", "type": "black"},
      {"name": "jasmine", "region": "china", "type": "green"},
      {"name": "darjeerling", "region": "india", "type": "oolong"}
    ];
    var expectedHtml = "<tr><td>ceylon</td><td>sri lanka</td><td>black</td></tr><tr><td>jasmine</td><td>china</td><td>green</td></tr><tr><td>darjeerling</td><td>india</td><td>oolong</td></tr>";

    expect(tableGenerator.createRows(entries)).toBe(expectedHtml);
  });
});
