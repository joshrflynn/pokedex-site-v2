import { createContext, useState } from "react";

export const PokemonDataContext = createContext();

export const PokemonDataProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  const value = {
    pokemonData,
    setPokemonData,
    searchedPokemon,
    setSearchedPokemon,
  };

  return (
    <PokemonDataContext.Provider value={value}>
      {children}
    </PokemonDataContext.Provider>
  );
};
