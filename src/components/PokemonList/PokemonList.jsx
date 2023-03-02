import { useContext } from "react";
import { PokemonDataContext } from "../../context/PokemonData.Context";
import PokemonTile from "../PokemonTile/PokemonTile";
import { PokemonListContainer } from "./PokemonList.styles";

const PokemonList = () => {
  const { pokemonData, searchedPokemon } = useContext(PokemonDataContext);
  return (
    <PokemonListContainer>
      {searchedPokemon === null
        ? pokemonData.map((pokemon) => {
            return (
              <PokemonTile
                key={`${pokemon.pokemon_v2_pokemonspecy.name} tile`}
                pkmnData={pokemon}
              />
            );
          })
        : searchedPokemon.map((pokemon) => {
            return (
              <PokemonTile
                key={`${pokemon.pokemon_v2_pokemonspecy.name} tile`}
                pkmnData={pokemon}
              />
            );
          })}
    </PokemonListContainer>
  );
};

export default PokemonList;
