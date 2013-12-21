describe('Spreadator', function() {

  var spreadator;
  var keys;
  var sheet;
  var fakeFeed = {title: {$t: "someTitle"}}

  beforeEach(function () {
    keys = ["firstKey","secondKey"];
    spreadator = new Spreadator(keys);
    sheet = new Spreadsheet("someKey");
    sheet.feed = fakeFeed
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
    spreadator.addSheet(sheet);
    spreadator.addSheet(new Spreadsheet("someOtherKey"));
    spreadator.removeSheet(sheet.key);

    expect(spreadator.sheets).not.toContain(sheet);
    expect(spreadator.sheets.length).toBe(1);
  });

  it("removes a key when removing a sheet", function () {
    spreadator.makeNewSheet("someKey");
    spreadator.sheets[0].feed = fakeFeed
    spreadator.removeSheet(sheet.key);

    expect(spreadator.keys).not.toContain(sheet.key);
  });

  it("does not add a spreadsheet if it already exists", function () {
    spreadator.addSheet(sheet);
    spreadator.addSheet(sheet);

    expect(spreadator.sheets.length).toBe(1);
  });

  it("it creates sheets on initialize", function () {
    spyOn(spreadator, 'renderSheets');
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
