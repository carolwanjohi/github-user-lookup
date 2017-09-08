var Repos = require('./../js/lookup.js').reposModule;

$(document).ready( function() {

    var currentReposObject = new Repos();

    // Debugger
    console.log('I am batman');

    $('#usernameForm').submit( function(event){
        event.preventDefault();

        // Debugger
        console.log('I am groot');

        var userInfo = $('#username').val();

        // Clear form input field
        $('#username').val("");

        // Get user information
        currentReposObject.getRepos(userInfo);

        // Debugger
        console.log(userInfo);

        // Display user information 
        $('#showUserInfo').text(userInfo);
    });
});