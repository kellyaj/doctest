var UrlGenerator = function() {
}

UrlGenerator.jsonUrl = function(key) {
  return "https://spreadsheets.google.com/feeds/list/" + key + "/1/public/basic?alt=json"
}
