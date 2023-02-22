const {createSpotify} = require('./Spotify.js');
var spotify = createSpotify('0aa3cbf925b448228e34837ab5d53131','2331f82245fb43ae9a05dd57477fd390');
spotify.setAuth("client_credentials")

async function getTrack(){
    await spotify.authorize();
    var track = await spotify.track("3zb9k8UUuKz5tYmKJvNqQA");
    var tracks = await spotify.tracks(["7ouMYWpwJ422jRcDASZB7P","4VqPOruhp5EdPBeR92t6lQ","2takcwOaAZWiXQijPHIx7B"]);
    var artist = await spotify.artist("0TnOYISbd1XYRBk9myaseg");
    var artists = await spotify.artists(["2CIMQHirSU0MQqyYHq0eOx","57dN52uHvrHOxijzpIgu3E","1vCWHaC5f2uS3yhpwWbIA6"]);
    console.log(track);
}

getTrack();

// tracks
// get track info
// playlists
// get playlist info

// podcasts
// get podcast info

// user