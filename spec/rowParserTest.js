describe('rowParser', function() {

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

  it("creates an array of entry objects", function () {
    var jsonExample = [
      {
        "title": {
          "$t": "ceylon"
        },
        "content": {
          "type": "text",
          "$t": "type: black, region: sri lanka"
        }
      },
      {
        "title": {
          "$t": "jasmine"
        },
        "content": {
          "$t": "type: green, region: china"
        }
      },
      {
        "title": {
          "$t": "darjeerling"
        },
        "content": {
          "type": "text",
          "$t": "type: oolong, region: india"
        }
      }
    ];
    var expectedArray = [
      {"name": "ceylon", "region": "sri lanka", "type": "black"},
      {"name": "jasmine", "region": "china", "type": "green"},
      {"name": "darjeerling", "region": "india", "type": "oolong"}
    ];
    expect(rowParser.createEntryArray(jsonExample)).toEqual(expectedArray);
  });

});
