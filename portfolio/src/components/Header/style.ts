import styled from "styled-components";
import { thema } from "../../styles/thema";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;

  background-color: ${thema.color.primaryColorBold};

    border-bottom: 2px solid ${thema.color.purpleligth};
  h1 {
    display:flex;
    align-items: center;
    color: ${thema.color.textGray300};
    
    border-bottom:.1rem solid ${thema.color.purpleBold};
    
  }
`;

export const NavHeader = styled.nav`
    display:flex;
    min-width: 100px;
    margin-right:2rem;
    ul {
        display:flex;
        width:100%;
        gap:1rem;
        font-size:1.2rem;
        li {
            width:100px;
            text-align:center;
            list-style: none;
            padding: .2rem;
            
            border-radius: .2rem;
            
            color:${thema.color.textGray400};
            
            transition: all 200ms ease-in-out;
            cursor:pointer;

            border-bottom:.1rem solid ${thema.color.purpleBold};
            &:hover{ 
                color:white;
                background-color: ${thema.color.textGray300};
          
            }
        }
    }
`;
