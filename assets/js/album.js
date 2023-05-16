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
        // colSong.innerHTML = `
        //     <div class="bg-black text-gray-300 min-h-screen p-10">
        //         <div class="flex">
        //             <img class="mr-4 rounded" src="${songs.cover}"/>
        //             <div class="flex flex-col justify-center">
        //                 <h4 class=" uppercase mt-0 text-gray-700 text-sm font-semibold">${songs.type}</h4>
        //                 <h1 class="tracking-wider mb-3 font-extrabold">${songs.title}</h1>
        //                 <p class="text-sm text-gray-700">${songs.artist.name} . ${songs.artist.data} . ${songs.nb_tracks} songs, ${songs.duration} mins</p>
        //             </div>
        //         </div>

        //         <!-- play -->
        //         <div class="mt-6 flex justify-between">
        //         <div class="flex items-center">
        //             <button class="mr-3 p-3 btn btn-success text-white rounded-full w-32">Play</button>
        //             <button class="border border-white rounded-full p-2 mr-3"><i class="bi bi-heart"></i></button>
        //             <button class="border border-white rounded-full p-2 mr-3"><i class="bi bi-arrow-down-circle"></i></button>
        //             <button class="border rounded-full w-10 h-10 mr-3">...</button>
        //         </div>
               
        //         </div>
        //         <!-- album list -->
        //         <div class="mt-8">
        //             <div class="flex text-gray-600 font-bold">
        //             <a class="p-2 w-full">#  TITOLO</a>
        //             <a class="p-2 w-full">ARTISTA</a>
        //             <a class="p-2 w-full">ALBUM</a>
        //             <a class="p-2 w-full">RIPRODUZIONI</a>
        //             <a class="p-2 w-8 flex-shrink-0"><i class="fa-regular fa-clock"></i></a>
        //         </div>
                    
        //         <div class="flex text-sm text-gray-400 border-b border-gray-800">
        //             <a class="p-2 w-8 flex-shrink-0">1</a>
        //             <a class="p-2 w-full">${songs.title}</a>
        //             <a class="p-2 w-full">${songs.name}</a>
        //             <a class="p-2 w-full">${songs.title}</a>
        //             <a class="p-2 w-8 flex-shrink-0">5:46</a>
        //         </div> 
        //  `
        console.log(songs)
    })

    .catch((err) => {
        console.log(err);
    });
}

getAlbum();



{/* <div class="flex">
        //     <img class="mr-6" src="${songs.cover}">
        //     <div class="flex flex-col justify-center">
        //     <h4 class="mt-0 mb-2 text-gray-500 text-xs">Album</h4>
        //     <h1 class="mt-0 mb-2 text-white ">${songs.title}</h1>
        //     <p class="text-gray-600 text-sm">${songs.name}  - 50 songs, ${songs.duration}</p>
        // </div>
        
        // <div class="flex text-gray-600">
        //     <div class="flex text-gray-600">
        //     <div class="p-2 w-8 flex-shrink-0"></div>
        //     <div class="p-2 w-8 flex-shrink-0"></div>
        //     <div class="p-2 w-full">Titolo</div>
        //     <div class="p-2 w-full">RIPRODUZIONI</div>
        //     <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
        // </div>
      
        // <div class="flex border-b border-gray-800 hover:bg-gray-800">
        //     <div class="p-3 w-8 flex-shrink-0">  </div>
        //     <div class="p-3 w-full">${songs.title}</div>
        //     <div class="p-3 w-full">${songs.name}</div>
        //     <div class="p-3 w-full">${songs.fans}</div>
        //     <div class="p-3 w-12 flex-shrink-0 text-right">${songs.duration}</div>
        // </div> */}