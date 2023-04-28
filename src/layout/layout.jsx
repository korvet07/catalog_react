import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, Nav, StyledLink, Container } from "./styled";
import { Outlet } from "react-router-dom";
import { Logo } from '/src/logo/logo';
import iconTel from '/src/assets/phone-call.svg';
import iconEmail from '/src/assets/email.svg'
import iconBasket from '/src/assets/basket.svg'
import { HandySvg } from 'handy-svg';
import styled from "styled-components";

function LogoLink({ className }) {
  return (
    <NavLink to="/" className={className}>
      <Logo />
    </NavLink>
  )
};

const LogoLinkNav = styled(LogoLink)`
  margin-right: auto;
  `;

export default function Layout() {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <LogoLinkNav />
          <StyledLink to={`#`}>
            <HandySvg
              src={iconBasket}
              width="30"
              height="30"
            />
          </StyledLink>
          <StyledLink to={`tel:+74950005252`}>
            <HandySvg
              src={iconTel}
              width="25"
              height="25"
            />
          </StyledLink>
          <StyledLink to={`mailto:info@sd.ru`}>
            <HandySvg
              src={iconEmail}
              width="25"
              height="25"
            />
          </StyledLink>
        </Nav>
      </Container>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Wrapper>
  );
}
