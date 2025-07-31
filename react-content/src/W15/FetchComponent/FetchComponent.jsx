import React, { useState, useEffect } from "react";
import { FetchComponentSinglePokemon } from "../FetchComponentSinglePokemon/FetchComponentSinglePokemon";
import './FetchComponent.css';

export const FetchComponent = () => {
  const [pokemonList, setPokemonList] = useState([]); // State to store our list of Pokemon
  const [isLoading, setIsLoading] = useState(true); // Loading state to show while fetching data
  const [error, setError] = useState(null); // State to store any errors that might occur

  // useEffect runs when the component mounts
  useEffect(() => {
    // Async function to fetch Pokemon data
    const fetchData = async () => {
      try {
        // Fetch first 12 Pokemon from the API
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");

        // Check if the fetch was successful
        if (response.ok) {
          const data = await response.json();
          setPokemonList(data.results);  // Store Pokemon in our state
        } else {
          throw new Error("Error fetching data");
        }
        setIsLoading(false);  // Data loaded, turn off loading state
      } catch (error) {
        setError(error.message);  // Store any errors
        setIsLoading(false);     // Turn off loading state
      }
    };

    // Call our fetch function
    fetchData();
  }, []); // Empty array means this only runs once when component mounts

  // Show loading message while data is being fetched
  if (isLoading) {
    return <div className="loading">Loading Pokémon...</div>;
  }

  // Show error message if something went wrong
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Render our Pokemon list
  return (
    <div className="pokemon-container">
      <h1 className="pokemon-title">Pokémon List</h1>
      <ul className="pokemon-grid">
        {/* Map through each Pokemon and create a card for it */}
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} className="pokemon-card">
            <FetchComponentSinglePokemon name={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

