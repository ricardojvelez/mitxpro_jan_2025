import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FetchComponentSinglePokemon.css";

// Component to display details of a single Pokemon
// Props:
// - name: the name of the Pokemon to fetch and display
export const FetchComponentSinglePokemon = ({ name = "pikachu" }) => {
  const [pokemon, setPokemon] = useState({}); // State to store the Pokemon's detailed information  
  const [isLoading, setIsLoading] = useState(true); // Loading state while fetching Pokemon data
  const [error, setError] = useState(null); // State to store any errors that occur

  // Fetch Pokemon data when component mounts or name changes
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Get detailed Pokemon data from the API using axios
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(response.data);    // Store Pokemon data
        setIsLoading(false);          // Data loaded, turn off loading
      } catch (error) {
        setError(error.message);      // Store any errors
        setIsLoading(false);          // Turn off loading state
      }
    };

    fetchPokemon();
  }, [name]); // Re-run when Pokemon name changes

  // Show loading message while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error message if something went wrong
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render Pokemon details in a card format
  return (
    <div className="details">
      {/* Pokemon name */}
      <h1 className="name">{pokemon.name}</h1>

      {/* Pokemon sprite/image */}
      <img
        className="image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      {/* Basic Pokemon stats */}
      <p className="info">Weight: {pokemon.weight}</p>
      <p className="info">Height: {pokemon.height}</p>

      {/* Pokemon abilities section */}
      <h2 className="info-header">Abilities:</h2>
      <ul className="abilities">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="ability">
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
