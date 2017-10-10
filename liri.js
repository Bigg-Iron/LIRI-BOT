var Keys = require("./keys.js");
var Twitter = require("twitter");
var Request = require("request");
var Fs = require("fs");
var Util = require("util");


var twitterClient = new Twitter(Keys.twitterKeys);

var command = process.argv[2];


function getTweets() {
  twitterClient.get(
    'statuses/user_timeline', { screen_name: "stellerzJay", count: 3 },
    function(error, tweets, response) {
      if (error) {
      	console.log('Something broke...');
        console.log(error);
        return;
      }

      for (var i = 0; i < tweets.length; i++) {
        console.log("Posted at: " + tweets[i].created_at);
        console.log("Tweet text: " + tweets[i].text);
        console.log("");
      }

    });
};





if (command === "my-tweets") {
    util.log(`Getting tweets...`);
    getTweets();
    
} else {
    console.log(`That's not a valid command...`);
       
}







// switch (command === "my-tweets") {
//     case getTweets:
//         console.log('Getting tweets...');
        
//         getTweets();
//         break;

    // case spotifyGetSong:
    //     console.log('Getting songs...')

    //     break;

    // case omdbGetMovie:
    //     console.log('Getting movie...')

    //     break;


//     default:
//         console.log('Something broke...');
        
//         break;
// }





