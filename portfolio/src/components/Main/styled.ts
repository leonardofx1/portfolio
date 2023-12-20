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
    justify-content: space-evenly;

    min-height: 500px;
    width: 100%;
    height: 100%;

    margin-top: 2rem;
  }
`;

export const Introducing = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 350px;

  width: 100%;
  height: 120px;
  max-height: auto;
  line-height: 0px;
  color: ${thema.color.textGray300};
  font-size: 1.5rem;

  gap: 2.5rem;
  padding: 1rem;
  border: 3px solid ${thema.color.purpleligth};
  border-radius: 5px;
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
`;

export const ImgContainer = styled.section`
  display: flex;
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 200px;
  background-color: ${thema.color.purpleligth};

  border-radius: 150px 150px 5px 5px;
  box-shadow: 1px 1px 15px ${thema.color.purpleligth};
`;

export const MyImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 400px;
  max-width: 400px;
  top: -200px;
  right: -50px;
  position: absolute;
  z-index: 5;
`;
