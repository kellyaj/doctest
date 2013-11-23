function scopes() {
  return ['https://www.googleapis.com/auth/userinfo.email'];
}

var clientId = '21687497772-rbmpab2j0clffvh6lc4o9d94tjrefi3a.apps.googleusercontent.com';
var apiKey = 'AIzaSyDh8vE4X3m4G4bnlX7FtjgUTnxoywRpidM';

function handleClientLoad() {
  console.log("loading");
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function checkAuth() {
  gapi.auth.authorize(
     {'client_id': clientId, 'scope': scopes()[0], 'immediate': true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  if (authResult) {
    console.log("got some stuff");
  } else {
    console.log("didnt get stuff");
  }

}
