import * as S from './styled'

import leo from '../../assets/leo.png'
import Skill from '../Skills'



const Main = () => {

    return (
        <S.MainContainer>
          <div>
          <S.ImgContainer>
                <S.MyImg src={leo} alt="" />
            </S.ImgContainer>
           <S.Introducing>
            <p>Olá, sou um entusiasta desenvolvedor front-end dedicado à criação de designs responsivos e modernos. Meu foco vai além da estética, priorizando a usabilidade e a experiência do usuário. Estou empenhado em entregar software de qualidade, adotando uma abordagem abrangente que tira o melhor proveito do ecossistema React.</p>
           </S.Introducing>
          </div>
          <Skill />
        </S.MainContainer>
    )
}


export default Main