const musicArray = ["Rock", "Techno", "HipHop", "R&B"];

console.log(typeof musicArray); // Output: object
console.log(musicArray[0]); // Output: Rock
console.log(musicArray.length); // Output: 4

musicArray.push("Pop"); // Adds an element to the end of the array
console.log(musicArray.length); // Output: 5
console.log(musicArray); // Output: ['Rock', 'Techno', 'HipHop', 'R&B', 'Pop']
