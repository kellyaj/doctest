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
    var expectedHtml = '<tr class="header-row"><th>name</th><th>region</th><th>type</th></tr>';

    expect(tableGenerator.createHeaderRow(keys)).toBe(expectedHtml);
  });

  it("creates an entry row from a single object", function () {
    var expectedHtml = '<tr class="entry-row"><td class="entry-cell">ceylon</td><td class="entry-cell">sri lanka</td><td class="entry-cell">black</td></tr>';

    expect(tableGenerator.createEntryRow(firstEntry)).toBe(expectedHtml);
  });

  it("creates table rows from an array of objects", function () {
    var expectedHtml = '<tr class="entry-row"><td class="entry-cell">ceylon</td><td class="entry-cell">sri lanka</td><td class="entry-cell">black</td></tr><tr class="entry-row"><td class="entry-cell">jasmine</td><td class="entry-cell">china</td><td class="entry-cell">green</td></tr><tr class="entry-row"><td class="entry-cell">darjeerling</td><td class="entry-cell">india</td><td class="entry-cell">oolong</td></tr>';

    expect(tableGenerator.createRows(entries)).toBe(expectedHtml);
  });

  it("creates a complete table from an array of entries", function () {
    var expectedHtml = '<tr class="header-row"><th>name</th><th>region</th><th>type</th></tr><tr class="entry-row"><td class="entry-cell">ceylon</td><td class="entry-cell">sri lanka</td><td class="entry-cell">black</td></tr><tr class="entry-row"><td class="entry-cell">jasmine</td><td class="entry-cell">china</td><td class="entry-cell">green</td></tr><tr class="entry-row"><td class="entry-cell">darjeerling</td><td class="entry-cell">india</td><td class="entry-cell">oolong</td></tr>';

    expect(tableGenerator.createTable(entries)).toBe(expectedHtml);
  });

});
