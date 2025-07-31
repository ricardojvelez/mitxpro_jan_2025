import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component that demonstrates using Axios to fetch a list of Pokemon
export const AxiosComponent = () => {
  
  const [pokemonList, setPokemonList] = useState([]); // State to store the list of Pokemon
  const [isLoading, setIsLoading] = useState(true); // Loading state while fetching data
  const [error, setError] = useState(null); // State to store any errors that occur

  // Fetch data when component mounts
  useEffect(() => {
    // Async function to fetch Pokemon data using Axios
    const fetchData = async () => {
      try {
        // Make GET request to Pokemon API using Axios
        // Axios automatically converts response to JSON
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        
        // Store Pokemon data in state
        // Axios puts the response data in .data property
        setPokemonList(response.data.results);
        setIsLoading(false);          // Data loaded, turn off loading
      } catch (error) {
        setError(error.message);      // Store any errors
        setIsLoading(false);          // Turn off loading state
      }
    };

    fetchData();
  }, []); // Empty array means this runs once when component mounts

  // Show loading message while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error message if something went wrong
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render Pokemon list
  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {/* Map/Loop through Pokemon list and display names */}
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

