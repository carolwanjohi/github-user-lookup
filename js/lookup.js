// Get access token from .env
var apiKey = require('./../.env').apiKey;

function Repos() {}

Repos.prototype.getRepos = function(){
  // $.get('https://api.github.com/users/daneden?access_token=' 
  //   + apiKey).then(function(response){
  //       coonsole.log(response);
  //   }).fail(function(error){
  //       console.log(error.responseJSON.message);
  //   });
    console.log('Are you ready to look-up')
};

exports.reposModule = Repos;