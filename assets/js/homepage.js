fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",{
    headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyM2M3ODc3NTgzYzAwMTRkMmNjYmMiLCJpYXQiOjE2ODQxNTk2MDksImV4cCI6MTY4NTM2OTIwOX0.RK6RE8424MDCQbvs8u0gvKiPo4MrR6-ww1HYYA6TexE"
    }})

.then(res => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("errore fetch")
    }
})
.then(fetchObj => {
    console.log(fetchObj)
    let albumCards=document.querySelectorAll("#albumRow .colCentralPlaylistCard");
    albumCards.forEach((card, i)=>{
        card.querySelector("img").src=fetchObj.data[i].album.cover_medium;
        card.querySelector("h5 a").innerHTML=fetchObj.data[i].album.title;
        card.querySelector("h5 a").href=`album.html?albumId=${fetchObj.data[i].album.id}`;

        card.querySelector("p a").innerHTML=fetchObj.data[i].artist.name;
        card.querySelector("p a").href=`artist.html?artistId=${fetchObj.data[i].artist.id}`;
    });
})
.catch(err => {
    console.log(err)
})

let date = new Date();
let hours = date.getHours();
console.log(hours);
let title = document.getElementById('buonaseraTitle');

if(hours < 12) {
}else if(hours >= 12) {
    title.innerHTML = 'Buon pomeriggio';
}else if(hours >= 18) {
    title.innerHTML = 'Buonasera';
}