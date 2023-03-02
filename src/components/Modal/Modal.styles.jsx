import styled from "styled-components";

export const ModalBackground = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  will-change: height, opacity, top, width, left, z-index;
  transition: width 0.4s, height 0.4s, opacity 0.4s, top 0.4s, left 0.4s,
    z-index 0.4s;

  &:after {
    content: "Click anywhere on the background to close";
    position: fixed;
    bottom: 10px;
    background-color: white;
    padding: 3px;
    border-radius: 10px;
  }
`;

export const ModalContainer = styled.div`
  overflow-y: auto;
  width: 60%;
  max-width: 700px;
  height: 75%;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  transition: width 0.6s;

  @media (max-width: 560px) {
    width: 80%;
  }
`;

export const PokemonName = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: var(--dark);
  color: white;
  border-bottom: 1px dotted black;
`;

export const PokemonSprite = styled.img`
  display: inline;
  width: 160px;
  height: 160px;
  border-radius: 20px;
`;

export const SpriteStatContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SpriteTypes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    margin-top: 30px;
  }
`;
