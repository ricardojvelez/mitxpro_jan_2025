// Example using for loop
const musicArray = ["Rock", "Techno", "HipHop", "R&B"];
for (let i = 0; i < musicArray.length; i++) {
  console.log(musicArray[i]);
}

// Example using while loop

let j = 0;
while (j < 2) {
  console.log(musicArray[j]);
  j++;
}

// Example using for...in loop
for (index in musicArray) {
  console.log(musicArray[index]);
}
