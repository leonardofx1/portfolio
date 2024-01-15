import * as S from './styled'

interface TypeTitle {
    children:React.ReactNode
}

const Title = ({children}:TypeTitle) => {


return (
    <S.Title>{children}</S.Title>
)

}

export default Title