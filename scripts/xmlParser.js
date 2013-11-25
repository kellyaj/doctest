//var xml = "<music><album>Beethover</album></music>";
//var result = $(xml).find("album").text();

function parseFor(category, xmlString) {
  return $(xmlString).find(category).text();
}

function makeEntryArray(xmlString) {
  var entriesArray = [];
  var entries = $(xmlString).find('entry');
  _.each(entries, function(entry) {
    entriesArray.push(entry.innerHTML);
  });
  return entriesArray;
}

function createEntry(entryString) {
}
