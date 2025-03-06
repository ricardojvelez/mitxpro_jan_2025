const characters = [
    {name: "Daenarys Targaryen", house: "Targaryen"},
    {name: "Jon Snow", house: "Stark"},
    {name: "Tyrion Lannister", house: "Lannister"}
];

const greetCharacter = (character) => {
    let potatoes = `Hello ${character.name} of house ${character.house}`;

    return potatoes;
}


export { characters, greetCharacter };