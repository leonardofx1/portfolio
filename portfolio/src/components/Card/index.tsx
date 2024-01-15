import * as S from './styled'

interface TypeSkillCard {
    img:string,
    description?:string,
    stacks?:string[]
}


const Card = ({img, description, stacks}:TypeSkillCard) => {

    return (
        <S.SkillCardBody>
        <li>
            <img src={img} alt="" />
        </li>
       {typeof description !== 'undefined' &&  <li>{description}</li>}
        {typeof stacks !== 'undefined' && <S.Stack>{stacks.map( stack =><span>{stack}</span>)}</S.Stack>}
    </S.SkillCardBody>
    )

}

export default Card