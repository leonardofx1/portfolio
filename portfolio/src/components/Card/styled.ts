import styled from "styled-components";
import { thema } from "../../styles/thema";

export const SkillCardBody = styled.ul`
  display: flex;

  align-items: center;
  background-color: ${thema.color.primaryColorBold};
  padding: 0;

  height: 300px;
  max-width: 400px;
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  box-shadow: 1px 1px 5px ${thema.color.purpleBold};

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
    object-fit: cover;
  }
`;

export const Stack = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;
  height: 80%!important;

  max-height: 100%;
  gap: 5px;
  box-shadow: inset 250px 250px 250px rgb(0, 0, 0, 0.5),
    inset 250px 250px 250px rgb(0, 0, 0, 0.5);
  span {
    padding: 10px;
    color: ${thema.color.white};
    font-weight: bold;
    background-color: ${thema.color.textGray300};

    border-radius: 5px;
  }
`;
