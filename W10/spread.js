const oddArr = [1, 3, 5, 7, 9];
const evenArr = [2, 4, 6, 8, 10];

const combineArrays = [...oddArr, ...evenArr];
//console.log(combineArrays); // Output: [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

const combineArrayWithoutSpread = [oddArr, evenArr];
//console.log(combineArrayWithoutSpread); // Output: [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]


const person = {
    name:"Ricardo",
    city: "Lisbon"
}

const personInfo = {
    ...person,
    job: "Software Engineer",
}

console.log(personInfo); // Output: { name: "Ricardo", city: "Lisbon", job: "Software Engineer" }
