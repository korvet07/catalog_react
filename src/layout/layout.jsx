import React from "react";
import { Wrapper } from "./styled";
import { Outlet } from "react-router-dom";
import Header from './header/header';
import Footer from './footer/footer';


export default function Layout({ showPopup, quantityBaskedProduct }) {

  return (
    <Wrapper showPopup={showPopup}>
      <Header quantity={quantityBaskedProduct}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
}
