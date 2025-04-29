const person = {
    firstName: "John",
    lastName: "Cena",
    work: "WWE",
};

//Without destructuring
const traitOne = person.firstName; // Output: "John"
const traitTwo = person.work; // Output: "WWE"

//With destructuring
const { firstName, lastName, work } = person;

console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Cena"
console.log(work); // Output: "WWE"
    