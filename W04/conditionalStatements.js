// Example for conditional statements (if, else if, else)
if (singer.genre === "R&B") {
  console.log(singer.name + " is known for his work in the R&B genre.");
} else if (singer.genre === "Hip hop") {
  console.log(singer.name + " is known for his work in the Hip hop genre.");
} else {
  console.log(singer.name + " explores other genres as well.");
}

//Example for switch statement
switch (singer.genre) {
  case "R&B":
    console.log(singer.name + " is known for his work in the R&B genre.");
    break;
  case "Hip hop":
    console.log(singer.name + " is known for his work in the Hip hop genre.");
    break;

  default:
    console.log(singer.name + " explores other genres as well.");
    break;
}
