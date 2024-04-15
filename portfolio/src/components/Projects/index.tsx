import Card from '../Card'
import Title from '../Tittle'
import * as S from './styled'
import fxmoney from '../../assets/fxmoney.png'

const Projects = () => {

  return(
    <>
    <S.ProjectContainer>
        <Title>Projetos</Title>
      <Card img={fxmoney} stacks={['javascript', 'firebase']}/> 
    </S.ProjectContainer>
    </>
  )
}

export default Projects