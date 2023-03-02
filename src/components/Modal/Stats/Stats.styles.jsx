import styled from "styled-components";

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    margin: 30px 0px;
    justify-content: space-around;
    height: 210px;
  }
`;

export const BaseStats = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const BaseStatBar = styled.div`
  width: 140px;
  display: inline-flex;
  min-height: 100%;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  border: 1px solid black;
  box-shadow: 0px 0px 3px black;
  margin: 4px 0;

  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: white;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(to left, white var(--barFill), var(--dark) 0%);
`;
