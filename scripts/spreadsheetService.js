var spreadsheetKey = "0AjTtPpTUvG_cdGZZV2lpODFHYzVqOG13WEFUQXJFcXc";
var feedUrl = "https://spreadsheets.google.com/feeds/";
var url = feedUrl + "worksheets/" + spreadsheetKey;

// need xmlParser. parse the response body then we can regex it
//

var xml = "<music><album>Beethover</album></music>";
var result = $(xml).find("album").text();

function getRowUrl() {
  return feedUrl + "list/" + spreadsheetKey + "/1/public/values";
}
