describe('spreadsheet', function() {

  var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
  var spreadsheet = new Spreadsheet(key);
  var jsonExample = {
    "feed":
      {
        "title": {
          "$t": "my teas"
        },
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

  it("creates a div and selector upon initialization", function () {
    spreadsheet.createElement();
    expect(spreadsheet.selector).toBe("[data-id=" + key + "]");
  });

  it("is a new sheet if there are no other sheets with that id", function () {
    jquerySpy = spyOn(window, "$").andReturn({});

    expect(spreadsheet.isNewSheet()).toBeTruthy();
    expect(jquerySpy).toHaveBeenCalledWith(spreadsheet.selector)
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

    spreadsheet.retrieve.apply(spreadsheet, []);

    expect(ajaxSpy).toHaveBeenCalled();
    expect(spreadsheet.entries.length).toBe(2);
    expect(spreadsheet.entries).toEqual(expectedArray);
  });

});
