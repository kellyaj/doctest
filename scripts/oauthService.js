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

function displayFileContents() {
  console.log("trying to display");
}

function getFullFile(fileId) {
  gapi.client.request({
    'path': '/drive/v2/files/' + fileId,
    'method': 'GET',
    callback: function(theResponseJs, theResponseTxt) {
      var token = gapi.auth.getToken();
      var xhr = new XMLHttpRequest();
      console.log(theResponseJs.embedLink);
      xhr.open('GET', theResponseJs.downloadUrl, true);
      xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          console.log(xhr.status)
          if (xhr.status == 200) {
            console.log(xhr.response);
          }
        }
      }
      xhr.send();
    }
  });
}

function displayFile(file) {
  console.log(file);
  $('[data-id=file-info]').append("<img src=" + file.iconLink + "> " + file.title);
  var xhr = new XMLHttpRequest();
  var token = gapi.auth.getToken();
  $.ajax({
    url: file.embedLink,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
    }
  }).done(function(data) {
    //console.log(data);
    //$('[data-id=file-info]').append(data);
  });
}

function fetchFileContents(fileId) {
  //getFullFile(fileId);

  var request = gapi.client.drive.files.get({
    'fileId': fileId
  });

  request.execute(function(response) {
    displayFile(response);
  });
}

function getFileId() {
  return gapi.client.load('drive', 'v2', function() {
    var fileList = gapi.client.drive.files.list({
      'userId': 'me',
      'q': "title contains 'tea'"
    });

    fileList.execute(function(response) {
      fetchFileContents(response.items[0].id);
    });
  });
}

function makeApiCall() {
  getFileId();

  gapi.client.load('plus', 'v1', function() {
    var request = gapi.client.plus.people.get({
      'userId': 'me'
    });
    request.execute(function(response) {
      $('[data-id=user-info]').append("<img src=" + response.image.url + ">");
      $('[data-id=user-info]').append(response.displayName);

    });
  });
}
