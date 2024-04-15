import * as S from './styled'

import leo from '../../assets/leo.png'
import Skill from '../Skills'
import Projects from '../Projects'



const Main = () => {

    return (
        <S.MainContainer>
          <div>
          <S.ImgContainer>
                <S.MyImg src={leo} alt="" />
            </S.ImgContainer>
           <S.Introducing>
            <p>Olá, sou o Leonardo desenvolvedor front-end dedicado à criação de designs responsivos e modernos. Com as principais tecnologias do mercado.</p>
           </S.Introducing>
          </div>
          <Skill />
          <Projects />
        </S.MainContainer>
    )
}


export default Main