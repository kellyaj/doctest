function scopes() {
  return ['https://www.googleapis.com/auth/userinfo.email'];
}

var clientId = '21687497772-rbmpab2j0clffvh6lc4o9d94tjrefi3a.apps.googleusercontent.com';
var apiKey = 'AIzaSyDh8vE4X3m4G4bnlX7FtjgUTnxoywRpidM';
var scopes = [
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/userinfo.profile'
 ];

function joinedScopes() {
  return scopes.join(' ');
}

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function checkAuth() {
  gapi.auth.authorize({'client_id': clientId, 'scope': joinedScopes(), 'immediate': true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  if (authResult) {
    makeApiCall();
  } else {
    gapi.auth.authorize(
     {'client_id': clientId, 'scope': joinedScopes(), 'immediate': false}, handleAuthResult);
  }
}

function makeApiCall() {

  gapi.client.load('drive', 'v2', function() {
    var fileList = gapi.client.drive.files.list({
      'userId': 'me',
      'q': "title contains 'tea'"
    });

    fileList.execute(function(response) {
      console.log(response)
    });
  });

  gapi.client.load('plus', 'v1', function() {
    var request = gapi.client.plus.people.get({
      'userId': 'me'
    });
    request.execute(function(response) {
      $('#response').append("<img src=" + response.image.url + ">");
      $('#response').append(response.displayName);

    });
  });
}
