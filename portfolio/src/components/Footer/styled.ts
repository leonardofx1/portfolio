import styled from "styled-components";


 export const Footer = styled.footer `
 display: flex;
 position: relative;

 height:30px;
 width: 100%;
 margin-top: 1rem;

 text-align: center;
 p {
    width: 100%;
    color:white;
    font-size: 1.5rem;
    text-align: center;
 }
 
 div {
    display: flex;
    gap: 5px;
    position: absolute;
    right: 10px;
 }
`
export const Whatsapp = styled.span `
svg {
    color: white;
    background-color: green;



    width: auto;
    overflow: hidden;
    padding: .3rem;
    border-radius: 50%;
 }

`
export const Github = styled.span `

svg {
    color: black;
    background-color: white;



    width: auto;
    overflow: hidden;
    padding: .1rem;
    border-radius: 50%;
 }
`
export const Linkedin = styled.span `

svg {
    color: #0A66C2;
    background-color: white;



    width: auto;
    overflow: hidden;
   
    border-radius: 5px;
 }
`