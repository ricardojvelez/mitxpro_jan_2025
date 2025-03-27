//Callback function
function callbackFunction() {
    console.log('Hello, I am a callback function!');
};

function greetCharacter(name, abstractFunctionName) {
    console.log(`Hello ${name}`);
    abstractFunctionName();
};

//Passing function as an argument
greetCharacter('John Cena', callbackFunction);
greetCharacter('John Doe', function() {console.log('Hello, I am a callback function!');});
greetCharacter('John Doe', () => console.log('Hello, I am a callback function!'));
