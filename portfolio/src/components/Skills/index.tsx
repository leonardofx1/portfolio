import * as S from "./styled";

import zustand from "../../assets/zustand.png";

import styled from "../../assets/styled.png";
import Card from "../Card";
import Title from "../Tittle";
const Skill = () => {
  return (
    <S.SkillContainer>
      <Title>Habilidades</Title>

      <Card img={zustand} description="oldsgbfda" />
      <Card img={styled} description="ola" />
    </S.SkillContainer>
  );
};

export default Skill;
