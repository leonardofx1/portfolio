import * as S from './styled'

import leo from '../../../public/leo.png'



const Main = () => {

    return (
        <S.MainContainer>
          <div>
          <S.ImgContainer>
                <S.MyImg src={leo} alt="" />
            </S.ImgContainer>
           <S.Introducing>
            <p>ola eu sou,</p>
            <h2>Leonardo </h2>
           <h3>Desenvolvedor Front-End</h3>
           </S.Introducing>
          </div>
        </S.MainContainer>
    )
}


export default Main