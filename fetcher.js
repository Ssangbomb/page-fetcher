// const stdin = process.stdin;
const website = process.argv[2];
const file = process.argv[3];
const request = require('request');
const fs = require('fs');


request(website, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});


fs.writeFile(file, website, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});