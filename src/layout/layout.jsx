import React from "react";
import { Wrapper, Container } from "./styled";
import { Outlet } from "react-router-dom";
import Header from './header/header';
import Footer from './footer/footer';


export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer/>
    </Wrapper>
  );
}
