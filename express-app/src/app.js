const express = require('express'); // Import express
const app = express(); // Create express app
const port = process.env.PORT || 3000; // Set port



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 

app.post('/characters', (req, res) => {
  const newCharacter = req.body; // Get the new character from the request body
  console.log("newCharacter: ", newCharacter); // Log the new character

  // Automatically generate the next ID
  const nextId = Math.max(...characters.map(char => char.id)) + 1;
  newCharacter.id = nextId;

  characters.push(newCharacter); // Add the new character to the characters array

  res.send(newCharacter); // Send the new character as a response
});

app.put('/characters/:id', (req, res) => {
  const characterToUpdate = characters.find(currentCharacter => currentCharacter.id === parseInt(req.params.id));

  if(!characterToUpdate) {
      res.status(404).send("Character not found");
  } else {
      // Update the character properties one by one
      characterToUpdate.name = req.body.name;
      characterToUpdate.House = req.body.House;

      // Keep the original ID (don't let it be changed)
      characterToUpdate.id = parseInt(req.params.id);
      
      res.send(characterToUpdate);
  }
});



