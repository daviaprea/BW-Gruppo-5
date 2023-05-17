const endPoint = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';

let urlParams = new URLSearchParams(window.location.search);
let artist = urlParams.get('artistId');

fetch(endPoint + artist + '/' + 'top?limit=50')
.then(res => {
    if(res.ok){
        return res.json();
    }else {
        throw new Error();
    }
})
.then(artist => {
    console.log(artist);

    let bgImage = document.getElementById('artist-information') 
        bgImage.style.background = `linear-gradient(0deg, rgba(0,0,0,.8), rgba(0,0,0,.3)), url(${artist.data[0].contributors[0].picture_xl})`;
        bgImage.style.backgroundSize = 'cover';
        bgImage.style.backgroundPosition = 'center 20%';
        bgImage.style.position = 'relative';

    let nameArtist = document.getElementById('name-artist');
    nameArtist.innerHTML = `${artist.data[0].contributors[0].name}`;

    let popularSongs = document.querySelectorAll('#popular-songs>div');
    popularSongs.forEach((list, i) => { 

        /*let listener = document.getElementById('listeners');
        listener.innerHTML = `${artist.data[i].contributors[0].nb_fan}`;*/

        list.querySelector('img').src = artist.data[i].album.cover_small;
        list.querySelector('img').style.width = '30px'
        list.querySelector('h6').innerHTML = artist.data[i].title;

    })
})
.catch(err => {
    console.log(err);
})