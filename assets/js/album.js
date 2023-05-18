const striveUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyM2M3ODc3NTgzYzAwMTRkMmNjYmMiLCJpYXQiOjE2ODQxNTk2MDksImV4cCI6MTY4NTM2OTIwOX0.RK6RE8424MDCQbvs8u0gvKiPo4MrR6-ww1HYYA6TexE";
let urlParams = new URLSearchParams(window.location.search);
let artistAlbum = urlParams.get("albumId");

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
        console.log(songs)
        let colCove = document.getElementById("colCove");
        colCove.innerHTML = `
                <div class="row flex-grow-1">
                <div class="col">
                <div class="card mb-3 p-2 text-light bg-transparent border-0" id="central-card">
                    <div class="row g-0">
                    <div class="col-md-3">
                        <img src="${songs.cover_medium}" class="img-fluid rounded-start shadow-lg" alt="Album cover">
                    </div>
                    <div class="col-md-8 text-white d-flex">
                        <div class="card-body align-self-end">
                        <h5 id="cardTitle" class="card-title fw-bold">${songs.type.toUpperCase()}</h5>
                        <p class="" id="introduction-title-card">${songs.title}</p>
                        <p class="card-text text-sm text-gray-700">${songs.artist.name} . ${songs.release_date} . ${songs.nb_tracks} songs, ${songs.duration} mins</p>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div>`

            let colSong = document.querySelector(".tracks");

            songs.tracks.data.forEach((el, i) => {
              let sec=String((el.duration%60)*60)
              colSong.innerHTML += `
                      <div class="track">
    
                        <div class="track__number">${i+1}</div>
                        
                        <div class="track__title fw-bold">${el.title}</div>
    
                        <div class="track__explicit">
    
                          <span class="label">${Math.floor(Math.random()*100_000_000)+10_000_000}</span>
    
                        </div>
                        <div class="controls">
                            <div>
                            <audio id="audio_${i}" src="${el.preview}" type="audio/mp3"></audio>
                            <button onclick="playSong(${i})">Play</button> 
                            </div>
                            </div>
                            <div class="track__plays">${Math.trunc(el.duration/60)}:${sec.slice(0,2)}</div>
                        
                      </div>
                `
            
            });
            function playSong(index) {
                const audio = document.getElementById(`audio_${index}`);
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            }
          
    })
    .catch((err) => {
      console.log(err);
    })
}


getAlbum();


