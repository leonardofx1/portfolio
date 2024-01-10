import styled from 'styled-components'
import { thema } from '../../styles/thema'



export const SkillContainer = styled.section `
    box-sizing:border-box;
    max-width: 950px;
    width: 100%;
    height: auto;
    min-height: 300px;

    position: relative;

    margin:1rem;
    padding:1rem;


    border-radius:5px;

    padding: 1rem;
`

export const Title = styled.h1 `
    font-size:2rem;
    width: 100%;
    text-align: center;
    color:${thema.color.purpleligth};

    padding:1rem;
    border-image: linear-gradient(to right,${thema.color.primaryColorBold}, ${thema.color.purpleligth}, ${thema.color.primaryColorBold}) 1;
    border-top: 4px  solid transparent;
    border-bottom: 4px  solid ;
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

export const SkillCardBody = styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${thema.color.primaryColorBold};
    padding:0;

    height: 300px;
    width:200px;

    border-radius:15px;
    overflow: hidden;
    gap:5px;

    box-shadow: 1px 1px 5px ${thema.color.purpleBold};
    li {
        list-style: none;
        
        font-size: 1rem;
        width: 100%;
        text-align: center;

        color:${thema.color.textGray300}
    }
    li:not(:has(img)) {
    
        height:100%;

    }
    li img {
        width: 200px;
        height:100%;
        object-fit:cover ;
    }
`