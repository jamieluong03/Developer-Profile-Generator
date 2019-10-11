const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
var generateHTML = require("./generateHTML.js")


function promptUser(){
    return inquirer.prompt([
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"],
        name: "data.colors"
    }]
)};

function writeToFile(fileName, data) {
 
}

function init() {
}
init();


promptUser()
    .then(function({username}){
        const queryURL = `https://api.github.com/users/${username}`;
    
    axios
    .get(queryURL)
    .then(function(response){
        let user = response.data.login;
        let location = response.data.location;
        let gitProf = response.data.html_url;
        let userBlog = response.data.blog;
        let userBio = response.data.bio;
        let pubRepo = response.data.public_repos;
        let userFollowers = response.data.followers;
        let userFollowing = response.data.following;
        let gitStars = response.data.starred_url;
        console.log(profImg, user, location, gitProf, userBlog, userBio, pubRepo, userFollowers, userFollowing, gitStars)
    });
    })
    .then(function({data.colors}){
        return generateHTML(data.color);

    })
    .catch(function(err){
        console.log(err);
    })



