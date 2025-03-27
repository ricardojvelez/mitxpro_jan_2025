//Example 1 of a callback function
function callbackFunction() {
  console.log("Hello from the callback function!");
}

function greet(name, fn) {
  console.log(`Hello, ${name}!`);
  fn();
}

greet("Rick Sanchez", callbackFunction);

// Example 2 of a callback function with setTimeout
function example() {
  console.log("200")
    
  setTimeout(() => {
    console.log("dog")
  }, 1000);
  
  console.log("100")
}

example()

// Usage of the fetchRugbyPlayerData function with a callback
fetchRugbyPlayerData((playerData) => {
  console.log("Rugby player data received:", playerData);
});

// Example 3 of a callback function simulating asynchronous code
function fetchData(callbackFunction) {
  setTimeout(function () {
    callbackFunction("abcdefg");
  }, 2000);
}

function someFunctionAbc(text) {
  console.log("Processing:", text);
}

console.log("Start of script");
fetchData(someFunctionAbc);
console.log("End of script");
