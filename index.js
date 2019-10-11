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

        // let userInfo = await getUserInfo(queryURL);
        // let stars = await getStars(starURL);


    axios
    .get(queryURL)
    .then(function({data}){
        //  init(data);
    });

    axios
    .get(starURL)
    .then(function(response){
        for (i=0; i<response.data.length-1; i++){
            let starred = response.data[i].stargazers_count;
            starred += starred;
        }
    })
    .then(function({colors}){
        return generateHTML(colors);

    })
    .catch(function(err){
        console.log(err);
    })

});




function getUserInfo(queryURL) {
    // return responseObject
};

function getStars(queryURL) {
    // return responseObject
}
