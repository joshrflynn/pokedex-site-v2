import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  padding: 20px;
  background-color: rgb(200, 1, 1);
  width: auto;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 20px;
  z-index: 1;
  margin-bottom: 50px;

  @media (max-width: 560px) {
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const BannerLogo = styled.img`
  width: 300px;
  height: 100px;

  @media (max-width: 560px) {
    width: 300px;
    height: 80px;
  } ;
`;

export const BannerSearchBar = styled.input`
  border: 1px solid black;
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  text-align: center;

  @media (max-width: 560px) {
    width: 200px;
  }
`;
