import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  grid-column-gap: 2rem;
  padding: 2rem 1rem;
  position: ${props => props.sticky ? "sticky" : null };
  top: ${props => props.sticky ? 0 : null };
  background-color: ${props => props.theme.colors.bodyBgColor};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 21;

   @media ${(props) => props.theme.breakpoints.md} {
     grid-template-columns: auto 1fr;    
   }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  
  a, span{
    font-size: 2.5rem;
    font-weight: bold;
  
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 2rem;
    }
  }
`;

export const Div2 = styled.ul`
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${props => props.theme.colors.primary1};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.button};
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const MenuItem = styled.div`
display: none;
@media ${(props) => props.theme.breakpoints.md} {
  display: block;
  margin: 2rem 4rem;
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
}
`
export const Burger = styled.div`
display: none;

@media ${(props) => props.theme.breakpoints.md} {
  display: flex;
  align-content: center;
  justify-content: flex-end;
}
`