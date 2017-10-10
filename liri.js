var Keys = require("./keys.js");
var Twitter = require("twitter");
var Request = require("request");
var Fs = require("fs");


var twitterClient = new Twitter(Keys.twitterKeys);


// print process.argv
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
// var command = process.argv[2];
// var title = process.argv[3];


function getTweets() {
  twitterClient.get(
    'statuses/user_timeline', { screen_name: "stellerzJay", count: 2 },
    function(error, tweets, response) {
      if (error) {
      	console.log('Something broke...');
        console.log(error);
        return;
      }

      for (var i = 0; i < tweets.length; i++) {
        console.log("Tweet: " + (i + 1) + " ");
        console.log("Posted at: " + tweets[i].created_at);
        console.log("Tweet text: " + tweets[i].text);
        console.log("");
      }

    });
};

getTweets();



