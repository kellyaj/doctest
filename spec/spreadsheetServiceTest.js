describe('spreadsheetService', function() {
  it("properly builds a url to get rows", function () {
    expect(getRowUrl()).toBe("https://spreadsheets.google.com/feeds/list/0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc/1/public/values");
  });
});
