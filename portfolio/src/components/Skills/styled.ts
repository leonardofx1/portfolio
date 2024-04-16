import styled from 'styled-components'
import { thema } from '../../styles/thema'



export const SkillContainer = styled.section `
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing:border-box;
    max-width: 950px;
    width: 100%;
    height: auto;
    min-height: 300px;

    margin:1rem;
    padding:1rem;

    border-radius:5px;

    gap: 10px;
    
`



export const ReactIcon = styled.span `
    display:flex;

    color:blue;
    background: ${thema.color.grayBold};
    text-align: center;

    padding:.5rem;

    position:absolute;
    top:-4px ;
    left:-4px;
    border:4px solid ${thema.color.purpleBold};
    color:#00FFFF;
`

