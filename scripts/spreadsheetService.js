var spreadsheetKey = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
var feedUrl = "https://spreadsheets.google.com/feeds/";
var url = feedUrl + "worksheets/" + spreadsheetKey;
var jsonUrl = "https://spreadsheets.google.com/feeds/list/0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc/1/public/basic?alt=json-in-script";

function getRowUrl() {
  return feedUrl + "list/" + spreadsheetKey + "/1/public/values";
}
