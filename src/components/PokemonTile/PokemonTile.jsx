import {
  PokemonTileContainer,
  DexNumber,
  PokemonTileSprite,
  PokemonTileName,
} from "./PokemonTile.styles";
//utils
import { TYPE_COLORS } from "../../utils/typeColors";
import { capitalizeFirstLetter } from "../../utils/utils";
import { useContext } from "react";
import { ModalContext } from "../../context/Modal.Context";

const PokemonTile = ({ pkmnData }) => {
  const { setModalData, setIsModalOpen } = useContext(ModalContext);

  const tileClickHandler = () => {
    setIsModalOpen(true);
    setModalData(pkmnData);
  };

  const types = pkmnData.pokemon_v2_pokemontypes.map((type) => {
    return type.pokemon_v2_type.name;
  });

  //sets background to match pokemon type colors
  const style =
    types.length > 1
      ? {
          backgroundImage: `linear-gradient(to right, ${
            TYPE_COLORS[types[0]]
          } 50%, ${TYPE_COLORS[types[1]]} 50%)`,
        }
      : {
          backgroundColor: `${TYPE_COLORS[types[0]]}`,
        };

  return (
    <>
      <PokemonTileContainer style={style} onClick={tileClickHandler}>
        <DexNumber>{pkmnData.pokemon_species_id}</DexNumber>
        <PokemonTileSprite
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pkmnData.pokemon_species_id}.png`}
          alt={`${pkmnData.pokemon_v2_pokemonspecy.name} sprite`}
          draggable={false}
        />
        <PokemonTileName>
          {capitalizeFirstLetter(pkmnData.pokemon_v2_pokemonspecy.name)}
        </PokemonTileName>

        {/* <PokemonModal show={show} setShow={setShow} data={data} /> */}
      </PokemonTileContainer>
    </>
  );
};

export default PokemonTile;
