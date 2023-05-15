const striveUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/75621062";
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyM2M3ODc3NTgzYzAwMTRkMmNjYmMiLCJpYXQiOjE2ODQxNTk2MDksImV4cCI6MTY4NTM2OTIwOX0.RK6RE8424MDCQbvs8u0gvKiPo4MrR6-ww1HYYA6TexE";
let urlParams = new URLSearchParams(window.location.search);
let artistAlbum = urlParams.get("artistAlbum");

const getAlbum = function () {
    fetch(striveUrl + artistAlbum, {
        headers: {
            authorization: key,
        },
        
    })

    .then((res) => {
        if (res.ok) {
            
            return res.json();
        } else {
            throw new Error('errore nel caricamento dell Album')
        }
    })

    .then((songs) => {
        let colSong = document.getElementById("colSong");
        colSong.innerHTML = `
        <div class="flex">
            <img class="mr-6" src="${songs.cover}">
            <div class="flex flex-col justify-center">
            <h4 class="mt-0 mb-2 text-gray-500 text-xs">Album</h4>
            <h1 class="mt-0 mb-2 text-white ">${songs.title}</h1>
            <p class="text-gray-600 text-sm">${songs.name}  - 50 songs, ${songs.duration}</p>
        </div>
        </div>
        <div>
            <div class="flex text-gray-600">
            <div class="p-2 w-8 flex-shrink-0"></div>
            <div class="p-2 w-8 flex-shrink-0"></div>
            <div class="p-2 w-full">Titolo</div>
            <div class="p-2 w-full">RIPRODUZIONI</div>
            <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
        </div>
      
        <div class="flex border-b border-gray-800 hover:bg-gray-800">
            <div class="p-3 w-8 flex-shrink-0">  </div>
            <div class="p-3 w-full">${songs.title}</div>
            <div class="p-3 w-full">${songs.name}</div>
            <div class="p-3 w-full">${songs.fans}</div>
            <div class="p-3 w-12 flex-shrink-0 text-right">${songs.duration}</div>
        </div>
         `
        console.log(songs)
    })

    .catch((err) => {
        console.log(err);
    });
}

getAlbum();
