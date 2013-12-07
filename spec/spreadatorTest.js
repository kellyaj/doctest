describe('Spreadator', function() {

  var spreadator;
  var keys;
  var sheet;

  beforeEach(function () {
    keys = ["firstKey","secondKey"];
    spreadator = new Spreadator(keys);
    sheet = new Spreadsheet("someKey");
  });


  it("initializes with a passed in array of keys", function () {
    expect(spreadator.keys).toEqual(keys);
  });

  it("adds a key to the array", function () {
    var key = "anotherKey";
    spreadator.addKey(key);

    expect(spreadator.keys).toContain(key);
  });

  it("adds a spreadsheet to an array of sheets", function () {
    spreadator.addSheet(sheet);

    expect(spreadator.sheets).toContain(sheet);
  });

  it("removes a spreadsheet from the array of sheets", function () {
    spreadator.removeSheet(sheet.key);

    expect(spreadator.sheets).not.toContain(sheet);
  });

  it("does not add a spreadsheet if it already exists", function () {
    spreadator.addSheet(sheet);
    spreadator.addSheet(sheet);

    expect(spreadator.sheets.length).toBe(1);
  });

  it("it creates sheets on intialize", function () {
    spreadator.initialize();

    expect(spreadator.sheets.length).toBe(2);
  });

  it("creates a new sheet", function () {
    var key = "yetAnotherKey";
    spreadator.makeNewSheet(key);

    expect(spreadator.keys).toContain(key);
    expect(spreadator.sheets.length).toBe(1);
  });
});
