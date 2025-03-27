const unsortedNumberArray =  [1, 22, 11, 49, 7, 404, 9];

//Ascending order
const sortedNumberArray = unsortedNumberArray.sort((a, b) => a - b);
console.log("Asc:", sortedNumberArray);
// Output: [ 1, 7, 9, 11, 22, 49, 404 ]

//Descending order
const sortedNumberArrayDesc = unsortedNumberArray.sort((a, b) => b - a);
console.log("Desc:", sortedNumberArrayDesc);
// Output: [ 404, 49, 22, 11, 9, 7, 1 ]

//Without specific compare function
const sortedNumberArrayDefault = unsortedNumberArray.sort();
console.log("Default:", sortedNumberArrayDefault);