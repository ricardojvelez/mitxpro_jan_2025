const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Express API!' });
});

const characters = [
    {id: 1, name: 'John Snow', House: 'Stark'},
    {id: 2, name: 'Daenerys Targaryen', House: 'Targaryen'},
    {id: 3, name: 'Arya Stark', House: 'Stark'},
    {id: 4, name: 'Sansa Stark', House: 'Stark'},
    {id: 5, name: 'Cersei Lannister', House: 'Lannister'},
    {id: 6, name: 'Jaime Lannister', House: 'Lannister'},
]

app.get('/characters', (req, res) => {
    res.send(characters);
});

app.get('/characters/:id', (req, res) => {
    const idFromParameters = req.params.id;
    const character = characters.find(abc => abc.id === parseInt(idFromParameters));
    res.send(character);
});

module.exports = app;