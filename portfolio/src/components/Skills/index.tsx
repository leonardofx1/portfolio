import * as S from './styled'


import zustand from '../../assets/zustand.png'

import styled from '../../assets/styled.png'
import SkillCard from './components/SkillCard'
const Skill = () => {



    return (
        <S.SkillContainer>
        <S.Title>Habilidades</S.Title>
     
            <SkillCard img={zustand} description='ola' />
            <SkillCard img={styled} description='ola'/>
        </S.SkillContainer>
    )
}

export default Skill