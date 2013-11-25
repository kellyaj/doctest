function parseFor(category, xmlString) {
  return $(xmlString).find(category).text();
}

function makeEntryArray(xmlString) {
  return xmlString.match(/<entry[^>]*>([\s\S]*?)<\/entry>/g)
}

function createEntry(entryString) {
}
