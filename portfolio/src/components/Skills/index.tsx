import * as S from './styled'


import zustand from '../../assets/zustand.png'

import styled from '../../assets/styled.png'
const Skill = () => {



    return (
        <S.SkillContainer>
        <S.Title>Habilidades</S.Title>
        <S.SkillCardBody>
            <li>
                <img src={zustand} alt="" />
            </li>
            <li>Lorem ipsum dolr aliquam magnam, quam in molestias non nesciunt tempora dolore aperiam, architecto odit perferendis aut earum blanditiis temporibus amet. Earum, aspernatur ipsum?</li>
        </S.SkillCardBody>  <S.SkillCardBody>
            <li>
                <img src={styled} alt="" />
            </li>
            <li>Lorem ipsum dolr aliquam magnam, quam in molestias non nesciunt tempora dolore aperiam, architecto odit perferendis aut earum blanditiis temporibus amet. Earum, aspernatur ipsum?</li>
        </S.SkillCardBody>
        </S.SkillContainer>
    )
}

export default Skill