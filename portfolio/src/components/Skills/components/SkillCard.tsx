import * as S from '../styled'

interface TypeSkillCard {
    img:string,
    description:string,
}


const SkillCard = ({img, description}:TypeSkillCard) => {

    return (
        <S.SkillCardBody>
        <li>
            <img src={img} alt="" />
        </li>
        <li>{description}</li>
    </S.SkillCardBody>
    )

}

export default SkillCard