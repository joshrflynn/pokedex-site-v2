//libraries
import axios from "axios";
import { useEffect, useContext } from "react";
//components
import { PokemonDataContext } from "./context/PokemonData.Context";
import Navigation from "./components/Navigation/Navigation";
import PokemonList from "./components/PokemonList/PokemonList";
import Modal from "./components/Modal/Modal";
import { ModalContext } from "./context/Modal.Context";
import { POKEDEX_MAX_SIZE } from "./utils/utils";

const query = `
query pokemonQuery {
  pokemon_v2_pokemon(where: {pokemon_species_id: {_lte: 1008}}) {
    pokemon_v2_pokemonstats {
      base_stat
    }
    pokemon_species_id
    pokemon_v2_pokemonspecy {
      pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1, order_by: {id: desc}) {
        flavor_text
      }
      pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}, limit: 1, order_by: {id: desc}) {
        genus
      }
      name
      pokemon_v2_evolutionchain {
        pokemon_v2_pokemonspecies {
          id
        }
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
        pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}, order_by: {id: desc}, limit: 1) {
          effect
        }
      }
    }
  }
}
`;

function App() {
  const { pokemonData, setPokemonData } = useContext(PokemonDataContext);
  const { modalData, setModalData } = useContext(ModalContext);

  //on first time load, makes the request to the graphQL endpoint
  //to pull all pokemon data
  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(
        "https://beta.pokeapi.co/graphql/v1beta",
        {
          query,
          headers: {
            "Content-Type": "application/json",
            "X-Method-Used": "graphiql",
          },
        }
      );
      setPokemonData(
        response.data.data.pokemon_v2_pokemon.slice(0, POKEDEX_MAX_SIZE)
      );
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div
        style={{
          textAlign: "center",
          width: "50%",
          minWidth: "250px",
          margin: "20px auto",
        }}
      >
        This app is still under development! Follow updates{" "}
        <a
          href="https://github.com/joshrflynn/pokedex-site"
          target="_blank"
          rel="noreferrer"
        >
          on my GitHub!
        </a>
      </div>

      {/* loads list when api call finishes */}
      {pokemonData === null ? <p>Loading</p> : <PokemonList />}

      {/* sets modalData to the first pokemon in the list */}
      {pokemonData !== null ? <Modal /> : ""}
    </div>
  );
}

export default App;
