fetch("https://striveschool-api.herokuapp.com/api/deezer/",{
    headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyM2M3ODc3NTgzYzAwMTRkMmNjYmMiLCJpYXQiOjE2ODQxNTk2MDksImV4cCI6MTY4NTM2OTIwOX0.RK6RE8424MDCQbvs8u0gvKiPo4MrR6-ww1HYYA6TexE"
    }})

.then(res => {
    if (res.ok) {
        console.log(res)
        return res.json()
    } else {
        throw new Error("errore fetch")
    }
})
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})
