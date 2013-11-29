describe('xmlParser', function() {

  var rowParser = new RowParser();

  it("removes spaces from splitting", function () {
    var string = " sri lanka";

    expect(rowParser.removeSpaces(string)).toBe("sri lanka");
  });

  it("does not remove spaces when unnecessary", function () {
    var string = "india";

    expect(rowParser.removeSpaces(string)).toBe("india");
  });

  it("transforms an entry into an object", function () {
    var jsonExample = {
      "title": {
        "type": "text",
        "$t": "ceylon"
      },
      "content": {
        "type": "text",
        "$t": "type: black, region: sri lanka"
      }
    }
    var expectedObject = {"name": "ceylon", "region": "sri lanka", "type": "black"};

    expect(rowParser.createEntry(jsonExample)).toEqual(expectedObject);
  });
});
