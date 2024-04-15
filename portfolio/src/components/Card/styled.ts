import styled from "styled-components";
import { thema } from "../../styles/thema";

export const SkillCardBody = styled.ul`
  display: flex;
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
  align-items: center;
  background-color: ${thema.color.primaryColorBold};
  padding: 0;

  height:250px;
  max-width: 250px;
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;



  &:hover {
    clip-path: circle(50% at 50% 50%);
  }
  &:hover li:not(:has(img)) {
    transform: translateY(0px);
  }
  li {
    list-style: none;

    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: white;
  }
  li:not(:has(img)) {
    position: absolute;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    transform: translateY(300px);
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
  }
  li img {
    width: 100%;
    height: 100%;

  }

`;

export const Stack = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%!important;


  gap: 5px;

  span {
    min-width:80px;
    padding: 5px;
    color: ${thema.color.white};
    font-weight: bold;
    background-color: ${thema.color.textGray300};

    border-radius: 5px;

    font-size:small;
  }
`;
