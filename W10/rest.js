const myFavouriteShows = [
    "Peaky Blinders",
    "Game of Thrones",  
    "Friends",
    "La Casa de Papel"
]

console.log("Log 1:", myFavouriteShows)
const [something, ...rest] = myFavouriteShows
console.log("Log 2:",rest) // [ 'Game of Thrones', 'Friends', 'La Casa de Papel' ]

const [show1, abc, ...restOfShows] = myFavouriteShows
//console.log(show1) // Peaky Blinders
//console.log(abc) // Game of Thrones
//console.log(restOfShows) // [ 'Friends', 'La Casa de Papel' ]