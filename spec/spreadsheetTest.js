describe('spreadsheet', function() {

  var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
  var spreadsheet = new Spreadsheet(key);
  var jsonExample = {
    "feed":
      {
        "entry": [
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
          }
      ] }
  };

  it("has a key", function () {
    expect(spreadsheet.key).toBe(key);
  });

  it("retrieves data and stores entries on success", function () {
    var expectedArray = [
      {"name": "ceylon", "region": "sri lanka", "type": "black"},
      {"name": "jasmine", "region": "china", "type": "green"}
    ]
    ajaxSpy = spyOn($, "getJSON").andReturn({
      success: function(e) {
        e(jsonExample);
      }
    });

    spreadsheet.retrieve();

    expect(ajaxSpy).toHaveBeenCalled();
    expect(spreadsheet.entries.length).toBe(2);
    expect(spreadsheet.entries).toEqual(expectedArray);
  });

  xit("renders upon completion of a retrieval", function () {
    ajaxSpy = spyOn($, "getJSON").andReturn({
      success: function(e) {
        e(jsonExample);
      }
    });

    spreadsheet.retrieve();

  });
});
