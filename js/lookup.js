// Get access token from .env
var apiKey = require('./../.env').apiKey;

function Repos() {}

Repos.prototype.getRepos = function(userInfo, displayFunction){
    // Debugger  
    console.log('Are you ready to look-up');

  $.get('https://api.github.com/users/' + userInfo + 
    '?access_token=' + apiKey
    ).then(function(response){
        // Debugger
        console.log(response.name);

        // Display's user's info
        displayFunction(response.name);
    }).fail(function(error){
        // Debugger
        console.log(error.responseJSON.message);
        
        $('#showUserInfo').append(error.responseJSON.message);
    });
};

exports.reposModule = Repos;