import * as S from './styled'

import leo from '../../assets/leo.png'
import Skill from '../Skills'
import Projects from '../Projects'

import { FaGithub, FaLinkedin } from "react-icons/fa";


const Main = () => {

    return (
        <S.MainContainer>
          <div>
          <S.ImgContainer>
                <S.MyImg src={leo} alt="" />
                <S.containerMidia>
                    <FaGithub size={50}/>
                    <FaLinkedin size={50} />
                    <button> Download CV</button>
                </S.containerMidia>
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