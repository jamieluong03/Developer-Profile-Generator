const questions = [
    {
        type: "list",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"],
        name: "data",
    }
];

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// var generateHTML = require("./generateHTML.js")

inquirer
    .prompt({
        message: "Enter your GitHub username",
        name: "username",
    })
    .then(function({username}){
        const queryURL = `https://api.github.com/users/${username}`;

    axios
    .get(queryURL)
    .then(function(response){
        console.log(response.data)
        let profImg = response.data.avatar_url;
        let user = response.data.login;
        let location = response.data.location;
        let gitProf = response.data.html_url;
        let userBlog = response.data.blog;
        let userBio = response.data.bio;
        let pubRepo = response.data.public_repos;
        let userFollowers = response.data.followers;
        let userFollowing = response.data.following;
        let gitStars = response.data.starred_url;

    })
})
    

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
