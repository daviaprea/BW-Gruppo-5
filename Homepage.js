fetch("https://striveschool-api.herokuapp.com/api/deezer/album")
.then(res=>{
    if(res.ok) return res.json();
})
.then(data=> console.log(data))