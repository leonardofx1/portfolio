import { CaretLeft, CaretRight } from 'phosphor-react'
import * as S from './style' 


const Header = () => {
    return (

      <><S.HeaderContainer><h1> <CaretLeft size={32} />Leonardo.dev <CaretRight size={32}/></h1> <S.NavHeader>
          <ul>
            <li>
              Projetos
            </li>
            <li>
              Sobre mim
            </li>
            <li>
              Contatos
            </li>
          </ul>
        </S.NavHeader> </S.HeaderContainer>
       </>
    )

}

export default Header