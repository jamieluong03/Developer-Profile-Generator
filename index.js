const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
var {generateHTML} = require("./generateHTML.js");
console.log(generateHTML);
// generateHTML()

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
        name: "color"
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
    let data = {
        user,
        location,
        gitProf, 
        userBlog,
        userBio,
        pubRepo,
        userFollowers,
        userFollowing
    };

    // return the object 
    return data;
}

function getTotalStars(stars){
    for (i=0; i<stars.length-1; i++){
     let starred = stars.data[i].stargazers_count;
     starred += starred;
    }
    return starred
}


promptUser()
    .then(function({username, color}){
        const queryURL = `https://api.github.com/users/${username}`;
        const starURL = `https://api.github.com/users/${username}/repos?per_page=100`;

        // let userInfo = await getUserInfo(queryURL);
        // let stars = await getStars(starURL);

    axios.get(queryURL)
    .then(({data}) => {
        console.log(data);
        axios.get(starURL)
        .then({stars} => {
            // pass stars through a function here 
            return getTotalStars(stars);

            
            // let totalStarts = return value of function (getTotalValueOfStars(stars))
            // console.log(stars)
            return generateHTML({stars, color, data})
        
        .catch(function(err){
            console.log(err);
        })
    })
    .catch(function(err){
        console.log(err);
    })

});