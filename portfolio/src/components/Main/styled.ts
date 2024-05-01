import styled from "styled-components";
import { thema } from "../../styles/thema";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1220px;
  width: 100%;
  min-height: 90dvh;

  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 500px;
    width: 100%;
    height: 100%;

    margin-top: 2rem;
    gap:1rem;
  }
  
`;

export const Introducing = styled.section`
 
  flex-direction: column;

  max-width: 350px;

  width: 100%;
  height: auto;


  color: ${thema.color.textGray300};
  font-size: 1.5rem;

  box-sizing: border-box;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
`;

export const ImgContainer = styled.section`

  position: relative;
  max-width: 400px;
  width: 100%;
  height: 200px;
  background-color: ${thema.color.purpleligth};

  border-radius: 150px 150px 5px 5px;
  box-shadow: 1px 1px 15px ${thema.color.purpleligth};


`;
export const containerMidia = styled.section `
display: flex;
color: white;
    position: absolute;
    bottom: -60px;
 
    height: 50px;
    width: 100%;
    justify-content: center;

    gap: 15px;
    color: ${thema.color.purpleligth};

    button {
      border: none;
      border-radius: 5px;
      background-color: ${thema.color.purpleligth};
      font-weight: bold;
      color:black;
      cursor: pointer;

      transition: all ease-in-out 200ms;
      &:hover {
        background-color: ${thema.color.purpleBold};
        color: white;
      }
    }
svg {
  transition: all ease-in-out 200ms;
  cursor: pointer;
}
      & svg:hover {

        color: ${thema.color.purpleBold};
        

      }
`
export const MyImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 300px;
  max-width: 400px;
  top: -100px;
  right: -50px;
  position: absolute;
  z-index: 5;
`;



