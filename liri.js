var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var util = require("util");



var command = process.argv[2];





var twitter = new Twitter(keys.twitterKeys);

// Get Tweet function
function getTweets() {
  twitter.get(
    'statuses/user_timeline', { screen_name: "stellerzJay", count: 5 },
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



var spotify = new Spotify(keys.spotifyKeys);

// Get Spotify songs function
function getSpotifySong(title) {
    if (title === undefined || title === null) {
        title = 'The Sign';
    }

    spotify
    .search({ type: 'track', query: title })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    });
};




// Get movies from OMDB API function 
function getMovie() {
    

}

// Get text from random.txt and pass it as a command to liri, function
function doWhatItSays() {


}



switch (command) {
    case 'my-tweets':
        util.log(`Getting tweets...`);  
        getTweets();

        break;

    case 'spotify-this-song':
        console.log('Getting songs...')
        getSpotifySong();

        break;

    case 'omdbGetMovie':
        console.log('Getting movie...')

        break;

    case 'do-what-it-says':
        console.log('Getting text from random.txt ...');
        
        break;

    default:
        console.log('Please enter a valid command');
        
        break;
}





