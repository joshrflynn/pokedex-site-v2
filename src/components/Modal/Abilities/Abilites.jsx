import { capitalizeFirstLetter } from "../../../utils/utils";
import { AbilityContainer, Ability } from "./Abilities.styles";

const Abilites = ({ abilityData }) => {
  return (
    <AbilityContainer>
      <p
        style={{
          textDecoration: "underline",
        }}
      >
        Abilities
      </p>
      {abilityData.map((ability) => {
        return (
          <>
            <Ability
              abilityText={ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect.toString()}
            >
              {capitalizeFirstLetter(ability.pokemon_v2_ability.name)}
            </Ability>
          </>
        );
      })}
    </AbilityContainer>
  );
};

export default Abilites;
