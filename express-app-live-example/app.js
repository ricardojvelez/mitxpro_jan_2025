const express = require('express'); //Import Express
const app = express(); //Create express app
const port = 3000; //Set port

// Add middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Collection of characters to simulate a database
const characters = [
    {id: 1, name: 'John Snow', house: 'Stark'},
    {id: 2, name: 'Daenerys Targaryen', house: 'Targaryen'},
    {id: 3, name: 'Arya Stark', house: 'Stark'},
    {id: 4, name: 'Sansa Stark', house: 'Stark'},
    {id: 5, name: 'Cersei Lannister', house: 'Lannister'},
    {id: 6, name: 'Jaime Lannister', house: 'Lannister'},
]

//Basic route
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Express API!' });
});

app.get('/characters', (req, res) => {
    res.send(characters);
});

app.get('/characters/:id', (req, res) => {
    const idFromParameters = req.params.id; // Get the id from the request parameters
    console.log("params: ", req.params); // Log the request parameters
    console.log("Trying to get character with id: ", idFromParameters); // Log the id from the parameters
    const character = characters.find(currentCharacter => currentCharacter.id === parseInt(idFromParameters)); // Find the character with the id from the parameters
    console.log("Character found: ", character); // Log the character found

    if(!character) {
        res.status(404).send("Character not found"); // Send a 404 error if the character is not found
    } else {
        res.send(character); // Send the character as a response
    }
});

app.post('/characters', (req, res) => {
    const newCharacter = req.body; // Get the new character from the request body
    console.log("Step 1:", newCharacter)


    // Automatically generate the next ID
    const nextId = Math.max(...characters.map(char => char.id)) + 1; //Find the latest id in the collection
    newCharacter.id = nextId; //assign new id
    console.log("Step 2:", newCharacter)



    characters.push(newCharacter) // Add the new character to the characters array
    res.send(newCharacter) // Send the new character as a response
})

app.put('/characters/:id', (req, res) => {
    const idToLookFor = req.params.id; //undefined
    const characterToUpdate = characters.find(currentCharacter => currentCharacter.id === parseInt(idToLookFor));

    if(!characterToUpdate) {
        res.status(404).send("Character not found!!!!"); // Send a 404 error if the character is not found
    } else {
        characterToUpdate.name = req.body.name;
        characterToUpdate.house = req.body.house;
        res.send(characterToUpdate)
    }
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


