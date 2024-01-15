import styled from 'styled-components'
import { thema } from '../../styles/thema'

export const Title = styled.h1 `
    display: block;
    font-size:2rem;
    width: 100%;
    text-align: center;
    color:${thema.color.purpleligth};

    padding:1rem;
    max-height: 80px;
    border-image: linear-gradient(to right,${thema.color.primaryColorBold}, ${thema.color.purpleligth}, ${thema.color.primaryColorBold}) 1;
    border-top: 4px  solid transparent;
    border-bottom: 4px  solid ;
`