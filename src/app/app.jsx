import React, { useState, useEffect } from "react";
import ProductPage from "/src/product-page/product-page";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { GlobalStyle } from './styled';
import { getLocalData } from '../mock';

const products = getLocalData();

function ProductOr404({ products, showPopup, setIsShowPopup }) {
  const { code } = useParams();
  const product = products.find((product) => product.code.toString() === code);
  return product ? (
    <ProductPage product={product} isShowPopup={showPopup} setIsShowPopup={setIsShowPopup} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

export default function App() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout showPopup={isShowPopup} />}>
          <Route index element={<Catalog products={products} />} />
          <Route path="product">
            <Route
              path=":code"
              element={<ProductOr404 products={products} showPopup={isShowPopup} setIsShowPopup={setIsShowPopup} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
