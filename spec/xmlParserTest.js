describe('xmlParser', function() {
  it("parses an xml string for a given string", function () {
    expect(parseFor('scifi', '<films><scifi>Terminator 2</scifi></films>')).toBe('Terminator 2');
  });

  it("creates an array of entries", function () {
    var xmlString = "<feed><entry><gsx:name>ceylon</gsx:name></entry><entry><gsx:name>early grey</gsx:name></entry><entry><gsx:name>chai</gsx:name></entry></feed>";
    var expectedArray = ['<entry><gsx:name>ceylon</gsx:name></entry>', '<entry><gsx:name>early grey</gsx:name></entry>', '<entry><gsx:name>chai</gsx:name></entry>']
    console.log(expectedArray);
    console.log(makeEntryArray(xmlString));

    expect(makeEntryArray(xmlString)).toEqual(expectedArray);
  });

  it("transforms an entry into an object", function () {
    var entryString = "<gsx:name>ceylon</gsx:name><gsx:origin>sri lanka</gsx:origin>";
    var expectedObject = {"name": "ceylon", "origin": "sri lanka"};

    expect(createEntry(entryString)).toEqual(expectedObject);
  });
});
