const https = require('https');


async function call(endpoint,headers){
    var res = await fetch(endpoint,{
        headers
    }).then(r => r.json());

    return res;
}

class Spotify {
    constructor(_id, _secret){
        this.client_id = _id;
        this.secret = _secret;
        this.authorize();
    }



    setAuth(method){
        switch(method){
            case "client_credentials":
            default:
                this.authFlow = "client_credentials";
            break;
        }
    }

    async authorize(){
        var res = await fetch(`https://accounts.spotify.com/api/token?grant_type=${this.authFlow}`,{
            method:'post',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization':'Basic ' + (new Buffer(this.client_id + ':' + this.secret).toString('base64'))
            },
        }).then(d => d.json());

        this.token = res.access_token;
        this.headers = {
            'Authorization':'Bearer '+this.token,
            'Content-Type':'applciation/json'
        }
        return true;
    }

    // @@@ ARTISTS @@@

    async artist(artistid){
        var res = await call("https://api.spotify.com/v1/artists/" + artistid, this.headers);
        return res;
    }

    async artists(artists=[]){
        if(!artists.length) return null;
        if(artists.length==1) return this.artist(artists[0]);

        var query = artists.reduce((acc,cv) => acc+","+cv);
        var res = await call("https://api.spotify.com/v1/artists?ids=" + query, this.headers);
        return res;
    }

    // @@@ TRACKS @@@

    async track(trackid){
        var res = await call("https://api.spotify.com/v1/tracks/" + trackid, this.headers);
        return res;
    }

    async tracks(tracks=[]){
        if(!tracks.length) return null;
        if(tracks.length==1) return this.track(tracks[0]);

        var query = tracks.reduce((acc,cv) => acc+","+cv);
        var res = await call("https://api.spotify.com/v1/tracks?ids=" + query, this.headers);
        return res;
    }

    // @@@ PLAYLISTS @@@

    async playlist(playlistid){
        var res = await call("https://api.spotify.com/v1/playlists/" + playlistid, this.headers);
        return res;
    }

    toString(){
        return `ID: ${this.client_id}, SECRET: ${this.secret}`
    };
}

function createSpotify(id, secret){
    var s = new Spotify(id, secret);
    return s;
}

module.exports = {
    createSpotify
};