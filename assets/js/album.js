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
        let colCove = document.getElementById("colCove");
        colCove.innerHTML = `
                <div class="row">
                <div class="col">
                <div class="card mb-3 p-2 text-light" id="central-card">
                    <div class="row g-0">
                    <div class="col-md-3 my-4">
                        <img src="${songs.cover}" class="img-fluid rounded-start" alt="Album cover">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 id="cardTitle" class="card-title">${songs.type}</h5>
                        <p class="card-title" id="introduction-title-card">${songs.title} </p>
                        <p class="card-text text-sm text-gray-700">${songs.artist.name} . ${songs.artist.data} . ${songs.nb_tracks} songs, ${songs.duration} mins</p>
                        <div class="buttonContainerIntroduction mt-5">
                        <button type="button" class="btn mx-2" id="introButtonPlay">Play</button>
                        <button type="button" class="btn btn-outline-dark mx-2" id="introButtonSalva">Salva</button>
                        <i class="fas fa-ellipsis-h mx-2"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
            

            `  
        console.log(songs)
    })

    .then((songs) => {
        let colSong = document.getElementById("colSong");
        colSong.innerHTML = `
                <div class="row">
                    <div class="col">
                    <div class="album__tracks">
                            
                    <div class="tracks">
                    
                    <div class="tracks__heading">
                    
                        <div class="tracks__heading__number">#</div>
                        
                        <div class="tracks__heading__title">Song</div>
                        
                        <div class="tracks__heading__length">
                        
                        <i class="ion-ios-stopwatch-outline"></i>
                        
                        </div>
                        
                        <div class="tracks__heading__popularity">
                        
                        <i class="ion-thumbsup"></i>
                        
                        </div>
                        
                    </div>

                    <div class="track">

                        <div class="track__number">1</div>

                        <div class="track__added">

                        <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title">Intro</div>

                        <div class="track__explicit">

                        <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">1:11</div>
                        
                        <div class="track__popularity">
                        
                        <i class="ion-arrow-graph-up-right"></i>
                        
                        </div>

                    </div>
                    </div>
                </div>
            `  
        console.log(songs)
    })
    .catch((err) => {
        console.log(err);
    });
}

getAlbum();

{/* <div class="bg-black text-gray-300 min-h-screen p-10">
            //     <div class="flex">
            //         <img class="mr-4 rounded" src="${songs.cover}"/>
            //         <div class="flex flex-col justify-center">
            //             <h4 class=" uppercase mt-0 text-gray-700 text-sm font-semibold">${songs.type}</h4>
            //             <h1 class="tracking-wider mb-3 font-extrabold">${songs.title}</h1>
            //             <p class="text-sm text-gray-700">${songs.artist.name} . ${songs.artist.data} . ${songs.nb_tracks} songs, ${songs.duration} mins</p>
            //         </div>
            //     </div>

            //     <!-- play -->
            //     <div class="mt-6 flex justify-between">
            //     <div class="flex items-center">
            //         <button class="mr-3 p-3 btn btn-success text-white rounded-full w-32">Play</button>
            //         <button class="border border-white rounded-full p-2 mr-3"><i class="bi bi-heart"></i></button>
            //         <button class="border border-white rounded-full p-2 mr-3"><i class="bi bi-arrow-down-circle"></i></button>
            //         <button class="border rounded-full w-10 h-10 mr-3">...</button>
            //     </div>
               
            //     </div>
            //     <!-- album list -->
            //     <div class="mt-8">
            //         <div class="flex text-gray-600 font-bold">
            //         <a class="p-2 w-full">#  TITOLO</a>
            //         <a class="p-2 w-full">ARTISTA</a>
            //         <a class="p-2 w-full">ALBUM</a>
            //         <a class="p-2 w-full">RIPRODUZIONI</a>
            //         <a class="p-2 w-8 flex-shrink-0"><i class="fa-regular fa-clock"></i></a>
            //     </div>
                    
            //     <div class="flex text-sm text-gray-400 border-b border-gray-800">
            //         <a class="p-2 w-8 flex-shrink-0">1</a>
            //         <a class="p-2 w-full">${songs.title}</a>
            //         <a class="p-2 w-full">${songs.name}</a>
            //         <a class="p-2 w-full">${songs.title}</a>
            //         <a class="p-2 w-8 flex-shrink-0">5:46</a>
            //     </div>  */}

