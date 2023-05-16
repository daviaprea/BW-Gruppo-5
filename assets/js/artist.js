const endPoint = 'https://striveschool-api.herokuapp.com/api/deezer/artist/412';

fetch(endPoint)
.then(res => {
    if(res.ok){
        return res.json();
    }else {
        throw new Error();
    }
})
.then(artist => {
    console.log(artist);

        let bgImage = document.getElementById('artist-information');
        bgImage.style.background = `linear-gradient(0deg, rgba(0,0,0,.8), rgba(0,0,0,.3)), url(${artist.picture_xl})`;
        bgImage.style.backgroundSize = 'cover';
        bgImage.style.backgroundPosition = 'center 20%';
        bgImage.style.position = 'relative';

        let nameArtist = document.getElementById('name-artist');
        nameArtist.innerHTML = `${artist.name}`;

        let listener = document.getElementById('listeners');
        listener.innerHTML = `${artist.nb_fan}`;
})
.catch(err => {
    console.log(err);
})

// let getData=function(token){
//     fetch("https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B%22",{
//         headers:{Authorization: "Bearer "+token}
//     })
//     .then(res=>{
//         if(res.ok) return res.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })
// }

// let getToken=function(){
//     let clientId="8f908b77c539467dbf8803aaf9feef82";
//     let clientSecret="6663aaef11a84b639e7e47c947cce76f";
//     fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             "Authorization": "Basic "+btoa(clientId+":"+clientSecret)
//         },
//         body: "grant_type=client_credentials"
//     })
//     .then(res=>{
//         if(res.ok) return res.json();
//     })
//     .then(data=>{
//         getData(data.access_token);
//     });
// }();