const fs = require("fs"),
convertFactory = require('electron-html-to');
 
const axios = require("axios");
const inquirer = require("inquirer");
var {generateHTML} = require("./generateHTML.js");


// console.log(generateHTML);
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

promptUser()
    .then(function({username, color}){
        const queryURL = `https://api.github.com/users/${username}`;
        // const starURL = `https://api.github.com/users/${username}/repos?per_page=100`;

        // let userInfo = await getUserInfo(queryURL);
        // let stars = await getStars(starURL);

    axios.get(queryURL)
    .then(({data}) => {
        // console.log(data);

        var conversion = convertFactory({
            converterPath: convertFactory.converters.PDF
          });

          let html = generateHTML({color, data})

          conversion({ html }, function(err, result) {
            if (err) {
              return console.error(err);
            }
           
            result.stream.pipe(fs.createWriteStream('profile.pdf'));
            conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
          });
        // axios.get(starURL)
        // .then(({stars}) => {
        //     // pass stars through a function herefunction getTotalStars(stars){
        //     for (i=0; i<stars.length-1; i++){
        //         let starred = stars.data[i].stargazers_count;
        //         starred += starred;
        //         console.log(starred);
        //     };
        //     return starred;
        // });            
            // let totalStarss = return value of function (getTotalValueOfStars(stars))
            // console.log(stars)
        
    //     .catch(function(err){
    //         console.log(err);
    //     });
    })
    // .catch(function(err){
    //     console.log(err);
    // })

});
