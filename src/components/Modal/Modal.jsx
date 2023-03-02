import { useContext, useEffect } from "react";
import { ModalContext } from "../../context/Modal.Context";
import {
  ModalBackground,
  ModalContainer,
  PokemonName,
  PokemonSprite,
  SpriteStatContainer,
  SpriteTypes,
  TypeContainer,
} from "./Modal.styles";
import { TYPE_COLORS } from "../../utils/typeColors";
import { DARKENED_COLORS } from "../../utils/darkenedColors";
import { capitalizeFirstLetter } from "../../utils/utils";
import Abilites from "./Abilities/Abilites";
import Stats from "./Stats/Stats";

const Modal = () => {
  const { modalData, isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const modalNotEmpty = modalData !== null;

  //closed the modal when it's clicked on the background
  const modalClickHandler = (e) => {
    //prevents modal contents from closing the modal
    if (e.currentTarget !== e.target) return;
    setIsModalOpen(false);
  };

  //disables scrolling while Modal is being viewed
  useEffect(() => {
    if (isModalOpen) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "scroll";
    }
  }, [isModalOpen]);

  //pulls the type names from modalData, then sets the background to match the color for each type
  //single type: solid color
  //dual type: 50/50 gradient
  let types;
  let background;
  let defaultStyles = {};
  if (modalNotEmpty) {
    types = modalData.pokemon_v2_pokemontypes.map((types) => {
      return types.pokemon_v2_type.name;
    });
    background =
      types.length > 1
        ? `linear-gradient(to right, ${TYPE_COLORS[types[0]]} 50%, ${
            TYPE_COLORS[types[1]]
          } 50%)`
        : `${TYPE_COLORS[types[0]]}`;
    defaultStyles = {
      background: background,
      "--dark": DARKENED_COLORS[types[0]],
    };
  }

  //handles the style changes to open and close the modal
  const STYLES = {
    hideModalStyles: {
      ...defaultStyles,
      zIndex: -1,
      opacity: 0,
      height: "0px",
      width: "0px",
      top: "90%",
      left: "50%",
    },
    showModalStyles: {
      ...defaultStyles,
      opacity: 1,
      zIndex: 2,
      width: "100vw",
      height: "100%",
      top: "0%",
      left: "0%",
    },
  };

  return (
    <ModalBackground
      style={isModalOpen ? STYLES.showModalStyles : STYLES.hideModalStyles}
      onClick={modalClickHandler}
    >
      {modalNotEmpty && (
        <ModalContainer>
          <PokemonName>
            #{modalData.pokemon_species_id}{" "}
            {capitalizeFirstLetter(modalData.pokemon_v2_pokemonspecy.name)}
          </PokemonName>

          <p
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {
              modalData.pokemon_v2_pokemonspecy
                .pokemon_v2_pokemonspeciesnames[0].genus
            }
          </p>

          <SpriteStatContainer>
            <SpriteTypes>
              <PokemonSprite
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${modalData.pokemon_species_id}.png`}
              />
              <TypeContainer>
                {modalData.pokemon_v2_pokemontypes.map((type) => {
                  return (
                    <span
                      style={{
                        background: `${TYPE_COLORS[type.pokemon_v2_type.name]}`,
                        color: "white",
                        padding: "5px",
                        border: `1px solid black`,
                        marginTop: "5px",
                      }}
                    >
                      {type.pokemon_v2_type.name.toUpperCase()}
                    </span>
                  );
                })}
              </TypeContainer>
            </SpriteTypes>
            {/* <Abilites abilityData={modalData.pokemon_v2_pokemonabilities} /> */}
            <Stats statData={modalData.pokemon_v2_pokemonstats} />
          </SpriteStatContainer>

          <Abilites abilityData={modalData.pokemon_v2_pokemonabilities} />

          <p
            style={{
              width: "75%",
              marginLeft: "auto",
              marginRight: "auto",
              paddingBottom: "20px",
            }}
          >
            {
              modalData.pokemon_v2_pokemonspecy
                .pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
            }
          </p>
        </ModalContainer>
      )}
    </ModalBackground>
  );
};

export default Modal;
