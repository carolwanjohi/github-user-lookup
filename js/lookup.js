// Get access token from .env
var apiKey = require('./../.env').apiKey;

function Repos() {}

Repos.prototype.getRepos = function(userInfo){
    // Debugger  
    console.log('Are you ready to look-up');

  $.get('https://api.github.com/users/' + userInfo + 
    '?access_token=' + apiKey
    ).then(function(response){
        console.log(response);
    }).fail(function(error){
        console.log(error.responseJSON.message);
    });
};

exports.reposModule = Repos;