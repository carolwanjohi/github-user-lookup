var Repos = require('./../js/lookup.js').reposModule;

var displayUserName = function(nameData) {
  if (nameData === null) {
    $('#showUserInfo').append("<hr/> <h3>The user has no name.</h3> <hr/> <h2> Public Repositories</h2>");
  } else {
    $('#showUserInfo').append("<hr/> <h3>The user's name is " + nameData + ". </h3> <hr/> <h2> Public Repositories</h2>");
  }
};

// var displayRepoName = function(repoNameData) {
//   if (nameData === null) {
//     alert("The username does not exist. Try again.");
//   } else {
//     $('#showUserInfo').append("<p>The user's name is " + nameData + ". </p>");
//   }
// };

$(document).ready( function() {

    var currentReposObject = new Repos();

    $('#usernameForm').submit( function(event){

        // Clear the info currently displayed 
        $('#showUserInfo').empty();
        $('#showRepoInfo').empty();
        $('.section5').show();

        event.preventDefault();

        var userInfo = $('#username').val();

        // Clear form input field
        $('#username').val("");

        // Get user full name and display
        currentReposObject.getRepos(userInfo, displayUserName);

    });
});