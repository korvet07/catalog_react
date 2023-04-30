import styled from "styled-components";
import { NavLink } from "react-router-dom";


function LinkHeader({ className, children }) {
  return (
    <NavLink to="#" className={className}>
      {children}
    </NavLink>
  )
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  min-height: 80px;
  gap: 10px;
  align-items: center;
  padding: 10px ${(props) => props.theme.indent};
  color: ${(props) => props.theme.textColor};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 5px;

  svg {
    fill: #3F4E65;
  }

  &:hover svg {
    fill: coral;
    transition: fill 0.5ms ease;
  }
  `;

export const LinkNav = styled(LinkHeader)`
    text-decoration: none;
    font-size: 22px;
    line-height: 120%;
    color: #102654;
  
    &:hover {
      color:coral;
    }
  `;

export const WrapperLink = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  `

export const Head = styled.header`
  background: #ffd700b3;
  `