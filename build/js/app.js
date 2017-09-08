(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4a3f4899863f14ea216eb8576f2090ef562f4d91";
},{}],2:[function(require,module,exports){
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
},{"./../.env":1}],3:[function(require,module,exports){
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
        currentReposObject.getRepos();

        // Debugger
        console.log(userInfo);

        // Display user information 
        $('#showUserInfo').text(userInfo);
    });
});
},{"./../js/lookup.js":2}]},{},[3]);
