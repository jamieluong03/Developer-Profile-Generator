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
        name: "colors"
    }]
)};


function init(data) {
    let user = data.name;
    let location = data.location;
    let gitProf = data.html_url;
    let userBlog = data.blog;
    let userBio = data.bio;
    let pubRepo = data.public_repos;
    let userFollowers = data.followers;
    let userFollowing = data.following;
    // put info in an object
    // return the object 
}




promptUser()
    .then(function({username, colors}){
        const queryURL = `https://api.github.com/users/${username}`;
        const starURL = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios
    .get(queryURL)
    .then(function({data}){
        //  init(data);
        console.log('got response', data.name)
         return axios.get(starURL)
    });


});
