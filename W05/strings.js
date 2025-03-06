let player1 = "Cristiano Ronaldo";
let player2 = "Lionel Messi";

player1.charAt(0); // Output: "C"
player2.charAt(0); // Output: "L"

player1.length; // Output: 17
player2.length; // Output: 11

player1.toUpperCase(); // Output: "CRISTIANO RONALDO"
player2.toLowerCase(); // Output: "lionel messi"

player1.includes("Ronaldo"); // Output: true
player2.includes("ronaldo"); // Output: false

player1.slice(0, 9); // Output: "Cristiano"
player2.slice(0, 5); // Output: "Lione"

player1 = player1.replace("Ronaldo", "CR7");
player2 = player2.replace("Messi", "Leo");

console.log(player1)

//console.log(`My favourite soccer players are ${player1} and ${player2}.`);
