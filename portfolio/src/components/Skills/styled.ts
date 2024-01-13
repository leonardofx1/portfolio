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

    position: relative;

    margin:1rem;
    padding:1rem;

    border-radius:5px;


`

export const Title = styled.h1 `
    display: block;
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

    align-items: center;
    background-color: ${thema.color.primaryColorBold};
    padding:0;

    height: 300px;
    max-width:400px;
    width:100%;
    position:relative;
    border-radius:15px;
    overflow: hidden;

    box-shadow: 1px 1px 5px ${thema.color.purpleBold};

    &:hover li:not(:has(img)) {
        transform: translateY(0px);
    }
    li {
        list-style: none;
        
        font-size: 1.2rem;
        width: 100%;
        text-align: center;
        font-weight: bold;
        color:white;
    }
    li:not(:has(img)) {
        position: absolute;
        height:100%;
        background-color: rgb(0,0,0, .5);
        transform: translateY(300px);
        transition: all 0.4s;
        display:flex;
        justify-content: center;
        align-items: center;

        padding: 1rem;
    }
    li img {
        width: 100%;
        height:100%;
        object-fit:contain ;
    }
`