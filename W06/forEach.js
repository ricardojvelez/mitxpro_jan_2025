let characters = [
    { name: "Daenarys Targaryen", house: "Targaryen" },
    { name: "Jon Snow", house: "Stark" },
    { name: "Tyrion Lannister", house: "Lannister" }
];

function createSentence(character) {
    return `Hello ${character.name} of house ${character.house}`;
};

function loopThroughCharacters() {
    for (let i = 0; i < characters.length; i++) {
        console.log(createSentence(characters[i]));
    }
};

function loopThroughCharactersAlternative() {
    characters.forEach((character) => {
        console.log(createSentence(character));
    });
};

//loopThroughCharacters();

loopThroughCharactersAlternative();