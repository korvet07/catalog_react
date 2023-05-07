import React from "react";
import { Wrapper } from "./styled";
import { Outlet } from "react-router-dom";
import Header from './header/header';
import Footer from './footer/footer';


export default function Layout({ showPopup }) {

  return (
    <Wrapper showPopup={showPopup}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
}
