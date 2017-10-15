var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var util = require("util");



var command = process.argv[2];



// Twitter --------------------------------------------------------------------
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
        console.log(`####################################################### `);

        console.log("Posted at: " + tweets[i].created_at);
        console.log("Tweet: " + tweets[i].text);
        console.log("");
      }

    });
};


// Spotify -----------------------------------------------------------------------
if (process.argv[4] === undefined || process.argv[4] === null) {
    var song = process.argv[3];
    console.log(song);    

} else if (process.argv[4] !== undefined || process.argv[4] !== null) {
    var song = process.argv[3] + ' ' + process.argv[4];
    console.log(song);
    
} else {
    console.log('Please enter a valid song');
    
}


var spotify = new Spotify(keys.spotifyKeys);

// Get Spotify songs function
function getSpotifySong(song) {
    if (song === undefined || song === null) {
        song = 'The Sign';
    } else {
        
    }

    spotify
    .search({ type: 'track', query: song, limit: 1 })
    .then(function(response) {


        // console.log(response);
        
        console.log(`#######################################################

        Song: ${song} 
        
        Artist: ${response.tracks.items[0].album.artists[0].name}
        
        Album: ${response.tracks.items[0].album.name}

        Preview URL: ${response.tracks.items[0].preview_url} `);
        


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
        util.log(`Getting tweets. . .`);  
        getTweets();

        break;

    case 'spotify-this-song':
        util.log('Getting song . . .')
        getSpotifySong(song);

        break;

    case 'omdbGetMovie':
        util.log('Getting movie . . .')

        break;

    case 'do-what-it-says':
        util.log('Getting text from random.txt . . .');
        
        break;

    default:
        util.log('Please enter a valid command');
        
        break;
}



