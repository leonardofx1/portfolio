import * as S from "./styled";

import react from "../../assets/react.png";
import drizzle from "../../assets/drizzle.jpg";
import next from "../../assets/next.png";
import sass from "../../assets/sass.png";
import typescript from "../../assets/typescript.jpg";
import Card from "../Card";
import Title from "../Tittle";
const Skill = () => {
  return (
    <S.SkillContainer>
      <Title>Habilidades</Title>

      <Card img={react} description="React" />

      <Card img={drizzle} description="Drizzle ORM" />
      <Card img={next} description="NextJs" />
      <Card img={sass} description="Sass" />
      <Card img={typescript} description="Typescript" />
    </S.SkillContainer>
  );
};

export default Skill;
