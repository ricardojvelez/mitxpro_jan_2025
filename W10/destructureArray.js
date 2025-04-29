const favouriteFoods = [ "Sushi", "Pizza", "Pasta", "Ice Cream" ];

//Without destructuring
const food1 = favouriteFoods[0];
const food2 = favouriteFoods[1];
const food3 = favouriteFoods[2];

//With destructuring
const [ first, second, ...remaining ] = favouriteFoods;

console.log(first); // Output: "Sushi"
console.log(second); // Output: "Pizza"
console.log(remaining); // Output: [ "Pasta", "Ice Cream" ]