//TODO this component doesn't handle navigation anymore
//refactor naming to reflect Banner
//also find a logo

import { useContext } from "react";
import { PokemonDataContext } from "../../context/PokemonData.Context";
import { Navbar, BannerSearchBar, BannerLogo } from "./Navigation.styles";

const Navigation = () => {
  const { pokemonData, setSearchedPokemon } = useContext(PokemonDataContext);

  const textChangeHandler = (e) => {
    if (e.target.value === "") {
      setSearchedPokemon(null);
    } else {
      const searchedArr = pokemonData.filter((pokemon) => {
        return pokemon.pokemon_v2_pokemonspecy.name.startsWith(
          e.target.value.toLowerCase()
        );
      });
      setSearchedPokemon(searchedArr);
    }
  };

  return (
    <Navbar>
      <BannerLogo src="site-logo.png" alt="Pokedex" />
      <BannerSearchBar
        onChange={textChangeHandler}
        type="text"
        placeholder="Search for Pokemon"
      />
    </Navbar>
  );
};

export default Navigation;
