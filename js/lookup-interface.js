var Repos = require('./../js/lookup.js').reposModule;

var displayUserName = function(nameData) {
  if (nameData === null) {
    alert("The username does not exist. Try again.");
  } else {
    $('#showUserInfo').append("<h3>The user's name is " + nameData + ". </h3> <h2> Public Repositories</h2>");
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

    // Debugger
    console.log('I am batman');

    $('#usernameForm').submit( function(event){

        // Clear the info currently displayed 
        $('#showUserInfo').empty();
        $('#showRepoInfo').empty();
        $('.section5').show();

        event.preventDefault();

        // Debugger
        console.log('I am groot');

        var userInfo = $('#username').val();

        // Clear form input field
        $('#username').val("");

        // Get user information
        currentReposObject.getRepos(userInfo, displayUserName);

        // Debugger
        console.log(userInfo);

        // Display user information 
        // $('#showUserInfo').text(userInfo);
    });
});