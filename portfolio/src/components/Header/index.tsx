import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import * as S from './style' 


const Header = () => {
    return (

      <><S.HeaderContainer><h1> <RxCaretLeft size={32} />Leonardo.dev < RxCaretRight size={32}/></h1> <S.NavHeader>
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