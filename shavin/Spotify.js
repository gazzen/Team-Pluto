async function req(method,endpoint){
    var xhr = new XMLHttpRequest();
    xhr.open('')
}

class Spotify {
    constructor(_id, _secret){
        this.id = _id;
        this.secret = _secret;
    }

    track(trackid){
        
    }

    toString(){
        return `ID: ${this.id}, SECRET: ${this.secret}`
    };
}

function createSpotify(id, secret){
    var s = new Spotify(id, secret);
    return s;
}

module.exports = {
    createSpotify
};