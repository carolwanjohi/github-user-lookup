var Repos = require('./../js/lookup.js').reposModule;

var displayUserInfo = function(nameData) {
  if (nameData === null) {
    alert("The username does not exist. Try again.");
  } else {
    $('#showUserInfo').append("<p>The user's name is " + nameData + ". </p>");
  }
};

$(document).ready( function() {

    var currentReposObject = new Repos();

    // Debugger
    console.log('I am batman');

    $('#usernameForm').submit( function(event){

        // Clear the info currently displayed 
        $('#showUserInfo').empty();

        event.preventDefault();

        // Debugger
        console.log('I am groot');

        var userInfo = $('#username').val();

        // Clear form input field
        $('#username').val("");

        // Get user information
        currentReposObject.getRepos(userInfo, displayUserInfo);

        // Debugger
        console.log(userInfo);

        // Display user information 
        // $('#showUserInfo').text(userInfo);
    });
});