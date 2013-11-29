describe('UrlGenerator', function() {
  it("properly builds a url to get a document's json url", function () {
    var key = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
    expect(UrlGenerator.jsonUrl(key)).toBe("https://spreadsheets.google.com/feeds/list/0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc/1/public/basic?alt=json");
  });
});
