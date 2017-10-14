// Twitter API
var Twitter = require('twitter');

var twitterKeys = {
    consumer_key: 'MzDadiSllWfoi9f7HJbtL8ZVr',
    consumer_secret: 'eUUVc7dd6pwV8CWG2EXMT1dZeQnWy8WRtZWHljqHfvj0Xu19SY',
    access_token_key: '916058092743229440-IzWPP2tIy1loN9HGGSI1YZ5CM3SczDG',
    access_token_secret: 'DOevFTH1HQVnKXMEUH1BNQJAqc1hkHunjiUxlTSHCRLC0'
};


// Spotify web API
var SpotifyApi = require('node-spotify-api');

var spotifyKeys = {
  id: '99e04a250d784566a398e0638e5d2770',
  secret: 'dd9984c666ac4b139cd98c5d9c2bd8f7'

};


// OMDB API




// Export keys
module.exports = {
  // Twitter keys
  twitterKeys: twitterKeys,
  // Spotify keys:
  spotifyKeys: spotifyKeys
  // OMDB keys:
  // API key: 40e9cece

};

