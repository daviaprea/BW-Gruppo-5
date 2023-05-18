let feed=function(query)
{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+query)
    .then(res=>{
        if(res.ok) return res.json();
    })
    .then(queryData=>{
        console.log(queryData);
        document.querySelector(".artist-side-search").innerHTML=
        `
            <img class="rounded-circle align-self-start artist-search-img" src="${queryData.data[0].artist.picture}" alt="">
            <h3 class="text-white fw-bold">${queryData.data[0].artist.name}</h3>
            <span class="text-white fw-bold">${queryData.data[0].artist.type}</span>
        `;

        document.querySelector(".song-side-search").innerHTML="";
        for(let i=0; i<4; i++)
        {
            document.querySelector(".song-side-search").innerHTML+=
            `
                <div class="d-flex justify-content-between align-items-center my-2">
                    <div class="d-flex gap-2 align-items-center">
                        <img src="${queryData.data[i].album.cover_small}" alt="">
                        <div>
                            <p class="m-0 text-white">${queryData.data[i].title}</p>
                            <p class="m-0 text-white-50">${queryData.data[i].artist.name}</p>
                        </div>
                    </div>

                    <div>
                        <i class="fa-regular fa-heart text-white-50"></i>
                        <span class="text-white-50">${queryData.data[i].duration}</span>
                    </div>
                </div>
            `;
        }
    })
}

let searchInput=document.getElementById("search");
searchInput.addEventListener("input", ()=>{
    feed(searchInput.value);
})