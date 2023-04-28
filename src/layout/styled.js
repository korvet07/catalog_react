import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.textColor};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 5px;
  svg {
    fill: #3F4E65;
  }
  &:hover svg {
    fill: coral;
  }
  `;

export const Container = styled.div`
    padding: 0 ${(props) => props.theme.indent};
    max-width: 1200px;
    margin: 0 auto;
  `