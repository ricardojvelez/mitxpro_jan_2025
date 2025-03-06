const singerOne = {
  name: "Adele",
  genre: "Pop",
};

const singerTwo = {
  name: "Drake",
  genre: "Hip hop",
};

const singerThree = {
  name: "Taylor Swift",
  genre: "Pop",
};

//Example for functions
function checkGenre(singerA, singerB) {
  if (singerA.genre === singerB.genre) {
    console.log(
      singerA.name + " and " + singerB.name + " have the same genre."
    );
  } else {
    console.log(
      singerA.name + " and " + singerB.name + " have different genres."
    );
  }
}
checkGenre(singerOne, singerTwo); // Output: Adele and Drake have different genres.
checkGenre(singerTwo, singerThree); // Output: Drake and Taylor Swift have the same genre.

// Example for arrow functions

// Traditional function expression
function add(a, b) {
  return a + b;
}

// Arrow function expression
const addTwo = (a, b) => a + b;

const singers = [singerOne, singerTwo, singerThree];

const onlyHipHopSingers = singers.filter(
  (singer) => singer.genre === "Hip hop"
);
console.log(onlyHipHopSingers); // Output: [ { name: 'Drake', genre: 'Hip hop' } ]

const onlyTheNameOfTheHipHopSingers = onlyHipHopSingers.map(
  (singer) => singer.name
);
console.log(onlyTheNameOfTheHipHopSingers); // Output: [ 'Drake' ]
