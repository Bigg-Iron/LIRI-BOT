var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: '99e04a250d784566a398e0638e5d2770',
 secret: 'dd9984c666ac4b139cd98c5d9c2bd8f7'
});

spotify
 .search({ type: 'track', query: 'The Sign', limit: 5 })
 .then(function(response) {
    //  How do I extract the correct data from the response? Like the artist, album, and song name? 
   console.log(response);

 })
 .catch(function(err) {
   console.log(err);
 });




 