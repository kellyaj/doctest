function scopes() {
  return ['https://www.googleapis.com/auth/userinfo.email'];
}

var clientId = '21687497772-rbmpab2j0clffvh6lc4o9d94tjrefi3a.apps.googleusercontent.com';
var apiKey = 'AIzaSyDh8vE4X3m4G4bnlX7FtjgUTnxoywRpidM';
var scopes = "https://www.googleapis.com/auth/plus.me";

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function checkAuth() {
  gapi.auth.authorize({'client_id': clientId, 'scope': scopes, 'immediate': true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = $('#authorize-button');
  authorizeButton.onclick = handleAuthClick;

  if (authResult) {
    makeApiCall();
  } else {
    gapi.auth.authorize(
     {'client_id': clientId, 'scope': scopes, 'immediate': false}, handleAuthResult);
  }
}

function handleAuthClick(event) {
  console.log("clicked");
  gapi.auth.authorize(
     {'client_id': clientId, 'scope': scopes, 'immediate': false}, handleAuthResult);
}

function makeApiCall() {
  gapi.client.load('plus', 'v1', function() {
    var request = gapi.client.plus.people.get({
      'userId': 'me'
    });
    request.execute(function(resp) {
      $('#response').append("<img src=" + resp.image.url + ">");
      $('#response').append(resp.displayName);

    });
  });
}
